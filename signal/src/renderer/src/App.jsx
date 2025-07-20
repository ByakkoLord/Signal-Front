import electronLogo from './assets/electron.svg'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TitleBar from './components/TitleBar'
import LoginForm from './components/LoginForm'
import FinishedTasks from './components/FinishedTasks'
import RepScreen from './components/RepScreen'
import DbScreen from './components/DbScreen'
import { useAppContext } from '../contexts/ClientContext'

import React, { useState, useEffect } from 'react'

function App() {
  const { loggedIn, socket, sidebarSelected, setSidebarSelected } = useAppContext()

  useEffect(() => {
    socket.on('verify', () => {
      setLoggedIn(true)
    })
    switch (sidebarSelected) {
      case 1:
        setSidebarSelected(1)
        break
      case 2:
        setSidebarSelected(2)
        break
      default:
        setSidebarSelected(1)
        break
    }
  }, [])

  return (
    <>
      <TitleBar />
      {loggedIn ? (
        <div className="sidebar-container">
          <Sidebar />
          <div className="sidebar-middle">
            <div style={{ height: '100vh', color: 'white' }}>
              {sidebarSelected === 1 && <Dashboard />}
              {sidebarSelected === 2 && <FinishedTasks />}
              {sidebarSelected === 3 && <RepScreen />}
              {sidebarSelected === 4 && <DbScreen />}

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0, transform: 'translateX(-4%)' }}>
                <p>
                  Made by&nbsp;
                  <a target="_blank" href="https://github.com/ByakkoLord">
                    @ByakkoLord&nbsp;
                  </a>
                  and&nbsp;
                  <a target="_blank" href="https://github.com/nobackslash">
                    @nobackslash
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  )
}

export default App
