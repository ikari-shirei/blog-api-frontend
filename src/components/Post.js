import React from 'react'
import '../styles/Post.scss'
import image from './image.png'
import CommentPresent from './small/CommentPresent'

import Likes from './small/Likes'

function Post() {
  return (
    <div className="Post">
      <img className="post-image" src={image} alt="one" />

      <p className="post-date">MAR 30, 2022</p>

      <div className="post-main">
        <h1 className="post-title">Title</h1>
        <p className="post-message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim.
        </p>
      </div>
      <div className="post-tags-container">
        <p className="post-tag">#Ipsum</p>
        <p className="post-tag">#Ipsum</p>
        <p className="post-tag">#Ipsum</p>
      </div>

      <div className="post-footer">
        <div className="post-like-comment-container">
          <CommentPresent count="0" />

          <Likes count="0" />
        </div>
        <div className="post-footer-right">
          <p className="post-read-time">2 min</p>
          <span className="post-bookmark-icon material-icons-outlined">
            bookmark_border
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post
