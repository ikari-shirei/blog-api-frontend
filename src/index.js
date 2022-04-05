import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import App from './App'

// Context
import { ServerContext } from './context/Server'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ServerContext.Provider value={{ adress: 'http://localhost:5000' }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServerContext.Provider>
  </React.StrictMode>
)
