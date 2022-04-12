import { React, useEffect } from 'react'
import '../styles/Home.scss'

// Components
import Post from './Post'
import Spinner from './small/Spinner'

function Home({ allPosts, getAllPosts, userBookmarks, getUserBookmarks }) {
  useEffect(() => {
    getUserBookmarks()
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div className="Home">
      <div className="home-inside">
        <div className="home-post-container">
          {allPosts !== [] && allPosts ? (
            allPosts.map((post) => {
              return (
                <Post
                  post={{
                    id: post._id,
                    image: post.img,
                    date: post.timestamp,
                    title: post.title,
                    message: post.message,
                    likes: post.likes,
                    comments: post.comments,
                  }}
                  key={post._id}
                  userBookmarks={userBookmarks}
                  isDetailed={false}
                />
              )
            })
          ) : (
            <div className="spinner-container">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
