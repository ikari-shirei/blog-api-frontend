import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFound.scss'

function NotFound() {
  return (
    <div className="NotFound">
      <h1>404 Not Found</h1>

      <Link to="/">Go home</Link>
    </div>
  )
}

export default NotFound
