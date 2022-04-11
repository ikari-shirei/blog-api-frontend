import React, { useContext, useEffect, useState } from 'react'
import '../styles/Comments.scss'
import axios from 'axios'

// Components
import Comment from './Comment'
import AddComment from './small/AddComment'

function Comments({ post, comments, getPost }) {
  const user = JSON.parse(localStorage.getItem('user_info'))

  return (
    <div className="Comments">
      <h1 className="comments-section-header">Comments</h1>

      {/* You can only send comments if there is post */}
      {post && user && (
        <div className="comments-section-add-comment">
          <AddComment
            username={'your_username'}
            post={post}
            getPost={getPost}
          />
        </div>
      )}

      {comments && comments.length !== 0 && Array.isArray(comments) ? (
        comments.map((comment) => {
          return (
            <Comment
              username={comment.user.username}
              date={comment.timestamp}
              message={comment.message}
              key={comment._id}
            />
          )
        })
      ) : (
        <div className="comments-no-comment-container">No comments</div>
      )}
    </div>
  )
}

export default Comments
