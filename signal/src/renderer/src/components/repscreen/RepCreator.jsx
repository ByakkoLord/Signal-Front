import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../contexts/ClientContext'

export default function RepCreator() {
  const { setCreatorState } = useContext(AppContext)
  const [serial, setSerial] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [unlocked1, setUnlocked1] = useState(false)
  const [unlocked2, setUnlocked2] = useState(false)
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
            className="input1"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            type="text"
            placeholder="Número de série"
          />

          {unlocked && (
            <>
              <input type="text" className="input1" placeholder="Modelo do equipamento" />
              <input type="text" className="input1" placeholder="Fabricante" />
              <input type="text" className="input1" placeholder="Nome do cliente" />
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
                <input id="NovoRep" name="RepType" className="checkInput1" type="radio" /> Novo REP
              </label>
              <label className="label1" htmlFor="Manutencao">
                {' '}
                <input id="Manutencao" name="RepType" className="checkInput1" type="radio" />{' '}
                Manutenção
              </label>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <label className="label1" htmlFor="Fonte">
                {' '}
                <input id="Fonte" name="Fonte" className="checkInput1" type="checkbox" /> Fonte
              </label>
              <label className="label1" htmlFor="NotaFiscal">
                {' '}
                <input
                  id="NotaFiscal"
                  name="NotaFiscal"
                  className="checkInput1"
                  type="checkbox"
                />{' '}
                Nota Fiscal
              </label>
              <label className="label1" htmlFor="Rolete">
                {' '}
                <input id="Rolete" name="Rolete" className="checkInput1" type="checkbox" /> Rolete
              </label>
              <label className="label1" htmlFor="Bobina">
                {' '}
                <input id="Bobina" name="Bobina" className="checkInput1" type="checkbox" /> Bobina
              </label>
              <label className="label1" htmlFor="SemCaixa">
                {' '}
                <input id="SemCaixa" name="SemCaixa" className="checkInput1" type="checkbox" /> Sem
                caixa
              </label>
            </div>
            <input type="text" className="input1" placeholder="Observações" />

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
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
              <h3>Os seguintes itens estão funcionando?</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <label className="label1" htmlFor="Fonte1">
                  {' '}
                  <input id="Fonte1" className="checkInput1" type="checkbox" /> Fonte
                </label>
                <label className="label1" htmlFor="Display">
                  {' '}
                  <input id="Display" className="checkInput1" type="checkbox" /> Display
                  {' '}
                </label>
                <label className="label1" htmlFor="BiometriaDigital">
                  {' '}
                  <input id="BiometriaDigital" className="checkInput1" type="checkbox" /> Biometria Digital
                  {' '}
                </label>
                <label className="label1" htmlFor="Impressao">
                  {' '}
                  <input id="Impressao" className="checkInput1" type="checkbox" /> Impressão
                  {' '}
                </label>
                <label className="label1" htmlFor="Comunicacao">
                  {' '}
                  <input id="Comunicacao" className="checkInput1" type="checkbox" /> Comunicação
                  {' '}
                </label>
                <label className="label1" htmlFor="NoBreak">
                  {' '}
                  <input id="NoBreak" className="checkInput1" type="checkbox" /> NoBreak
                  {' '}
                </label>
                <label className="label1" htmlFor="BateriaCR2032">
                  {' '}
                  <input id="BateriaCR2032" className="checkInput1" type="checkbox" /> Bateria CR2032
                  {' '}
                </label>
              </div>
            </div>

            <input type="text" className="input1" placeholder="Observações" />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '20px'
              }}
            >
              <button type="button" onClick={() => setUnlocked2(false)}>
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
    </>
  )
}
