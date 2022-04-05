import { React, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import 'material-icons/iconfont/material-icons.css'

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Success from './components/Success'

// Context
import { ServerContext } from './context/Server'

// Helpers
import requireAuth from './helpers/require_auth'

function App() {
  const user = JSON.parse(localStorage.getItem('user_info'))

  // Check if user still logged in
  useEffect(() => {
    requireAuth()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <ServerContext.Provider value="http://localhost:5000">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ServerContext.Provider>
    </div>
  )
}

export default App
