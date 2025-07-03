import React from 'react';
import dashboard from '../assets/dashboard white.png'
import rep from '../assets/rep.png'

export default function Sidebar() {
  return (
    <div className="backgroundTest sidebar">
      <div style={{ width: '100%', backgroundColor: '#273a40', height: 60, marginTop: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img width={45} src={dashboard} alt="" />
      </div>
      <div style={{ width: '100%', backgroundColor: '', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img width={45} src={rep} alt="" />
      </div>
    </div>
  )
}
