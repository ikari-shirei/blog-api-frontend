import axios from 'axios'
import { React, useState, useEffect, useContext } from 'react'
import { ServerContext } from '../context/Server'
import '../styles/Post.scss'

import CommentPresent from './small/CommentPresent'

import Likes from './small/Likes'

function Post({ post }) {
  const user = JSON.parse(localStorage.getItem('user_info'))

  const server = useContext(ServerContext)

  const handleBookmark = () => {
    axios
      .post(server + '/post' + '/' + post.id + '/bookmark', {
        post_id: post.id,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  return (
    <div className="Post">
      <img className="post-image" src={post.image} alt="one" />

      <p className="post-date">{post.date}</p>

      <div className="post-main">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-message">{post.message}</p>
      </div>

      <div className="post-tags-container">
        {post.tags &&
          post.tags.map((tag) => {
            return (
              <p className="post-tag" key={post.tags.indexOf(tag)}>
                #{tag}
              </p>
            )
          })}
      </div>

      <div className="post-footer">
        <div className="post-like-comment-container">
          {post.comments ? <CommentPresent count={post.comments.length} /> : ''}

          <Likes count={post.likes.length} />
        </div>
        <div className="post-footer-right">
          <p className="post-read-time">2 min</p>
          {user ? (
            <span
              className="post-bookmark-icon material-icons-outlined"
              onClick={handleBookmark}
            >
              bookmark_border
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Post
