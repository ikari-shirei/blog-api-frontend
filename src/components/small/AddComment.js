import React, { useContext, useState } from 'react'
import './AddComment.scss'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

// Components
import Button from './Button'

// Context
import { ServerContext } from '../../context/Server'

// Helpers
import { authHeader } from '../../helpers/auth_header'

function AddComment({ username, post, getPost }) {
  const [message, setMessage] = useState('')

  const server = useContext(ServerContext)

  const addComment = () => {
    authHeader()

    axios
      .post(server + '/post/' + post._id + '/comment', {
        message: message,
      })
      .then(function () {
        setMessage('')
        getPost()
        toast.success('Your comment is sent.')
      })
      .catch(function (err) {
        console.error(err)
        toast.error('Something gone wrong.')
      })
  }

  return (
    <div className="comment-add-container">
      <p className="comment-add-username">{username}</p>
      <textarea
        className="comment-add-message"
        placeholder="Add your comments..."
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        value={message}
      ></textarea>
      <div className="add-button-container">
        <Button value={'Add'} variant="first-variant" onClick={addComment} />
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddComment
