import { React, useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.scss'

// Components
import Navbar from './Navbar'
import Button from './small/Button'
import TextInput from './small/TextInput'
import Errors from './small/Errors'

// Context
import { ServerContext } from '../context/Server'

// Helpers
import requireAuth from '../helpers/require_auth'

function Login() {
  const user = JSON.parse(localStorage.getItem('user_info'))

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState(null)

  const axios = require('axios').default
  const server = useContext(ServerContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    // Clear errors
    setErrors(null)

    axios
      .post(server.adress + '/login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .then(function (response) {
        // User logged in
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.token))
        }

        navigate('/')
        window.location.reload()
      })
      .catch(function (error) {
        if (typeof error.response.data === 'object') {
          const errorsArray = error.response.data.map((item) => item.msg)
          setErrors(errorsArray)
        } else {
          setErrors([error])
        }
      })
  }

  // Check if user still logged in
  useEffect(() => {
    requireAuth()
  }, [])

  // Protect route
  useEffect(() => {
    if (user) {
      navigate('/')
      window.location.reload()
    }
  }, [])

  if (!user) {
    return (
      <div className="Login">
        <div className="login-inside">
          <Navbar />
          <form className="login-form" onSubmit={handleSubmit}>
            <TextInput
              label="Email"
              name="email"
              type={'text'}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
            />

            <TextInput
              label="Password"
              name="password"
              type={'password'}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
            />

            <Button value="Login" variant="second-variant" type="submit" />
          </form>

          <div className="login-link">
            <Link to="/register">
              or <span>register</span>
            </Link>
          </div>

          <Errors errors={errors} />
        </div>
      </div>
    )
  }
}

export default Login
