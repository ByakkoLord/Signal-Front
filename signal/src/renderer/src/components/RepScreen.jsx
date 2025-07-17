import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from '../../contexts/ClientContext'
import Reps from './repscreen/Reps'
import Search from './repscreen/Search'
import RepCreator from './repscreen/RepCreator'

export default function Dashboard() {
  const { creatorState, setCreatorState, socket, searchTerm, setSearchTerm } = useContext(AppContext)
  const [reps, setReps] = useState([])

  useEffect(() => {
    console.log('Dashboard mounted')
    socket.emit('requestReps')
    socket.on('repsD', (data) => {
      setReps(data)
      console.log('Reps received:', data)
    })
  }, [])

  return (
    <div className="rep-screen">
      <Search />
      <div
        className="teste"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 100,
          overflowY: 'auto',
          maxHeight: '80vh'
        }}
      >
        {reps
          .filter(rep => {
            if (searchTerm.trim() === '') return true
            return rep.serial_number.includes(searchTerm)
          })
          .map((rep, index) => (
            <Reps
              key={index}
              status={rep.status}
              serialNumber={rep.serial_number}
              model={rep.equipment_model}
              client={rep.client_name}
              itensArray={rep.itens_delivery}
              ficha_tecnica={rep.ficha_tecnica}
              obs={rep.obs}
              
            />
          ))}
      </div>
      {creatorState && <RepCreator />}
    </div>
  )
}
