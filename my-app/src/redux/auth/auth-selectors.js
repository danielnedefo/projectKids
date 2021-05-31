const token = state => state.auth.token
const isAuthorized = state => state.auth.isAuthorized
const balance = state => state.auth.user.balance
export default {
  token,
  isAuthorized,
  balance
}