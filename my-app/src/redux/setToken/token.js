import axios from 'axios'
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = ''
  }
}
export default token