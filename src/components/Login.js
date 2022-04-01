import React from 'react'
import '../styles/Login.scss'

// Components
import Navbar from './Navbar'
import Button from './small/Button'
import Post from './Post'

function Login() {
  return (
    <div className="Login">
      <div className="login-inside">
        <Navbar />
        <Button value={'Button'} variant={'second-variant'} />
      </div>
    </div>
  )
}

export default Login
