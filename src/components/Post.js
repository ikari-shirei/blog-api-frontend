import axios from 'axios'
import { React, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { DateTime } from 'luxon'
import '../styles/Post.scss'

//Components
import CommentPresent from './small/CommentPresent'
import Likes from './small/Likes'

//Context
import { ServerContext } from '../context/Server'

function Post({ post, bookmarks }) {
  const [bookmarkIcon, setBookmarkIcon] = useState('bookmark_border')
  const user = JSON.parse(localStorage.getItem('user_info'))

  const server = useContext(ServerContext)
  const navigate = useNavigate()

  const handleBookmark = () => {
    axios
      .post(server + '/post/' + post.id + '/bookmark', {
        post_id: post.id,
      })
      .then(function () {
        // Change icon on success
        setBookmarkIcon((prev) => {
          if (prev === 'bookmark_border') {
            return 'bookmark'
          } else {
            return 'bookmark_border'
          }
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  // Check if user bookmarked this post
  useEffect(() => {
    if (user && bookmarks) {
      const isBookmarkExist = bookmarks.some((bookmark) => {
        return bookmark._id === post.id
      })

      if (isBookmarkExist) {
        setBookmarkIcon('bookmark')
      } else {
        setBookmarkIcon('bookmark_border')
      }
    }
  }, [bookmarks])

  const goToPostDetail = () => {
    if (window.location.pathname !== '/post/' + post.id) {
      navigate('/post/' + post.id)
    }
  }

  const convertDate = (date) => {
    const newDate = new Date(date)

    return DateTime.fromJSDate(newDate).toLocaleString(DateTime.DATE_FULL)
  }

  const calculateReadingTime = (message) => {
    const totalCount = message.length
    const time = Math.ceil(totalCount / 200)

    return time
  }

  return (
    <div className="Post">
      <img
        className="post-image"
        src={post.image}
        alt="one"
        onClick={goToPostDetail}
      />

      <p className="post-date">{convertDate(post.date)}</p>

      <div className="post-main">
        <h1 className="post-title">{post.title}</h1>
        <p className="post-message">{post.message}</p>
      </div>

      <div className="post-footer">
        <div className="post-like-comment-container">
          {post.comments ? <CommentPresent count={post.comments.length} /> : ''}

          <Likes count={post.likes.length} />
        </div>
        <div className="post-footer-right">
          <p className="post-read-time">
            {calculateReadingTime(post.message)} min
          </p>

          {/* Bookmark */}

          {user ? (
            <span
              className="post-bookmark-icon material-icons-outlined"
              onClick={handleBookmark}
            >
              {bookmarkIcon}
            </span>
          ) : (
            ''
          )}

          {/* Bookmark */}
        </div>
      </div>
    </div>
  )
}

export default Post
