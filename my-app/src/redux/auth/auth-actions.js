import { createAction } from '@reduxjs/toolkit'

const registerRequestt = createAction('auth/registerRequest')
const registerSuccess = createAction('auth/registerSuccess')
const registerError = createAction('auth/registerError')

const loginRequestt = createAction('auth/loginRequest')
const loginSuccess = createAction('auth/loginSuccess')
const loginError = createAction('auth/loginError')

const logOutRequest = createAction('auth/logOutRequest')
const logOutSuccess = createAction('auth/logOutSuccess')
const logOutError = createAction('auth/logOutError')

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest')
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess')
const getCurrentUserError = createAction('auth/getCurrentUserError')

const googleRequest = createAction('auth/googleRequest')
const googleSuccess = createAction('auth/googleSuccess')
const googleError = createAction('auth/googleError')

export default {
  registerRequestt,
  registerSuccess,
  registerError,
  loginRequestt,
  loginError,
  loginSuccess,
  logOutRequest, 
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  googleRequest,
  googleSuccess,
  googleError
}



