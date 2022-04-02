import React from 'react'
import '../styles/Login.scss'
import { Link } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Button from './small/Button'
import Post from './Post'
import TextInput from './small/TextInput'

function Login() {
  return (
    <div className="Login">
      <div className="login-inside">
        <Navbar />
        <form className="login-form">
          <TextInput label="Username" name="username" type={'text'} />

          <TextInput label="Password" name="password" type={'text'} />

          <Button value="Login" variant="second-variant" type="submit" />
        </form>

        <div className="login-link">
          <Link to="/register">
            or <span>register</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
