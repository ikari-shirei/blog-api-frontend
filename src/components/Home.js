import React from 'react'
import '../styles/Home.scss'

// Components
import Navbar from './Navbar'
import Post from './Post'
import PostDetail from './PostDetail'
import Comments from './Comments'

function Home() {
  return (
    <div className="Home">
      <div className="home-inside">
        <Navbar />
        <div className="home-post-container">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default Home
