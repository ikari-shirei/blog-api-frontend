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
        <PostDetail />
      </div>
    </div>
  )
}

export default Home
