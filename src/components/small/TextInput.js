import React from 'react'
import './TextInput.scss'

function TextInput({ label, name }) {
  return (
    <label className="TextInput">
      {label}
      <input type="text" name={name} />
    </label>
  )
}

export default TextInput
