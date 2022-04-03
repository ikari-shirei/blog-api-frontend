import React from 'react'
import '../styles/Bookmarks.scss'

// Components
import Post from './Post'

function Bookmarks() {
  return (
    <div className="Bookmarks">
      <h1 className="bookmarks-section-header">Bookmarks</h1>

      <div className="bookmarks-posts-container">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Bookmarks
