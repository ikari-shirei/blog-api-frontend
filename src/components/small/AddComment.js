import React, { useContext, useState } from 'react'
import './AddComment.scss'
import axios from 'axios'

import Button from './Button'

// Context
import { ServerContext } from '../../context/Server'

function AddComment({ username, post, getPost }) {
  const [message, setMessage] = useState('')

  const user = JSON.parse(localStorage.getItem('user_info'))

  const server = useContext(ServerContext)

  const addComment = () => {
    axios
      .post(server + '/post/' + post._id + '/comment', { message: message })
      .then(function (response) {
        console.log(response.data)

        setMessage('')
        getPost()
      })
      .catch(function (err) {
        console.log(err, 'post add')
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
    </div>
  )
}

export default AddComment
