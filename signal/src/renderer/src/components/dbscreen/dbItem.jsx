import React, { useContext } from 'react'
import downloadIcon from '../../assets/database/download.png'
import { useAppContext } from '../../../contexts/ClientContext'

export default function DbItens() {
  const { sidebarSelected, setSidebarSelected } = useAppContext()

  return (
    <div className="db-itens">
      <div style={{ gap: '5px', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
        <h4>Cliente: Texas Carnes</h4>
        <h4>Serviço: Flex Junior 4</h4>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'row', marginTop: '20px' }}>
          <h4
            style={{
              fontSize: '12px',
              backgroundColor: '#354B53',
              borderRadius: '5px',
              padding: '5px',
              textAlign: 'center'
            }}
          >
            Data: 2023-10-01
          </h4>
          <h4
            style={{
              fontSize: '12px',
              backgroundColor: '#354B53',
              borderRadius: '5px',
              padding: '5px',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#354B53',
            cursor: 'pointer',
            width: 65,
            height: 65,
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          <img src={downloadIcon} alt="Download" width={40} style={{ marginLeft: '5px' }} />
        </button>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#354B53',
            cursor: 'pointer',
            width: 65,
            height: 65,
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        ></button>
      </div>
    </div>
  )
}
