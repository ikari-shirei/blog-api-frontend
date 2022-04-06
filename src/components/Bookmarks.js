import React from 'react'
import '../styles/Bookmarks.scss'

// Components
import Post from './Post'

function Bookmarks({ posts }) {
  return (
    <div className="Bookmarks">
      <h1 className="bookmarks-section-header">Bookmarks</h1>

      <div className="bookmarks-posts-container">
        {posts && posts.length !== 0 ? (
          posts.map((post) => {
            return (
              <Post
                post={{
                  id: post._id,
                  image: post.img,
                  date: post.date,
                  title: post.title,
                  message: post.message,
                  tags: post.tags,
                  likes: post.likes,
                  comments: post.comments,
                }}
                key={post._id}
              />
            )
          })
        ) : (
          <div className="bookmarks-no-comment-container">No posts</div>
        )}
      </div>
    </div>
  )
}

export default Bookmarks
