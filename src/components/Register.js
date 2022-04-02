import React from 'react'
import '../styles/Register.scss'
import { Link } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Button from './small/Button'
import Post from './Post'
import TextInput from './small/TextInput'

function Register() {
  return (
    <div className="Register">
      <div className="register-inside">
        <Navbar />
        <form className="register-form">
          <TextInput label="Username" name="username" type={'text'} />

          <TextInput label="Email" name="email" type={'text'} />

          <TextInput label="Password" name="password" type={'password'} />

          <TextInput
            label="Password again"
            name="rpassword"
            type={'password'}
          />

          <Button value="Register" variant="second-variant" type="submit" />
        </form>

        <div className="register-link">
          <Link to="/login">
            or <span>login</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
