import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from '../../contexts/ClientContext'
import Reps from './repscreen/Reps'
import Search from './repscreen/Search'
import RepCreator from './repscreen/RepCreator'
import NFEScreen from './repscreen/NFScreen'

export default function Dashboard() {
  const { creatorState, socket, searchTerm, nfeVisible } = useContext(AppContext)
  const [reps, setReps] = useState([])
  const [selectedSerial, setSelectedSerial] = useState(null) // controla qual REP foi clicado para NFE

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
              onShowNFE={() => setSelectedSerial(rep.serial_number)}
            />
          ))}
      </div>

      {creatorState && <RepCreator />}

      {/* Exibe apenas UM NFEScreen para o REP selecionado */}
      {selectedSerial && nfeVisible === true && (
        <NFEScreen
          serialNumber={selectedSerial}
          onClose={() => setSelectedSerial(null)}
        />  
      )}
    </div>
  )
}
