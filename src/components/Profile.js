import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Profile.scss'

import image from './image.png'

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

        <Bookmarks
          posts={[
            {
              image: image,
              date: 'MAR 30, 2022',
              title: 'Title 2',
              message: `      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim.`,
              tags: ['ipsum', 'other_ipsum'],
              likes: 5,
              comments: [],
            },
          ]}
        />

        <Comments
          comments={[
            {
              username: 'Username',
              date: '3 APR, 2022',
              message: 'This is a message',
              likes: 5,
            },
          ]}
        />

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
