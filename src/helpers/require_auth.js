import axios from 'axios'
import { authHeader } from './auth_header'

function requireAuth() {
  const userToken = JSON.parse(localStorage.getItem('user'))

  const server =
    'https://ikari-shirei-blog-api.glitch.me' || 'http://localhost:5000'

  if (userToken) {
    authHeader()

    axios
      .get(server + '/auth', {})
      .then(function (response) {
        localStorage.setItem('user_info', JSON.stringify(response.data.user))
      })
      .catch(function () {
        if (localStorage.getItem('user_info') || localStorage.getItem('user')) {
          localStorage.removeItem('user_info')
          localStorage.removeItem('user')
        }
      })
  }
}

export default requireAuth
