import React, { useContext, useEffect, useState } from 'react'
import '../styles/PostDetail.scss'
import axios from 'axios'

// Components
import Post from './Post'
import Comments from './Comments'

// Context
import { ServerContext } from '../context/Server'

//Helpers
import { authHeader } from '../helpers/auth_header'

function PostDetail() {
  const [post, setPost] = useState(null)
  const [bookmarks, setBookmarks] = useState([])

  const user = JSON.parse(localStorage.getItem('user_info'))

  const getBookmarks = () => {
    authHeader()

    axios
      .get(server + '/profile/bookmarks')
      .then(function (response) {
        setBookmarks(response.data.bookmarks)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  useEffect(() => {
    if (user) {
      getBookmarks()
    }
  }, [])

  const server = useContext(ServerContext)

  const getPost = () => {
    axios
      .get(server + window.location.pathname)
      .then(function (response) {
        setPost(response.data.post)
        console.log('response', response.data.post)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="PostDetail">
      {console.log(post)}

      {post ? (
        <Post
          post={{
            id: post._id,
            image: post.img,
            date: post.timestamp,
            title: post.title,
            message: post.message,
            tags: post.tags,
            likes: post.likes,
            comments: post.comments,
          }}
          key={post._id}
          bookmarks={bookmarks}
        />
      ) : (
        ''
      )}

      <h1>Post detail page</h1>
    </div>
  )
}

export default PostDetail
