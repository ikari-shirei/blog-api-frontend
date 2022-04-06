import React from 'react'
import '../styles/PostDetail.scss'

// Components
import Post from './Post'
import Comments from './Comments'

function PostDetail() {
  return (
    <div className="PostDetail">
      <Post />
      <Comments post={'hello'} />
    </div>
  )
}

export default PostDetail
