import React from 'react'

// Components
import Navbar from './Navbar'
import Post from './Post'
import PostDetail from './PostDetail'
import Comments from './Comments'

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <PostDetail />
    </div>
  )
}

export default Home
