import React from 'react'
import './Likes.scss'

function Likes({ count }) {
  return (
    <div className="like-container">
      <span className="like-icon material-icons-outlined">favorite_border</span>
      <p className="like-count">{count}</p>
    </div>
  )
}

export default Likes
