import React from 'react'
import './Button.scss'

function Button({ value, variant, type, onClick }) {
  return (
    <button
      className={'Button ' + variant}
      type={type && type}
      onClick={onClick && onClick}
    >
      {value}
    </button>
  )
}

export default Button
