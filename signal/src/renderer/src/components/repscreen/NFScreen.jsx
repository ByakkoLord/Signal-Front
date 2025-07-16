import NFE from '../../assets/repsImages/NFE.png'
import download from '../../assets/repsImages/download.png'
import back from '../../assets/repsImages/back-arrow.png'
import website from '../../assets/repsImages/website.png'
import { AppContext } from '../../../contexts/ClientContext'
import React, { useContext } from 'react'

export default function NFEScreen() {
  const { setNfeVisible } = useContext(AppContext)
  return (
    <div className="nfe-screen">
      <h2>Nota Fiscal Eletrônica</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, marginTop: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#264753ff', padding: 20, borderRadius: 10 }}>
          <img width={'70%'} src={NFE} alt="" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
          <button onClick={() => setNfeVisible(false)}><img width={40} src={back} alt=""  /></button>
          <button>
            <a style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }} href={NFE} download>
              <img style={{ marginLeft: 7 }} width={40} src={download} alt="" />
            </a>
          </button>
          <button >
              <img width={40} src={website} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
