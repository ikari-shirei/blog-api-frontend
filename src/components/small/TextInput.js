import React from 'react'
import './TextInput.scss'

function TextInput({ label, name, type, onChange }) {
  return (
    <label className="TextInput">
      {label}
      <input type={type} name={name} onChange={onChange && onChange} />
    </label>
  )
}

export default TextInput
