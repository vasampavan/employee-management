import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import'bootstrap/dist/css/bootstap.min.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
