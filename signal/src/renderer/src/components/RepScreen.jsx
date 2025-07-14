import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from '../../contexts/ClientContext'
import Reps from './repscreen/Reps'
import Search from './repscreen/Search'
import RepCreator from './repscreen/RepCreator'

export default function Dashboard() {
  const { creatorState, setCreatorState, socket } = useContext(AppContext)
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
        {reps.filter(rep => rep.status === '').map((rep, index) => (
          <Reps
            key={index}
            status={rep.status}
            serialNumber={rep.serial_number}
            model={rep.equipment_model}
            client={rep.client_name}
            itensArray={rep.itens_delivery}
          />
        ))}
      </div>
      {creatorState && <RepCreator />}
    </div>
  )
}
