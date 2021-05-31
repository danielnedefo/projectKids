const postRegister = '/auth/register'
const postLogin = '/auth/login'
const postLogOut = '/auth/logout'
const postTask = '/task'

const getGgoogleAuth = '/auth/google'
const getGifts = '/gift'
const getUserInfo = '/user/info'

const patchActiveTasks = '/task/active'
const patchGifts = '/gift'
const patchSingleActive = (taskId) => `/task/single-active/${taskId}`
const switchTask = (taskId) => `/task/switch/${taskId}`

export default {
  postRegister,
  postLogin,
  postLogOut,
  postTask,
  getGgoogleAuth,
  getGifts,
  patchActiveTasks,
  patchSingleActive,
  switchTask,
  getUserInfo,
 patchGifts
}