import React, { useContext, useEffect, useState } from 'react'
import '../styles/PostDetail.scss'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

// Components
import Post from './Post'
import Comments from './Comments'

// Context
import { ServerContext } from '../context/Server'

//Helpers
import Spinner from './small/Spinner'

function PostDetail({ userBookmarks, getUserBookmarks }) {
  const [post, setPost] = useState(null)
  const [err, setErr] = useState(false)

  useEffect(() => {
    getUserBookmarks()
  }, [])

  const server = useContext(ServerContext)

  const getPost = () => {
    axios
      .get(server + window.location.pathname)
      .then(function (response) {
        setPost(response.data.post)
        setErr(false)
      })
      .catch(function (err) {
        toast.error('Something gone wrong.')
        setErr(true)
        console.error(err)
      })
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="PostDetail">
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
          userBookmarks={userBookmarks}
          isDetailed={true}
        />
      ) : !err ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        "Couldn't get post. Try again later."
      )}

      {post && (
        <Comments
          post={post}
          comments={post ? post.comments : ''}
          getPost={getPost}
        />
      )}

      <div className="post-detail-bottom">
        <ToastContainer />
      </div>
    </div>
  )
}

export default PostDetail
