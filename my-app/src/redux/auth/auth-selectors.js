const token = state => state.auth.token
const isAuthorized = state => state.auth.isAuthorized
export default {
  token,
  isAuthorized
}