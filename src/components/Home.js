import { React, useEffect } from 'react'
import '../styles/Home.scss'

import image from './image.png'

// Components
import Navbar from './Navbar'
import Post from './Post'

function Home() {
  const user = JSON.parse(localStorage.getItem('user_info'))

  return (
    <div className="Home">
      <div className="home-inside">
        <Navbar />
        <div className="home-post-container">
          <Post
            post={{
              image: image,
              date: 'MAR 30, 2022',
              title: 'Title 2',
              message: `      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim.`,
              tags: ['ipsum', 'other_ipsum'],
              likes: 5,
              comments: [],
            }}
          />
          <Post
            post={{
              image: image,
              date: 'MAR 30, 2022',
              title: 'Title 2',
              message: `      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim.`,
              tags: ['ipsum', 'other_ipsum'],
              likes: 5,
              comments: [],
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
