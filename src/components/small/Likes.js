import React from 'react'
import './Likes.scss'

function Likes({ count, handleLike, likeIcon }) {
  return (
    <div className="like-container">
      <span className="like-icon material-icons-outlined" onClick={handleLike}>
        {likeIcon}
      </span>
      <p className="like-count">{count}</p>
    </div>
  )
}

export default Likes
