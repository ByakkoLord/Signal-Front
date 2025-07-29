import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import io from 'socket.io-client'
import { showNotification } from '../src/scripts/notification'

export const AppContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export function AppProvider({ children }) {
  console.log('🔄 AppProvider montado')

  const [isDraggingContext, setIsDraggingContext] = useState(false)
  const [draggedTaskId, setDraggedTaskId] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [socketReady, setSocketReady] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState('asdasd')
  const [sidebarSelected, setSidebarSelected] = useState(1)
  const [creatorState, setCreatorState] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [nfeVisible, setNfeVisible] = useState(false)
  const [showDbCreator, setShowDbCreator] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showPercentage, setShowPercentage] = useState(0)
  const [showUpdater, setShowUpdater] = useState(false)
  const [showGenerator, setShowGenerator] = useState(false)

  const socket = useMemo(() => {
    const newSocket = io(import.meta.env.VITE_SERVER_URL, {
      withCredentials: true,
      transports: ['websocket']
    })

    return newSocket
  }, [])

  useEffect(() => {
    console.log('🔁 useEffect do AppProvider montado')
    const handleConnect = () => {
      console.log('✅ WebSocket conectado')
      setSocketReady(true)
    }

    const handleDisconnect = () => {
      console.log('❌ WebSocket desconectado')
      setSocketReady(false)
    }

    socket.on('connect', handleConnect)
    socket.on('disconnect', handleDisconnect)
    socket.on('connect_error', (err) => {
      console.error('🚫 Erro de conexão:', err.message)
      showNotification('connectionError')
    })

    return () => {
      socket.off('connect', handleConnect)
      socket.off('disconnect', handleDisconnect)
    }
  }, [socket])

  return (
    <AppContext.Provider
      value={{
        isDraggingContext,
        setIsDraggingContext,
        draggedTaskId,
        setDraggedTaskId,
        loggedIn,
        setLoggedIn,
        socket,
        socketReady,
        loggedInUser,
        setLoggedInUser,
        sidebarSelected,
        setSidebarSelected,
        creatorState,
        setCreatorState,
        searchTerm,
        setSearchTerm,
        nfeVisible,
        setNfeVisible,
        showDbCreator,
        setShowDbCreator,
        showMessage,
        setShowMessage,
        showPercentage,
        setShowPercentage,
        showUpdater,
        setShowUpdater,
        showGenerator,
        setShowGenerator
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
