import React from 'react'
import './CommentPresent.scss'

function CommentPresent({ count, goToPostDetail }) {
  return (
    <div className="comment-container">
      <span
        className="comment-icon material-icons-outlined"
        onClick={goToPostDetail}
      >
        chat_bubble
      </span>
      <p className="comment-count">{count}</p>
    </div>
  )
}

export default CommentPresent
