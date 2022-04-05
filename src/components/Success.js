import { React, useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Success() {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, 2000)
  })
  return <div>You have succesfully logged in.</div>
}

export default Success
