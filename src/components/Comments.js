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

      <Comment
        username={'other_username'}
        date={'APR 1, 2022'}
        message={'Appropriate message'}
        like_count={0}
      />

      <Comment
        username={'other_username'}
        date={'APR 1, 2022'}
        message={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo dignissim nibh. Vestibulum imperdiet nulla quis nisi faucibus, at dapibus magna consequat. Fusce vehicula orci ac eleifend tincidunt. Cras sit amet dignissim ligula, nec posuere neque. Phasellus id arcu at magna dictum efficitur. Praesent sed felis diam. Quisque at dapibus nunc. Quisque semper porttitor quam, sit amet pellentesque lorem posuere nec. Aenean dapibus at diam non vestibulum. '
        }
        like_count={5}
      />

      <Comment
        username={'other_username'}
        date={'APR 1, 2022'}
        message={'Hello world'}
        like_count={4}
      />
    </div>
  )
}

export default Comments
