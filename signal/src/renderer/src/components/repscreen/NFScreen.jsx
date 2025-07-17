import NFE from '../../assets/repsImages/NFE.png'
import download from '../../assets/repsImages/download.png'
import back from '../../assets/repsImages/back-arrow.png'
import website from '../../assets/repsImages/website.png'
import { AppContext } from '../../../contexts/ClientContext'
import React, { useContext, useEffect, useState } from 'react'

export default function NFEScreen( serialNumber ) {
  const { setNfeVisible, socket } = useContext(AppContext)
  const [nfe, setNfe] = useState(null)
  useEffect(() => {
    socket.emit('nfe-request', { serialNumber })
    console.log('NFE request sent for serial number:', serialNumber)
    socket.on('nfeFetched', (data) => {
      console.log('NFE fetched:', data)
      setNfe(data.nfe)
    })
  }, [socket])

  return (
    <div className="nfe-screen">
      <h2>Nota Fiscal Eletrônica</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, marginTop: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#264753ff', padding: 20, borderRadius: 10 }}>
          <img width={'70%'} src={`${import.meta.env.VITE_SERVER_URL}/uploads/${nfe}`} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          <button onClick={() => setNfeVisible(false)}><img width={40} src={back} alt=""  /></button>
          <button>
            <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} href={NFE} download>
              <img style={{ marginLeft: 7 }} width={40} src={download} alt="" />
            </a>
          </button>
          <button >
            <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} href={`${import.meta.env.VITE_SERVER_URL}/uploads/${nfe}`} target="_blank" rel="noopener noreferrer">
              <img style={{}} width={40} src={website} alt="" />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
