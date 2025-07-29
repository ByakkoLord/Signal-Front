import React, { useEffect, useState, useContext, use } from 'react'
import { AppContext } from '../../../contexts/ClientContext'

export default function RepCreator() {
  const fabricantes = ['ControlID', 'Henry','Madis Rodbel', 'Dimep', 'Telemática', 'Kentec', 'Trielo', 'Athos', 'Trix',
    'Almitec', 'Tecnibra', 'CQS', 'AC-TEC', 'Topdata', 'Blantech',
    'Zuchi', 'Proveu', 'RW', 'Maxtel', 'Trilobit', 'Biometrus',
    'IdData', 'Gertec', 'Específico', 'Keypass', 'MHF', 'EVO']
  const modelos = {
  'ControlID': [
    'ID 100',
    'ID 200',
    'ID 1000',
    'ID 5000',
    'CX 700',
    'CX 4000',
    'IDX BIO',
    'IDX CARD',
    'IDX MULT',
    'REP iDClass',
    'iDAccess',
    'Catraca iDBlock',
    'iDBox',
    'REP iDClass 671',
    'REP Facial'
  ],
  'Henry': [
    'Henry Super-Fácil',
    'Henry Card I',
    'Henry Card II',
    'Henry Card III',
    'Henry Catraca',
    'Henry Catraca PC',
    'Henry Acesso',
    'Henry Bio-Fácil',
    'Henry Bio-Fácil Catraca',
    'Henry Catraca-Ct.Giro',
    'Henry REP - Orion',
    'Henry REP - Prisma',
    'Henry Primme Ponto',
    'Henry Primme Acesso',
    'Henry Argos',
    'Henry REP - Prisma Super Fácil',
    'Henry REP - Primme Super Fácil',
    'Henry Primme Acesso Super Fácil',
    'Henry Hexa',
    'Henry Primme SF Acesso Refeitório',
    'Henry Catraca 8x',
    'Henry Prisma Super Fácil Advanced',
    'Henry REP 8x - Portaria 671',
    'Henry Face',
    'Henry 1000',
    'Henry 2000',
    'Henry 3000'
  ]
}


  const [fabricante, setFabricante] = useState('Fabricante')
  const [modelo, setModelo] = useState('Modelo')



  const { setCreatorState, socket } = useContext(AppContext)
  const [zstatus, setZstatus] = useState(null)
  const [repExists, setRepExists] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [unlocked1, setUnlocked1] = useState(false)
  const [unlocked2, setUnlocked2] = useState(false)
  const [showItens1, setShowItens1] = useState(false)
  const [showItens2, setShowItens2] = useState(false)
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
    history: {
      visit: 2,
      createdAt: new Date(),
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
      } else {
        console.log('Serial number is available')
        setUnlocked(true)
      }

      
    })
  }

  const verifyManufacturer = () => {
    switch (true) {
      case fabricante.includes("ControlID"):
        console.log('Setting default serial number for ControlID')
        setNewRep({
          ...newRep,
          serialNumber: "00014003750",
        })
        break;
      case fabricante.includes("Henry"):
        console.log('Setting default serial number for Henry')
        setNewRep({
          ...newRep,
          serialNumber: "00004003750",
        })
        break;
    }
  }

  const sendRep = (novoStatus) => {
    socket.emit('verifyHistory', { serialNumber: newRep.serialNumber })

    socket.once('historyValue', (response) => {
      console.log('History value:', response)

      const teste = true

      if (teste) {
        const visitAtual = parseInt(response, 10)
        console.log('Visit atual:', visitAtual)
        const novoHistory = {
          ...newRep.history,
          visit: isNaN(visitAtual) ? 1 : visitAtual + 1,
          createdAt: new Date()
        }

        const repAtualizado = { ...newRep, history: novoHistory, status: novoStatus }

        socket.emit('sendRep', { newRep: repAtualizado })
        console.log('Novo history visit:', novoHistory.visit)
        console.log('Enviando REP já cadastrado:', repAtualizado)
      } else {
        socket.emit('sendRep', { newRep })
        console.log('Enviando novo REP:', newRep)
      }
    })
  }

  useEffect(() => {
    verifySerial()
  }, [newRep.serialNumber])

  useEffect(() => {
    verifyManufacturer()
  },[fabricante])

  useEffect(() => {}, [newRep])

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
          <input
                value={newRep.clientName}
                onChange={(e) => setNewRep({ ...newRep, clientName: e.target.value })}
                type="text"
                className="input1"
                placeholder="Nome do cliente"
              />
          {unlocked && (
            <>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', marginBottom: '10px' }}>
                <div onClick={() => setShowItens1(!showItens1)} className='input-group' >
                <h4>{fabricante}</h4>
                {showItens1 && (
                  <div className='input-group-list'>
                    {fabricantes.map((fabricante, index) => (
                      <button key={index} type='button' className='input-group-button' onClick={() => {setShowItens1(true); setFabricante(fabricante); newRep.manufacturer = fabricante;}}>
                      {fabricante}
                    </button>
                    ))}
                  </div>
                )}
              </div>
              <div onClick={() => setShowItens2(!showItens2)} className='input-group' >
                <h4>{modelo}</h4>
                {showItens2 && (
                  <div className='input-group-list'>
                    {(modelos[fabricante] || []).map((modelo, index) => (
                      <button key={index} type='button' className='input-group-button' onClick={() => {setShowItens2(true); setModelo(modelo); newRep.equipmentModel = modelo;}}>
                        {modelo}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              </div>
              
            </>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <button className='repC-button' type="button" onClick={() => setCreatorState(false)}>
              Cancelar
            </button>
            <button className='repC-button' type="button" onClick={() => setUnlocked1(true)}>
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

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '20px'
              }}
            >
              <button className='repC-button' type="button" onClick={() => setUnlocked1(false)}>
                Voltar
              </button>
              <button className='repC-button' onClick={() => setUnlocked2(true)} type="button">
                Iniciar Testes
              </button>
              <button
                className='repC-button'
                onClick={() => {
                  setZstatus('waitingDelivery')
                  console.log(zstatus)
                  setTimeout(() => {
                    sendRep('tool')
                  }, 1000)
                  setCreatorState(false)
                }}
                type="button"
              >
                Registrar
              </button>
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
              <h3>Quais itens não estão funcionando?</h3>
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
              onChange={(e) => setNewRep({ ...newRep, obs: e.target.value })}
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
              <button className='repC-button' style={{ width: '100px' }} type="button" onClick={() => setUnlocked2(false)}>
                Voltar
              </button>
              <button
                className='repC-button'
                style={{ width: '100px' }}
                onClick={() => {
                  sendRep('waitingDelivery')
                  setCreatorState(false)
                }}
                type="button"
              >
                Finalizar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
