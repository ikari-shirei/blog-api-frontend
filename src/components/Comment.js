import React from 'react'
import '../styles/Comment.scss'
import { DateTime } from 'luxon'

function Comment({ username, date, message }) {
  const convertDate = (date) => {
    const newDate = new Date(date)

    return DateTime.fromJSDate(newDate).toLocaleString(DateTime.DATE_FULL)
  }
  return (
    <div className="Comment">
      <div className="comment-top">
        <p className="comment-username">{username}</p>
        <p className="comment-date">{convertDate(date)}</p>
      </div>

      <div className="comment-middle">
        <p className="comment-message">{message}</p>
      </div>
    </div>
  )
}

export default Comment
