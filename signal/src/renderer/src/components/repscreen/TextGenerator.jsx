import React, { useEffect } from 'react'

export default function TextGenerator({ serialNumber, client, itensArray }) {
  useEffect(() => {
    console.log(serialNumber)
    console.log('TextGenerator mounted ' + itensArray.rolete)
  }, [serialNumber])
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(to right, #3f2222, #19323e)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        ,marginTop: '20px'
      }}
    >
      <div>
        <h2>Poderia Abrir OS para o seguinte REP?</h2>
        <h2>Número de Série: {serialNumber}</h2>
        <h2>Cliente: {client}</h2>
        <h3>Acompanha:</h3>
        <h4>{itensArray.notaFiscal ? 'Nota Fiscal' : ''}</h4>
        <h4>{itensArray.rolete ? 'Rolete' : ''}</h4>
        <h4>{itensArray.bobina ? 'Bobina' : ''}</h4>
        <h4>{itensArray.fonte ? 'Fonte' : ''}</h4>
      </div>
    </div>
  )
}
