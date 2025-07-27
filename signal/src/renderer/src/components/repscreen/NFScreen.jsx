import NFE from '../../assets/repsImages/NFE.png'
import download from '../../assets/repsImages/download.png'
import back from '../../assets/repsImages/back-arrow.png'
import website from '../../assets/repsImages/website.png'
import upload from '../../assets/repsImages/upload.png'
import { AppContext } from '../../../contexts/ClientContext'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export default function NFEScreen({ serialNumber }) {
  
  const { setNfeVisible, socket } = useContext(AppContext)
  const [image, setImage] = useState(null)
  const [nfe, setNfe] = useState(null)
 useEffect(() => {
  if (!serialNumber) return;

  socket.emit('nfe-request', serialNumber);
  console.log('NFE request sent for serial number:', serialNumber);

  const handleFetched = (data) => {
    console.log('NFE fetched:', data);
    console.log('Serial Number:', serialNumber);
    if (data.nfe !== null) {
      console.log('NFE data received:', data);

      setNfe(data.nfe);
    }
  };

  socket.on('nfeFetched', handleFetched);
  
  return () => {
    socket.off('nfeFetched', handleFetched);
    console.log('NFE listener removed');
  };
}, [serialNumber, socket]);


  const handleNfeUpload = async () => {
    if (!image) return

    const formData = new FormData()
    formData.append('nfe', image)
    formData.append('serial_number', serialNumber)

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/upload-nfe`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log('Imagem enviada com sucesso!', response.data)
      console.log(serialNumber)
      alert('Upload concluído!')
    } catch (error) {
      console.error('Erro ao enviar imagem:', error)
      alert('Erro ao enviar')
    }
  }

  return (
    <div className="nfe-screen">
      <h2>Nota Fiscal Eletrônica</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginTop: 20
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#264753ff',
            padding: 20,
            borderRadius: 10
          }}
        >
          <img width={'70%'} src={`${import.meta.env.VITE_SERVER_URL}/uploads/${nfe}`} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          <button onClick={() => [setNfeVisible(false), console.log('NFE modal closed')]}>
            <img width={40} src={back} alt="" />
          </button>
          <button onClick={handleNfeUpload}>
            <img width={40} src={upload} alt="" />
          </button>
          
          <button>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}
              href={NFE}
              download
            >
              <img style={{ marginLeft: 7 }} width={40} src={download} alt="" />
            </a>
          </button>
          <button>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
              }}
              href={`${import.meta.env.VITE_SERVER_URL}/uploads/${nfe}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style={{}} width={40} src={website} alt="" />
            </a>
          </button>
        </div>
      </div>
      <input className='nfe-input'
            onChange={(e) => {
              setImage(e.target.files[0])
              console.log(e.target.files[0])
            }}
            type="file"
            name="nfe"
            id="nfe"
          />
    </div>
  )
}
