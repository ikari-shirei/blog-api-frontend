import React from 'react'
import '../styles/Comment.scss'

import Likes from './small/Likes'

function Comment({ username, date, message }) {
  return (
    <div className="Comment">
      <div className="comment-top">
        <p className="comment-username">{username}</p>
        <p className="comment-date">{date}</p>
      </div>

      <div className="comment-middle">
        <p className="comment-message">{message}</p>
      </div>
    </div>
  )
}

export default Comment
