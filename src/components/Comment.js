import React from 'react'
import '../styles/Comment.scss'

function Comment() {
  return (
    <div className="Comment">
      <div>
        <p>other_username</p>
        <p>MAR 30, 2022</p>
      </div>

      <div>
        <p>Message</p>
      </div>
      <div>
        <span className=" material-icons-outlined">favorite_border</span>
        <p>0</p>
      </div>
    </div>
  )
}

export default Comment
