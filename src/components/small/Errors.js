import React from 'react'
import './Errors.scss'

function Errors({ errors }) {
  return (
    <ul className="errors-container">
      {errors &&
        errors.map((error) => (
          <li key={errors.indexOf(error)}>
            {errors.indexOf(error) + 1 + ' ' + error}
          </li>
        ))}
    </ul>
  )
}

export default Errors
