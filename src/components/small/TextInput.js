import React from 'react'
import './TextInput.scss'

function TextInput({ label, name, type }) {
  return (
    <label className="TextInput">
      {label}
      <input type={type} name={name} />
    </label>
  )
}

export default TextInput
