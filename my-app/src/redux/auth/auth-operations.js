import endpoints from '../../shared/components/httpService/endpoints/enpoints'
import httpService from '../../shared/components/httpService/httpService'
import authActions from './auth-actions'
import tokenOperations from '../setToken/token'


export const register = registerData => async dispatch => {
  dispatch(authActions.registerRequestt())
  try {
    const { data } = await httpService.postSmth(endpoints.postRegister, registerData)
    tokenOperations.set(data.token)
    localStorage.setItem('token',data.token)
    dispatch(authActions.registerSuccess(data))
    console.log(data)
  } catch (error) {
    dispatch(authActions.registerError(error))
  }
}
export const login = loginData => async dispatch => {
  dispatch(authActions.loginRequestt())
  try {
    const { data } = await httpService.postSmth(endpoints.postLogin, loginData)
    tokenOperations.set(data.token)
    dispatch(authActions.loginSuccess(data))
        console.log(data)
  } catch (error) {
    dispatch(authActions.loginError(error))
  }
}
export const googleAuth = googleData => async dispatch => {
  dispatch(authActions.googleRequest())
  try {
    const { data } = await httpService.getSmth(endpoints.getGgoogleAuth, googleData)
    dispatch(authActions.googleSuccess(data))
  } catch (error) {
    dispatch(authActions.googleError(error))
  }
}
export const logout = () => async dispatch => {
  dispatch(authActions.logOutRequest())
  try {
    const { data } = await httpService.postSmth(endpoints.postLogOut)
    tokenOperations.unset()
    dispatch(authActions.logOutSuccess(data))
  } catch (error) {
    dispatch(authActions.logOutError(error))
  }
}
export const currenUser = () => async (dispatch, getState) => {
  const tokenStorage = localStorage.getItem('token')
  if (!tokenStorage) {
    return
  }
  tokenOperations.set(tokenStorage)
  dispatch(authActions.getCurrentUserRequest())
  try {
    const { data } = await httpService.getSmth(endpoints.getUserInfo)
    dispatch(authActions.getCurrentUserSuccess(data))
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error))
  }
}