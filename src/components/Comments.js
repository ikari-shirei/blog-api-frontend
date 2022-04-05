import React from 'react'
import '../styles/Comments.scss'

import Comment from './Comment'
import AddComment from './small/AddComment'

function Comments({ post, comments }) {
  return (
    <div className="Comments">
      <h1 className="comments-section-header">Comments</h1>

      {/* You can only send comments if there is post */}
      {post && (
        <div className="comments-section-add-comment">
          <AddComment username={'your_username'} />{' '}
        </div>
      )}

      {comments && comments.length !== 0 ? (
        comments.map((comment) => {
          return (
            <Comment
              username={comment.username}
              date={comment.date}
              message={comment.message}
              like_count={comment.likes}
              key={comment.id}
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
