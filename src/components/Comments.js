import React from 'react'
import '../styles/Comments.scss'
import Comment from './Comment'

function Comments({ post }) {
  return (
    <div className="Comments">
      <h1>Comments</h1>

      {/* You can only send comments if there is post */}
      {post && (
        <div className="comment-add-container">
          <p className="comment-add-username">your_username</p>
          <textarea
            className="comment-add-message"
            placeholder="Add your comments..."
          ></textarea>
          <button className="comment-add-button">Add</button>
        </div>
      )}

      <Comment />

      <Comment />

      <Comment />
    </div>
  )
}

export default Comments
