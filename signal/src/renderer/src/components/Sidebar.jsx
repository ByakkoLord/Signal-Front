import React, { useState } from 'react'
import dashboard from '../assets/dashboard white.png'
import rep from '../assets/rep.png'
import history from '../assets/history.png'
import classNames from 'classnames'
import { useAppContext } from '../../contexts/ClientContext'

export default function Sidebar() {
  const { sidebarSelected, setSidebarSelected } = useAppContext()

  return (
    <div className="backgroundTest sidebar">
      <div
        onClick={() => setSidebarSelected(1)}
        className={classNames('sidebar-item', { 'sidebar-item-selected': sidebarSelected === 1 })}
        style={{
          width: '100%',
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img width={30} src={dashboard} alt="" style={{ userSelect: 'none' }} />
      </div>
      <div
        onClick={() => setSidebarSelected(2)}
        className={classNames('sidebar-item', { 'sidebar-item-selected': sidebarSelected === 2 })}
        style={{
          width: '100%',
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img width={30} src={history} alt="" style={{ userSelect: 'none' }} />
      </div>
      <div
        onClick={() => setSidebarSelected(3)}
        className={classNames('sidebar-item', { 'sidebar-item-selected': sidebarSelected === 3 })}
        style={{
          width: '100%',
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img width={30} src={rep} alt="" style={{ userSelect: 'none' }} />
      </div>
    </div>
  )
}
