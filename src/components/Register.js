import { React, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Register.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Components
import Navbar from './Navbar'
import Button from './small/Button'
import Post from './Post'
import TextInput from './small/TextInput'
import Errors from './small/Errors'

// Context
import { ServerContext } from '../context/Server'

function Register() {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    rpassword: '',
  })
  const [errors, setErrors] = useState(null)

  const axios = require('axios').default
  const server = useContext(ServerContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post(server.adress + '/register', {
        username: registerForm.username,
        email: registerForm.email,
        password: registerForm.password,
        rpassword: registerForm.rpassword,
      })
      .then(function (response) {
        // User registered
        navigate(`/`)
      })
      .catch(function (error) {
        const response = error.response
        const errorsArray = error.response.data.map((item) => item.msg)
        setErrors(errorsArray)
      })
  }

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <div className="Register">
      <div className="register-inside">
        <Navbar />
        <form className="register-form" onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            name="username"
            type={'text'}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, username: e.target.value })
            }
          />

          <TextInput
            label="Email"
            name="email"
            type={'text'}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, email: e.target.value })
            }
          />

          <TextInput
            label="Password"
            name="password"
            type={'password'}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, password: e.target.value })
            }
          />

          <TextInput
            label="Password again"
            name="rpassword"
            type={'password'}
            onChange={(e) =>
              setRegisterForm({ ...registerForm, rpassword: e.target.value })
            }
          />

          <Button value="Register" variant="second-variant" type="submit" />
        </form>

        <div className="register-link">
          <Link to="/login">
            or <span>login</span>
          </Link>
        </div>

        <Errors errors={errors} />
      </div>
    </div>
  )
}

export default Register
