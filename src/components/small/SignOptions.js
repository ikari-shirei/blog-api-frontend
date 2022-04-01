import React from 'react'
import { Link } from 'react-router-dom'
import './SignOptions.scss'

import Button from './Button'

function SignOptions() {
  return (
    <div className="SignOptions">
      <p className="question">Not logged in yet?</p>
      <div className="sign-options-button-container">
        <Link to="/login">
          <Button value={'Login'} variant={'second-variant'} />
        </Link>
        <Link to="/register">
          <Button value={'Sign up'} variant={'first-variant'} />
        </Link>
      </div>
    </div>
  )
}

export default SignOptions
