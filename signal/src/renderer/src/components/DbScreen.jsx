import React, { useContext, useEffect, useState } from 'react'
import { useAppContext } from '../../contexts/ClientContext'
import DbItens from './dbscreen/DbItens'
import Search from '../components/repscreen/Search'
import axios from 'axios'

export default function DbScreen() {
  const { sidebarSelected, setSidebarSelected, socket } = useAppContext()
  const [fileInput, setFileInput] = useState(null)
  const [dbs, setDbs] = useState([])

  useEffect(() => {
    if (!socket) return;

  console.log("DbScreen montado, pedindo dados...");
    socket.emit("requestDbs");
    socket.on("dbsD", (data) => {
      console.log("DBs Data:", data);
      setDbs(data);

    });
  }, [socket])
  
  const createDb = async () => {
    const formData = new FormData();
    formData.append('db', fileInput.files[0]);
    formData.append('client', 'CLIENTE')
    formData.append('service', 'SERVICO')
    formData.append('db_date', new Date().toISOString())
    formData.append('db_size', fileInput.files[0].size)

    try {
      const response = await axios.post('http://localhost:3000/upload-db', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Database created:', response.data);
    } catch (error) {
      console.error('Error creating database:', error);
    }
  }

  return (
    <div className="db-screen">
                <button type='button' onClick={createDb}>Create Database</button>
                <input onChange={(e) => setFileInput(e.target)} type="file" name="db" id="db" />
                <div className='db-itens-container'>
                  {dbs.map((db, index) => (
                    <DbItens key={index} db={db} />
                  ))}
                </div>
    </div>
  )
}
