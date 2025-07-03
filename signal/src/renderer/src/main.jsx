import './assets/main.css'
import './assets/base.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AppProvider } from '../contexts/ClientContext'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </StrictMode>
  
)
