import React, { useContext, useEffect, useState } from 'react'
import { useAppContext } from '../../contexts/ClientContext'
import DbItens from './dbscreen/DbItens'
import NfeCreator from './dbscreen/DbCreator'
import Message from './messages/Message'

export default function DbScreen() {
  const { sidebarSelected, setSidebarSelected, socket, showDbCreator, setShowDbCreator, showMessage, setShowMessage, showPercentage, setShowPercentage } = useAppContext()
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
  
  

  return (
    <div className="db-screen">
      {showDbCreator && <NfeCreator />}
      {showMessage && <Message message={`Enviando Banco de Dados: ${showPercentage}%`} percentage={showPercentage} />}
      
                  <div className='db-itens-container'>
                  {dbs.map((db, index) => (
                    <DbItens key={index} db={db} />
                  ))}
                </div>
                <button className='add-db-button' onClick={() => setShowDbCreator(true)}>Adicionar Banco de Dados</button>
    </div>
  )
}
