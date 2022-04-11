import axios from 'axios'
import { React, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { DateTime } from 'luxon'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/Post.scss'

//Components
import CommentPresent from './small/CommentPresent'
import Likes from './small/Likes'

//Context
import { ServerContext } from '../context/Server'

// Helpers
import { authHeader } from '../helpers/auth_header'

function Post({ post, userBookmarks }) {
  const [bookmarkIcon, setBookmarkIcon] = useState('bookmark_border')
  const [likeIcon, setLikeIcon] = useState('favorite_border')
  const [likeCount, setLikeCount] = useState(post.likes.length)

  const user = JSON.parse(localStorage.getItem('user_info'))

  const server = useContext(ServerContext)
  const navigate = useNavigate()

  const handleBookmark = () => {
    authHeader()

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
        toast.error('Something gone wrong.')
        console.error(err)
      })
  }

  // Check if user bookmarked this post
  useEffect(() => {
    if (user && userBookmarks) {
      const isBookmarkExist = userBookmarks.some((bookmark) => {
        return bookmark._id === post.id
      })

      if (isBookmarkExist) {
        setBookmarkIcon('bookmark')
      } else {
        setBookmarkIcon('bookmark_border')
      }
    }
  }, [userBookmarks])

  const handleLike = () => {
    authHeader()

    axios
      .post(server + '/post/' + post.id + '/like', {
        post_id: post.id,
      })
      .then(function () {
        // Change icon on success
        setLikeIcon((prev) => {
          if (prev === 'favorite_border' && user) {
            return 'favorite'
          } else {
            return 'favorite_border'
          }
        })
      })
      .catch(function (err) {
        if (!user) {
          navigate('/login')
        } else {
          toast.error('Something gone wrong.')
          console.error(err)
        }
      })
  }

  // Check if user liked this post
  useEffect(() => {
    if (user) {
      axios
        .get(server + '/post/' + post.id)
        .then(function (response) {
          setLikeCount(response.data.post.likes.length)

          const isUserLiked = response.data.post.likes.some((like) => {
            return like === user._id
          })

          if (isUserLiked) {
            setLikeIcon('favorite')
          } else {
            setLikeIcon('favorite_border')
          }
        })
        .catch(function (err) {
          toast.error('Something gone wrong.')
          console.error(err)
        })
    }
  }, [likeIcon])

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

      <p className="post-date" onClick={goToPostDetail}>
        {convertDate(post.date)}
      </p>

      <div className="post-main">
        <h1 className="post-title" onClick={goToPostDetail}>
          {post.title}
        </h1>
        <p className="post-message" onClick={goToPostDetail}>
          {post.message}
        </p>
      </div>

      <div className="post-footer">
        <div className="post-like-comment-container">
          {post.comments ? (
            <CommentPresent
              count={post.comments.length}
              goToPostDetail={goToPostDetail}
            />
          ) : (
            ''
          )}

          <Likes
            count={likeCount}
            handleLike={handleLike}
            likeIcon={likeIcon}
          />
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
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Post
