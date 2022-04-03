import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Profile.scss'

// Components
import Navbar from './Navbar'
import Bookmarks from './Bookmarks'
import Button from './small/Button'
import Comments from './Comments'

function Profile() {
  return (
    <div className="Profile">
      <div className="profile-inside">
        <Navbar />

        <div className="profile-user-detail-container">
          <div>
            <h1 className="profile-username">your_username</h1>
            <h3 className="profile-email">email@mail.com</h3>
          </div>
          <div className="profile-logout-button">
            <Button value="Logout" variant="second-variant" type="button" />
          </div>
        </div>

        <Bookmarks />
        <Comments />

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

export default Profile
