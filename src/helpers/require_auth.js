import axios from 'axios'
import { authHeader } from './auth_header'

function requireAuth() {
  const userToken = JSON.parse(localStorage.getItem('user'))

  if (userToken) {
    authHeader()

    axios
      .get('http://localhost:5000/auth', {})
      .then(function (response) {
        localStorage.setItem('user_info', JSON.stringify(response.data.user))
      })
      .catch(function (err) {
        if (localStorage.getItem('user_info') !== null) {
          localStorage.removeItem('user_info')
        }
      })
  }
}

export default requireAuth
