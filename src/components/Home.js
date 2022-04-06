import { React, useState, useContext, useEffect } from 'react'
import '../styles/Home.scss'
import axios from 'axios'

// Components
import Post from './Post'

// Context
import { ServerContext } from '../context/Server'

// Helpers
import { authHeader } from '../helpers/auth_header'

function Home() {
  const [posts, setPosts] = useState([])
  const [bookmarks, setBookmarks] = useState([])

  const user = JSON.parse(localStorage.getItem('user_info'))

  const server = useContext(ServerContext)

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

  const getPosts = () => {
    axios
      .get(server + '/posts')
      .then(function (response) {
        setPosts(response.data.posts)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="Home">
      <div className="home-inside">
        <div className="home-post-container">
          {posts !== [] && posts
            ? posts.map((post) => {
                return (
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
                )
              })
            : ''}
        </div>
      </div>
    </div>
  )
}

export default Home
