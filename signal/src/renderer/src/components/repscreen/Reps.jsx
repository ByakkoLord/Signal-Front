import repIdClass from '../../assets/repsImages/rep1.jpg'
import checkmark from '../../assets/repsImages/check-mark.png'
import Xmark from '../../assets/repsImages/x-mark.png'
import checkMarkgreen from '../../assets/repsImages/check-mark-green.png'
import tool from '../../assets/repsImages/tool.png'
import waitingDelivery from '../../assets/repsImages/waiting-delivery.png'
import waitingDelivery2 from '../../assets/repsImages/waiting-delivery2.png'
import addBox from '../../assets/repsImages/addBox.png'

import React, { useEffect, useState } from 'react'


export default function Reps( { status, serialNumber, model, client, itensArray } ) {
  const [statusImage, setStatusImage] = useState(null)
  const [statusText, setStatusText] = useState('')

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
          marginTop: 20
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div
          style={{
            overflowY: 'auto',
            maxHeight: 80,
            marginTop: 20,
            backgroundColor: '#3f4f55',
            padding: 10,
            borderRadius: 10
          }}
        >
          <h2>Defeito:</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, voluptas laboriosam
            in velit quibusdam nisi cumque beatae impedit modi rem quos aliquam exercitationem,
            reiciendis dignissimos quae, cum fugit facilis iure!
          </p>
        </div>
        <div
          style={{
            overflowY: 'auto',
            maxHeight: 80,
            marginTop: 20,
            backgroundColor: '#3f4f55',
            padding: 10,
            borderRadius: 10
          }}
        >
          <h2>Obsercações:</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, voluptas laboriosam
            in velit quibusdam nisi cumque beatae impedit modi rem quos aliquam exercitationem,
            reiciendis dignissimos quae, cum fugit facilis iure!
          </p>
        </div>
        </div>
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            
            maxHeight: 200,
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
              background: 'linear-gradient(to right,rgb(64, 117, 140), #2c3e50)',
              padding: 10,
              borderRadius: 10
            }}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div
            style={{
              background: 'linear-gradient(to right,rgb(64, 117, 140), #2c3e50)',
              padding: 10,
              borderRadius: 10
            }}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  )
}
