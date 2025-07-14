import React, { useEffect, useState, useContext, use } from 'react'
import { AppContext } from '../../../contexts/ClientContext'

export default function RepCreator() {
  const { setCreatorState, socket } = useContext(AppContext)
  const [serial, setSerial] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [unlocked1, setUnlocked1] = useState(false)
  const [unlocked2, setUnlocked2] = useState(false)
  const [newRep, setNewRep] = useState({
    serialNumber: '',
    equipmentModel: '',
    manufacturer: '',
    clientName: '',
    obs: '',
    tecnico: 'Guilherme',
    type: 'new',
    itensDelivery: {
      fonte: false,
      rolete: false,
      bobina: false,
      semCaixa: false,
      notaFiscal: false
    },
    fichaTecnica: {
      fonte: false,
      display: false,
      biometriaDigital: false,
      impressao: false,
      comunicacao: false,
      noBreak: false,
      bateriaCR2032: false
    },
    status: 'checkMarkgreen'
  })
  const verifySerial = () => {
    socket.emit('verifySerial', { serialNumber: newRep.serialNumber })
    console.log('Verificando número de série:', newRep.serialNumber)
    socket.on('serialExists', (exists) => {
      console.log('Serial number exists:', exists)
      console.log('Serial number:', newRep.serialNumber)
      if (!exists.exists) {
          console.log('Serial number already exists')
          setUnlocked(false)
        }else {
          console.log('Serial number is available')
          setUnlocked(true)
        }
    })
  }

  const sendRep = () => {
      socket.emit('sendRep', { newRep })
      console.log('Enviando novo REP:', { newRep })
    }
  useEffect(() => {
    verifySerial()
  }, [newRep.serialNumber])

  useEffect(() => {
    
    
  }, [newRep])

  return (  
    <>
      <div
        className="rep-creator"
        style={{
          transform: unlocked1 ? 'translate(-100%, -50%)' : 'translate(-50%, -50%)',
          filter: unlocked1 ? 'blur(3px)' : 'none'
        }}
      >
        <form className="unlocked">
          <h2>Adicionar novo relógio</h2>
          <input
            value={newRep.serialNumber}
            className="input1"
            onChange={(e) => setNewRep({ ...newRep, serialNumber: e.target.value })}
            type="text"
            placeholder="Número de série"
          />

          {unlocked && (
            <>
              <input
                value={newRep.equipmentModel}
                onChange={(e) => setNewRep({ ...newRep, equipmentModel: e.target.value })}
                type="text"
                className="input1"
                placeholder="Modelo do equipamento"
              />
              <input
                value={newRep.manufacturer}
                onChange={(e) => setNewRep({ ...newRep, manufacturer: e.target.value })}
                type="text"
                className="input1"
                placeholder="Fabricante"
              />
              <input
                value={newRep.clientName}
                onChange={(e) => setNewRep({ ...newRep, clientName: e.target.value })}
                type="text"
                className="input1"
                placeholder="Nome do cliente"
              />
            </>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <button type="button" onClick={() => setCreatorState(false)}>
              Cancelar
            </button>
            <button type="button" onClick={() => setUnlocked1(true)}>
              Continuar
            </button>
          </div>
        </form>
      </div>
      {unlocked1 && (
        <div
          style={{
            transform: unlocked2 ? 'translate(0%, -50%)' : 'translate(-50%, -50%)',
            filter: unlocked2 ? 'blur(3px)' : 'none'
          }}
          className="rep-creator"
        >
          <form className="unlocked">
            <h2>Como veio o relógio?</h2>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <label className="label1" htmlFor="NovoRep">
                {' '}
                <input
                  value={newRep.type}
                  id="NovoRep"
                  name="RepType"
                  className="checkInput1"
                  type="radio"
                />{' '}
                Novo REP
              </label>
              <label className="label1" htmlFor="Manutencao">
                {' '}
                <input
                  value={newRep.type}
                  id="Manutencao"
                  name="RepType"
                  className="checkInput1"
                  type="radio"
                />{' '}
                Manutenção
              </label>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <label className="label1" htmlFor="Fonte">
                {' '}
                <input
                  checked={newRep.itensDelivery.fonte}
                  onChange={(e) =>
                    setNewRep({
                      ...newRep,
                      itensDelivery: { ...newRep.itensDelivery, fonte: e.target.checked }
                    })
                  }
                  id="Fonte"
                  name="Fonte"
                  className="checkInput1"
                  type="checkbox"
                />{' '}
                Fonte
              </label>
              <label className="label1" htmlFor="NotaFiscal">
                {' '}
                <input
                  checked={newRep.itensDelivery.notaFiscal}
                  onChange={(e) =>
                    setNewRep({
                      ...newRep,
                      itensDelivery: { ...newRep.itensDelivery, notaFiscal: e.target.checked }
                    })
                  }
                  id="NotaFiscal"
                  name="NotaFiscal"
                  className="checkInput1"
                  type="checkbox"
                />{' '}
                Nota Fiscal
              </label>
              <label className="label1" htmlFor="Rolete">
                {' '}
                <input
                  checked={newRep.itensDelivery.rolete}
                  onChange={(e) =>
                    setNewRep({
                      ...newRep,
                      itensDelivery: { ...newRep.itensDelivery, rolete: e.target.checked }
                    })
                  }
                  id="Rolete"
                  name="Rolete"
                  className="checkInput1"
                  type="checkbox"
                />{' '}
                Rolete
              </label>
              <label className="label1" htmlFor="Bobina">
                {' '}
                <input
                  checked={newRep.itensDelivery.bobina}
                  onChange={(e) =>
                    setNewRep({
                      ...newRep,
                      itensDelivery: { ...newRep.itensDelivery, bobina: e.target.checked }
                    })
                  }
                  id="Bobina"
                  name="Bobina"
                  className="checkInput1"
                  type="checkbox"
                />{' '}
                Bobina
              </label>
              <label className="label1" htmlFor="SemCaixa">
                {' '}
                <input
                  checked={newRep.itensDelivery.semCaixa}
                  onChange={(e) =>
                    setNewRep({
                      ...newRep,
                      itensDelivery: { ...newRep.itensDelivery, semCaixa: e.target.checked }
                    })
                  }
                  id="SemCaixa"
                  name="SemCaixa"
                  className="checkInput1"
                  type="checkbox"
                />{' '}
                Sem caixa
              </label>
            </div>
            <input
              value={newRep.obs}
              onChange={(e) => setNewRep({ ...newRep, observacoes: e.target.value })}
              type="text"
              className="input1"
              placeholder="Observações"
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '20px'
              }}
            >
              <button type="button" onClick={() => setUnlocked1(false)}>
                Voltar
              </button>
              <button onClick={() => setUnlocked2(true)} type="button">
                Iniciar Testes
              </button>
              <button type="button">Registrar</button>
            </div>
          </form>
        </div>
      )}
      {unlocked2 && (
        <div className="rep-creator">
          <form className="unlocked">
            <h2>Ficha Técnica</h2>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end'
              }}
            >
              <h3>Os seguintes itens estão funcionando?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <label className="label1" htmlFor="Fonte1">
                  {' '}
                  <input
                    checked={newRep.fichaTecnica.fonte}
                    onChange={(e) =>
                      setNewRep({
                        ...newRep,
                        fichaTecnica: { ...newRep.fichaTecnica, fonte: e.target.checked }
                      })
                    }
                    id="Fonte1"
                    className="checkInput1"
                    type="checkbox"
                  />{' '}
                  Fonte
                </label>
                <label className="label1" htmlFor="Display">
                  {' '}
                  <input
                    checked={newRep.fichaTecnica.display}
                    onChange={(e) =>
                      setNewRep({
                        ...newRep,
                        fichaTecnica: { ...newRep.fichaTecnica, display: e.target.checked }
                      })
                    }
                    id="Display"
                    className="checkInput1"
                    type="checkbox"
                  />{' '}
                  Display{' '}
                </label>
                <label className="label1" htmlFor="BiometriaDigital">
                  {' '}
                  <input
                    checked={newRep.fichaTecnica.biometriaDigital}
                    id="BiometriaDigital"
                    className="checkInput1"
                    type="checkbox"
                    onChange={(e) =>
                      setNewRep({
                        ...newRep,
                        fichaTecnica: { ...newRep.fichaTecnica, biometriaDigital: e.target.checked }
                      })
                    }
                  />{' '}
                  Biometria Digital{' '}
                </label>
                <label className="label1" htmlFor="Impressao">
                  {' '}
                  <input
                    checked={newRep.fichaTecnica.impressao}
                    id="Impressao"
                    className="checkInput1"
                    type="checkbox"
                    onChange={(e) =>
                      setNewRep({
                        ...newRep,
                        fichaTecnica: { ...newRep.fichaTecnica, impressao: e.target.checked }
                      })
                    }
                  />{' '}
                  Impressão{' '}
                </label>
                <label className="label1" htmlFor="Comunicacao">
                  {' '}
                  <input
                    checked={newRep.fichaTecnica.comunicacao}
                    id="Comunicacao"
                    className="checkInput1"
                    type="checkbox"
                    onChange={(e) =>
                      setNewRep({
                        ...newRep,
                        fichaTecnica: { ...newRep.fichaTecnica, comunicacao: e.target.checked }
                      })
                    }
                  />{' '}
                  Comunicação{' '}
                </label>
                <label className="label1" htmlFor="NoBreak">
                  {' '}
                  <input
                    checked={newRep.fichaTecnica.noBreak}
                    id="NoBreak"
                    className="checkInput1"
                    type="checkbox"
                    onChange={(e) =>
                      setNewRep({
                        ...newRep,
                        fichaTecnica: { ...newRep.fichaTecnica, noBreak: e.target.checked }
                      })
                    }
                  />{' '}
                  NoBreak{' '}
                </label>
                <label className="label1" htmlFor="BateriaCR2032">
                  {' '}
                  <input
                    checked={newRep.fichaTecnica.bateriaCR2032}
                    id="BateriaCR2032"
                    className="checkInput1"
                    type="checkbox"
                    onChange={(e) =>
                      setNewRep({
                        ...newRep,
                        fichaTecnica: { ...newRep.fichaTecnica, bateriaCR2032: e.target.checked }
                      })
                    }
                  />{' '}
                  Bateria CR2032{' '}
                </label>
              </div>
            </div>

            <input
              value={newRep.obs}
              onChange={(e) => setNewRep({ ...newRep, observacoes: e.target.value })}
              type="text"
              className="input1"
              placeholder="Observações"
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '20px'
              }}
            >
              <button style={{ width: '100px' }} type="button" onClick={() => setUnlocked2(false)}>
                Voltar
              </button>
              <button style={{ width: '100px' }} onClick={() => sendRep()} type="button">
                Finalizar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
