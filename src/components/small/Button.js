import React from 'react'
import './Button.scss'

function Button({ value, variant, type }) {
  return (
    <button className={'Button ' + variant} type={type && type}>
      {value}
    </button>
  )
}

export default Button
