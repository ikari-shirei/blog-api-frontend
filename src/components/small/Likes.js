import React from 'react'
import './Likes.scss'

function Likes() {
  return (
    <div className="like-container">
      <span className="like-icon material-icons-outlined">favorite_border</span>
      <p className="like-count">0</p>
    </div>
  )
}

export default Likes
