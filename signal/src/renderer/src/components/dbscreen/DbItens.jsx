import React, { useContext, useEffect, useState } from 'react'
import downloadIcon from '../../assets/database/download.png'
import dbImg from '../../assets/database/database.png'
import delImg from '../../assets/delete.png'
import { useAppContext } from '../../../contexts/ClientContext'

export default function DbItens({ db }) {
  const { sidebarSelected, setSidebarSelected } = useAppContext()
  const [dbSize, setDbSize] = useState(null)
  useEffect(() => {
    if (db) {
      setDbSize((db.db_size / (1024 * 1024)).toFixed(2) + ' MB')
    }
  }, [db])

  return (
    <div className="db-itens">
      <div style={{ gap: '5px', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', marginLeft: '-50px' }}>
        <h3>Cliente: {db.client}</h3>
        <h3>Serviço: {db.service}</h3>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', marginTop: '20px' }}>
          <h4
            style={{
              fontSize: '14px',
              backgroundColor: '#354B53',
              borderRadius: '5px',
              padding: '10px',
              textAlign: 'center'
            }}
          >
            Data: {new Date(db.db_date).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            })}
          </h4>
          <h4
            style={{
              fontSize: '14px',
              backgroundColor: '#354B53',
              borderRadius: '5px',
              padding: '10px',
              textAlign: 'center'
            }}
          >
            {dbSize}
          </h4>
        </div>
      </div>
      <hr style={{ height: '150px', color: '#354B53' }} />
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <a
          className='db-itens-link'
          href={`${import.meta.env.VITE_SERVER_URL}/uploads/${db.locate}`}
          download
        >
          <img src={downloadIcon} alt="Download" width={40} style={{ marginLeft: '8px' }} />
        </a>
        <button
          
        >
          <img src={delImg} alt="Delete" width={40}  />
        </button>
      </div>
    </div>
  )
}
