import React from 'react'
import './Button.scss'

function Button({ value, variant }) {
  return <button className={'Button ' + variant}>{value}</button>
}

export default Button
