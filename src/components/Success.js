import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Success.scss'

function Success() {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout)

      navigate('/')
    }, 1000)
  })

  return (
    <div className="Success">
      <h1 className="success-text">You have succesfully logged in.</h1>
    </div>
  )
}

export default Success
