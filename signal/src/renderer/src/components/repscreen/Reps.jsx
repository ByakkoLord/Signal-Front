import repIdClass from '../../assets/repsImages/rep1.jpg'
import checkmark from '../../assets/repsImages/check-mark.png'
import Xmark from '../../assets/repsImages/x-mark.png'
import checkMarkgreen from '../../assets/repsImages/check-mark-green.png'
import tool from '../../assets/repsImages/tool.png'
import waitingDelivery from '../../assets/repsImages/waiting-delivery.png'
import waitingDelivery2 from '../../assets/repsImages/waiting-delivery2.png'
import addBox from '../../assets/repsImages/addBox.png'
import nfeIcon from '../../assets/repsImages/history.png'
import bill from '../../assets/repsImages/bill.png'
import historyIcon from '../../assets/history.png'
import NFEScreen from './NFScreen'
import { AppContext } from '../../../contexts/ClientContext'

import React, { useEffect, useState, useContext } from 'react'


export default function Reps({
  status,
  serialNumber,
  model,
  client,
  itensArray,
  ficha_tecnica,
  obs
}) {
  const [statusImage, setStatusImage] = useState(null)
  const [statusText, setStatusText] = useState('')
  const { nfeVisible, setNfeVisible, socket } = useContext(AppContext)
  const [hisValue, setHisValue] = useState(null)

  const ideal = Object.values(ficha_tecnica).every((v) => v === false)

  useEffect(() => {

     socket.emit('verifyHistory', { serialNumber: serialNumber })

    socket.once('historyValue', (response) => {
      console.log('History value:', response)
      setHisValue(response)
    })
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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <img
          style={{
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          width={230}
          src={repIdClass}
          alt="REP"
        />
        <div>
          <div
            style={{
              backgroundColor: '#3f4f55',
              padding: 10,
              borderRadius: 10,
              maxWidth: 330,
              maxHeight: 95,
              overflowY: 'auto'
            }}
          >
            <h4>Número de Série: {serialNumber}</h4>
            <h4>Modelo: {model}</h4>
            <h4>Cliente: {client}</h4>
          </div>

          <div style={{ marginTop: 10, backgroundColor: '#3f4f55', padding: 10, borderRadius: 10 }}>
            <div className="reps-accessories">
              <h4>Fonte</h4>{' '}
              <img width={16} height={16} src={itensArray.fonte ? checkmark : Xmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Nota fiscal</h4>{' '}
              <img width={16} height={16} src={itensArray.notaFiscal ? checkmark : Xmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Rolete</h4>{' '}
              <img width={16} height={16} src={itensArray.rolete ? checkmark : Xmark} alt="" />
            </div>
            <div className="reps-accessories">
              <h4>Bobina</h4>{' '}
              <img width={16} height={16} src={itensArray.bobina ? checkmark : Xmark} alt="" />
            </div>
          </div>
        </div>
        <div
          style={{
            userSelect: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: 170,
            height: 226,
            borderRadius: 10,
            backgroundColor: '#3f4f55',
            marginLeft: 'auto',
            flexDirection: 'column',
            gap: 10
          }}
        >
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              overflowY: 'auto',
              minHeight: 230,
              maxHeight: 230,
              flex: 1,
              backgroundColor: '#3f4f55',
              padding: 10,
              borderRadius: 10
            }}
          >
            <h2>Defeito:</h2>
            <p style={{ overflowY: 'auto', maxHeight: 75 }}>
              {ficha_tecnica.biometriaDigital ? (
                <>
                  Há um erro com a biometria <br></br>
                </>
              ) : null}
              {ficha_tecnica.bateriaCR2032 ? (
                <>
                  A bateria CR2032 está descarregada <br></br>
                </>
              ) : null}
              {ficha_tecnica.comunicacao ? (
                <>
                  Há um erro de comunicação <br></br>
                </>
              ) : null}
              {ficha_tecnica.display ? (
                <>
                  O display está com problemas <br></br>
                </>
              ) : null}
              {ficha_tecnica.fonte ? (
                <>
                  A fonte está com problemas <br></br>
                </>
              ) : null}
              {ficha_tecnica.impressao ? (
                <>
                  A impressão está com problemas <br></br>
                </>
              ) : null}
              {ficha_tecnica.noBreak ? (
                <>
                  O no-break está com problemas <br></br>{' '}
                </>
              ) : null}
              {ideal && <>Nenhum problema identificado</>}
            </p>
          </div>
          <div
            style={{
              overflowY: 'auto',
              minHeight: 230,
              maxHeight: 230,
              flex: 1,
              backgroundColor: '#3f4f55',
              padding: 10,
              borderRadius: 10
            }}
          >
            <h2>Observações:</h2>
            <p>{obs ? obs : 'Nenhuma observação registrada.'}</p>
          </div>
          <div
            style={{
              gap: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <button
              className="rep-button"
              style={{
                width: 70,
                height: 70,
                borderRadius: 10,
                backgroundColor: '#164b5eff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setNfeVisible(true)}
            >
              <img width={40} height={40} src={nfeIcon} alt="" />
            </button>
            <button
              className="rep-button"
              style={{
                width: 70,
                height: 70,
                borderRadius: 10,
                backgroundColor: '#164b5eff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img width={40} height={40} src={historyIcon} alt="" />
            </button>
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 10,
                backgroundColor: '#293c44ff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <h1>{hisValue}</h1>
            </div>
          </div>
        </div>
      </div>
              {nfeVisible && (
                <>
                  <NFEScreen serialNumber={serialNumber} />
                </>
              )}
    </div>
  )
}
