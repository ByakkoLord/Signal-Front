import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import io from 'socket.io-client';

export const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  console.log("🔄 AppProvider montado");

  const [isDraggingContext, setIsDraggingContext] = useState(false);
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [socketReady, setSocketReady] = useState(false);

  
  const socket = useMemo(() => {
    const newSocket = io('http://localhost:3000', {
      withCredentials: true,
      transports: ['websocket'], 
    });

    return newSocket;
  }, []);

  useEffect(() => {
    console.log("🔁 useEffect do AppProvider montado");
    const handleConnect = () => {
      console.log('✅ WebSocket conectado');
      setSocketReady(true);
    };

    const handleDisconnect = () => {
      console.log('❌ WebSocket desconectado');
      setSocketReady(false);
    };

    socket.on('connect', handleConnect);
    socket.on('disconnect', handleDisconnect);
    socket.on('connect_error', (err) => {
      console.error('🚫 Erro de conexão:', err.message);
    });

    
    return () => {
      socket.off('connect', handleConnect);
      socket.off('disconnect', handleDisconnect);
    };
  }, [socket]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
