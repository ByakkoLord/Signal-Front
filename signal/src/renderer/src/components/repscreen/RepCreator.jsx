import React, { useEffect, useState } from 'react'

export default function RepCreator() {
  const [serial, setSerial] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [newRep, setNewRep] = useState({
    serialNumber: '',
    clientName: '',
    equipmentModel: '',
    manufacturer: '',
    report: ''
  })
  const verifySerial = (serial) => {
    if (serial === '1') {
      console.log('Serial number is valid')
      setUnlocked(true)
    } else {
      console.log('Serial number is invalid')
      setUnlocked(false)
    }
  }
  useEffect(() => {
    verifySerial(serial)
  }, [serial])

  return (
    <div className="rep-creator">
      <form>
        <h2>Adicionar novo relógio</h2>
        <input
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
          type="text"
          placeholder="Número de série"
        />

        {unlocked && (
          <>
            <input type="text" placeholder="Modelo do equipamento" />
            <input type="text" placeholder="Fabricante" />
            <input type="text" placeholder="Nome do cliente" />
          </>
        )}
        {<div></div>}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <button>Iniciar Testes</button>
          <button>Registrar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  )
}
