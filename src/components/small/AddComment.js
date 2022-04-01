import React from 'react'
import './AddComment.scss'

import Button from './Button'

function AddComment({ username }) {
  return (
    <div className="comment-add-container">
      <p className="comment-add-username">{username}</p>
      <textarea
        className="comment-add-message"
        placeholder="Add your comments..."
      ></textarea>
      <div className="add-button-container">
        <Button value={'Add'} variant="first-variant" />
      </div>
    </div>
  )
}

export default AddComment
