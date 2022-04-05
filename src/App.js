import { React, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import './App.scss'
import 'material-icons/iconfont/material-icons.css'

// Components
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
