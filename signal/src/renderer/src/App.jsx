import electronLogo from './assets/electron.svg'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TitleBar from './components/TitleBar'
import LoginForm from './components/LoginForm'
import { useAppContext } from '../contexts/ClientContext'

import React, { useState, useEffect, socket } from 'react'

function App() {
  const { loggedIn, socket } = useAppContext();

  useEffect(() => {
   socket.on('verify', () => {
     setLoggedIn(true)
   })
  }, [])


  return (
    <>
      <TitleBar />
      {loggedIn ? (
        
          
          <div className="sidebar-container">
            <Sidebar />
            <div className="sidebar-middle">
              <div className="w-full h-screen flex flex-col items-center justify-center">
                <Dashboard />
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
