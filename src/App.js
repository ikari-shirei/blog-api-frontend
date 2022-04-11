import { React, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import 'material-icons/iconfont/material-icons.css'
import axios from 'axios'

// Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Success from './components/Success'
import PostDetail from './components/PostDetail'

// Context
import { ServerContext } from './context/Server'

// Helpers
import requireAuth from './helpers/require_auth'
import { authHeader } from './helpers/auth_header'

function App() {
  const [userBookmarks, setUserBookmarks] = useState(null)
  const [userComments, setUserComments] = useState(null)

  const [allPosts, setAllPosts] = useState(null)

  const user = JSON.parse(localStorage.getItem('user_info'))
  const server = 'http://localhost:5000'

  // Check if user still logged in
  useEffect(() => {
    requireAuth()
  }, [])

  const getUserBookmarks = () => {
    authHeader()

    if (user) {
      axios
        .get(server + '/user/' + user._id + '/bookmarks')
        .then(function (response) {
          setUserBookmarks(response.data.bookmarks)
        })
        .catch(function (err) {
          console.log(err, 'user bookmarks')
        })
    }
  }

  const getUserComments = () => {
    authHeader()

    if (user) {
      axios
        .get(server + '/user/' + user._id + '/comments')
        .then(function (response) {
          setUserComments(response.data.comments)
        })
        .catch(function (err) {
          console.error(err)
        })
    }
  }

  const getAllPosts = () => {
    axios
      .get(server + '/posts')
      .then(function (response) {
        setAllPosts(response.data.posts)
      })
      .catch(function (err) {
        console.error(err)
      })
  }

  return (
    <div className="App">
      <Navbar />
      <ServerContext.Provider value="http://localhost:5000">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                allPosts={allPosts}
                getAllPosts={getAllPosts}
                userBookmarks={userBookmarks}
                getUserBookmarks={getUserBookmarks}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <Profile
                userBookmarks={userBookmarks}
                getUserBookmarks={getUserBookmarks}
                userComments={userComments}
                getUserComments={getUserComments}
              />
            }
          />
          <Route path="/success" element={<Success />} />
          <Route
            path="/post/:id"
            element={
              <PostDetail
                userBookmarks={userBookmarks}
                getUserBookmarks={getUserBookmarks}
              />
            }
          />
        </Routes>
      </ServerContext.Provider>
    </div>
  )
}

export default App
