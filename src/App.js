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

// Context
import { ServerContext } from './context/Server'
import { UserContext } from './context/User'

// Helpers
import { authHeader } from './helpers/auth_header'

function App() {
  const [user, setUser] = useState(null)

  const axios = require('axios').default
  const server = useContext(ServerContext)
  const navigate = useNavigate()

  const auth = (route) => {
    authHeader()

    axios
      .get(server.adress + `/${route}`, {})
      .then(function (response) {
        setUser(response.data.user)
        console.log(response.data.user, 'response')
      })
      .catch(function (error) {
        setUser(null)
        console.log(error)
      })
  }

  useEffect(auth, [])

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login auth={auth} />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
