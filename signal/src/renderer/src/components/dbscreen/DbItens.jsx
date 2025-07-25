import React, { useContext } from 'react'
import downloadIcon from '../../assets/database/download.png'
import dbImg from '../../assets/database/database.png'
import delImg from '../../assets/delete.png'
import { useAppContext } from '../../../contexts/ClientContext'

export default function DbItens() {
  const { sidebarSelected, setSidebarSelected } = useAppContext()

  return (
    <div className="db-itens">
      <img src={dbImg} width={30} alt="Database" style={{position: 'relative', top: -65, left: -20}} />
      <div style={{ gap: '5px', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', marginLeft: '-50px' }}>
        <h3>Cliente: Texas Carnes</h3>
        <h3>Serviço: Flex Junior 4</h3>
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
            Data: 2023-10-01
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
            Tamanho: 47MB
          </h4>
        </div>
      </div>
      <hr style={{ height: '150px', color: '#354B53' }} />
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <button
          style={{
            
          }}
        >
          <img src={downloadIcon} alt="Download" width={40} style={{ marginLeft: '8px' }} />
        </button>
        <button
          
        >
          <img src={delImg} alt="Delete" width={40}  />
        </button>
      </div>
    </div>
  )
}
