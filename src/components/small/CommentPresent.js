import React from 'react'
import './CommentPresent.scss'

function CommentPresent() {
  return (
    <div className="comment-container">
      <span className="comment-icon material-icons-outlined">chat_bubble</span>
      <p className="comment-count">0</p>
    </div>
  )
}

export default CommentPresent
