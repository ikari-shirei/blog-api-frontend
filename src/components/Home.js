import { React, useState, useContext, useEffect } from 'react'
import '../styles/Home.scss'
import axios from 'axios'

// Components
import Post from './Post'

// Helpers
import { ServerContext } from '../context/Server'

function Home() {
  const [posts, setPosts] = useState([])

  const user = JSON.parse(localStorage.getItem('user_info'))

  const server = useContext(ServerContext)

  const getPosts = () => {
    const response = axios
      .get(server + '/posts')
      .then(function (response) {
        return response
      })
      .catch(function (err) {
        return err
      })

    return response
  }

  useEffect(() => {
    ;(async function () {
      const response = await getPosts()
      setPosts(response.data.posts)
    })()
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
                      likes: post.likes.length,
                      comments: post.comments,
                    }}
                    key={post._id}
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
