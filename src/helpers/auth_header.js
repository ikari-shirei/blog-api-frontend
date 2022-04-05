const axios = require('axios').default

export function authHeader() {
  if (localStorage.getItem('user') !== null) {
    axios.defaults.headers = {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')),
    }
  }
}
