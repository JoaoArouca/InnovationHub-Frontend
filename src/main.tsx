import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './styles.css'
import { enableMSW } from './api/server.ts'

enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
