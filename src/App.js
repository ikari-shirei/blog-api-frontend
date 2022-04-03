import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import 'material-icons/iconfont/material-icons.css'

// Components
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

// Context
import { ServerContext } from './context/Server'

function App() {
  return (
    <div className="App">
      <ServerContext.Provider value={{ adress: 'http://localhost:5000' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ServerContext.Provider>
    </div>
  )
}

export default App
