import { React, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Profile.scss'

// Components
import Navbar from './Navbar'
import Bookmarks from './Bookmarks'
import Button from './small/Button'
import Comments from './Comments'

function Profile() {
  const user = JSON.parse(localStorage.getItem('user_info'))

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user_info')
    localStorage.removeItem('user')

    window.location.reload()
  }

  // Protect route
  useEffect(() => {
    if (!user) {
      navigate('/')
      window.location.reload()
    }
  }, [])

  if (user) {
    return (
      <div className="Profile">
        <div className="profile-inside">
          <div className="profile-user-detail-container">
            <div>
              <h1 className="profile-username">{user.username}</h1>
              <h3 className="profile-email">{user.email}</h3>
            </div>
            <div className="profile-logout-button">
              <Button
                value="Logout"
                variant="second-variant"
                type="button"
                onClick={logout}
              />
            </div>
          </div>

          <Bookmarks posts={user.bookmarks} />

          <Comments comments={user.comments} />

          <div className="profile-delete-account-button">
            <Button
              value="Delete Account"
              variant="first-variant"
              type="button"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
