import './assets/main.css'
import './assets/base.css'

import { createRoot } from 'react-dom/client'
import App from './App'
import { AppProvider } from '../contexts/ClientContext'

import { getCurrentTime } from './scripts/clock'
import { showNotification } from './scripts/notification'

getCurrentTime()
showNotification('Welcome')

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)
