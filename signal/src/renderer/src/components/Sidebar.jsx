import React from 'react';
import dashboard from '../assets/dashboard white.png'
import rep from '../assets/rep.png'

export default function Sidebar() {
  return (
    <div className="backgroundTest sidebar">
      <div style={{ width: '100%', background: "linear-gradient(to right,rgb(70, 70, 70),rgb(5, 60, 81))", height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img width={45} src={dashboard} alt="" style={{userSelect: 'none'}} />
      </div>
      <div style={{ width: '100%', backgroundColor: '', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img width={45} src={rep} alt="" style={{userSelect: 'none'}} />
      </div>
    </div>
  )
}
