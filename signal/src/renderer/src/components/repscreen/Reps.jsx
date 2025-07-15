import repIdClass from '../../assets/repsImages/rep1.jpg'
import checkmark from '../../assets/repsImages/check-mark.png'
import Xmark from '../../assets/repsImages/x-mark.png'
import checkMarkgreen from '../../assets/repsImages/check-mark-green.png'
import tool from '../../assets/repsImages/tool.png'
import waitingDelivery from '../../assets/repsImages/waiting-delivery.png'
import waitingDelivery2 from '../../assets/repsImages/waiting-delivery2.png'
import addBox from '../../assets/repsImages/addBox.png'

import React, { useEffect, useState } from 'react'


export default function Reps( { status, serialNumber, model, client, itensArray, ficha_tecnica, obs } ) {
  const [statusImage, setStatusImage] = useState(null)
  const [statusText, setStatusText] = useState('')

  const ideal = Object.values(ficha_tecnica).every(v => v === false);


  useEffect(() => {
    switch (status) {
      case 'waitingDelivery':
        setStatusImage(waitingDelivery)
        setStatusText('Aguardando Análise')
        break
      case 'waitingDelivery2':
        setStatusImage(waitingDelivery2)
        setStatusText('Aguardando Fabricante')
        break
      case 'checkMarkgreen':
        setStatusImage(checkMarkgreen)
        setStatusText('Finalizado')
        break
      case 'tool':
        setStatusImage(tool)
        setStatusText('Em Manutenção')
        break
      case 'xmark':
        setStatusImage(Xmark)
        setStatusText('Não Aprovado')
        break
      case 'addBox':
        setStatusImage(addBox)
        setStatusText('Novo REP')
        break
      default:
        setStatusImage(null)
    }
  }, [status])

  return (
    <div className="reps">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img
          style={{
            borderRadius: '10px',
            marginRight: 20,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          width={241}
          src={repIdClass}
          alt="REP"
        />
        <div>
          <div style={{ backgroundColor: '#3f4f55', padding: 10, borderRadius: 10 }}>
            <h4>Número de Série: {serialNumber}</h4>
            <h4>Modelo: {model}</h4>
            <h4>Cliente: {client}</h4>
          </div>

          <div style={{ marginTop: 10, backgroundColor: '#3f4f55', padding: 10, borderRadius: 10 }}>
            <div className="reps-accessories">
              <h4>Fonte</h4> <img width={16} height={16} src={itensArray.fonte ? checkmark : Xmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Nota fiscal</h4> <img width={16} height={16} src={itensArray.notaFiscal ? checkmark : Xmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Rolete</h4> <img width={16} height={16} src={itensArray.rolete ? checkmark : Xmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Bobina</h4> <img width={16} height={16} src={itensArray.bobina ? checkmark : Xmark} alt="" />
            </div>
          </div>
          
        </div>
        <div style={{ userSelect: 'none', justifyContent: 'center', alignItems: 'center', display: 'flex', width: 170, height: 226, borderRadius: 10, backgroundColor: '#3f4f55', marginLeft: 'auto', flexDirection: 'column', gap: 10 }}>
            <img width={100} src={statusImage} alt="" />
            <h3 style={{ textAlign: 'center' }}>{statusText}</h3>
          </div>
      </div>
      <div
        style={{
          gap: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div
          style={{
            overflowY: 'hidden',
            maxHeight: 120,
            marginTop: 20,
            backgroundColor: '#3f4f55',
            padding: 10,
            borderRadius: 10
          }}
        >
          <h2>Defeito:</h2>
          <p style={{ overflowY: 'auto', height: 60 }}>
            {ficha_tecnica.biometriaDigital ? (<>Há um erro com a biometria <br></br></>) : null}
            {ficha_tecnica.bateriaCR2032 ? (<>A bateria CR2032 está descarregada <br></br></>) : null}
            {ficha_tecnica.comunicacao ? (<>Há um erro de comunicação <br></br></>) : null}
            {ficha_tecnica.display ? (<>O display está com problemas <br></br></>) : null}
            {ficha_tecnica.fonte ? (<>A fonte está com problemas <br></br></>) : null}
            {ficha_tecnica.impressao ? (<>A impressão está com problemas <br></br></>) : null}
            {ficha_tecnica.noBreak ? (<>O no-break está com problemas <br></br> </>) : null}
            {ideal && ( <>Nenhum problema identificado</>)}
          </p>
        </div>
        <div
          style={{
            overflowY: 'auto',
            maxHeight: 120,
            marginTop: 10,
            backgroundColor: '#3f4f55',
            padding: 10,
            borderRadius: 10
          }}
        >
          <h2>Observações:</h2>
          <p>
            {obs ? obs : 'Nenhuma observação registrada.'}
          </p>
        </div>
        </div>
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            
            maxHeight: 210,
            marginTop: 20,
            minWidth: 300,
            backgroundColor: '#3f4f55',
            gap: 10,
            padding: 10,
            borderRadius: 10
          }}
        >
          <h2>Histórico:</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto' }}>

          <div
            style={{
              overflow: 'hidden',
              maxHeight: 100,
              maxWidth: 450,
              minHeight: 60,
              background: 'linear-gradient(to right,rgb(64, 117, 140), #2c3e50)',
              padding: 10,
              borderRadius: 10
            }}
          >
            <p style={{ overflowY: 'auto', height: 40, overflowX: 'hidden' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  Lorem ipsum dolor sit amet, consectetur adipiscing elit  Lorem ipsum dolor sit amet, consectetur adipiscing elit  Lorem ipsum dolor sit amet, consectetur adipiscing elit  Lorem ipsum dolor sit amet, consectetur adipiscing elit  Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </div>
          <div
            style={{
               overflow: 'hidden',
              maxHeight: 100,
              maxWidth: 450,
              minHeight: 60,
              background: 'linear-gradient(to right,rgb(64, 117, 140), #2c3e50)',
              padding: 10,
              borderRadius: 10
            }}
          >
            <p style={{ overflowY: 'auto', height: 40, overflowX: 'hidden' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  )
}
