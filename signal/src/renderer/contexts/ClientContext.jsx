import React, { createContext, useContext, useState } from 'react';

// Cria o contexto e exporta
export const AppContext = createContext();

// Hook para usar o contexto (opcional)
export function useAppContext() {
  return useContext(AppContext);
}

// Provider
export function AppProvider({ children }) {
  const [isDraggingContext, setIsDraggingContext] = useState(false);

  return (
    <AppContext.Provider value={{ isDraggingContext, setIsDraggingContext }}>
      {children}
    </AppContext.Provider>
  );
}
