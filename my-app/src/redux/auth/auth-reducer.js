import AuthActions from './auth-actions'
import {combineReducers} from 'redux'
import { createReducer } from '@reduxjs/toolkit'
const initialState = {
  email: null,
  balance: null,
  id:null
}
const user = createReducer(initialState, {
  [AuthActions.registerSuccess]: (_, { payload }) => payload.user,
  [AuthActions.loginSuccess]: (_, { payload }) => payload.user,
  [AuthActions.logOutSuccess]: (_, __) => initialState,
  [AuthActions.getCurrentUserSuccess]:(_,{payload}) => payload.user
})
const token = createReducer(null, {
  [AuthActions.registerSuccess]: (_, { payload }) => payload.token,
  [AuthActions.loginSuccess]: (_, { payload }) => payload.token,
  [AuthActions.logOutSuccess]: (_, __) => null,
})
const error = createReducer(null, {
  [AuthActions.registerError]: (_, { payload }) => payload,
  [AuthActions.loginError]: (_, { payload }) => payload,
  [AuthActions.logOutError]: (_, { payload }) => payload,
  [AuthActions.getCurrentUserError]:(_,{payload}) => payload,
})
const isAuthorized = createReducer(false, {
    [AuthActions.registerSuccess]: (_, __) =>true,
  [AuthActions.loginSuccess]: (_, __) => true,
    [AuthActions.logOutSuccess]: (_, __) => false,
  [AuthActions.getCurrentUserSuccess]:(_,{payload}) => true
})
const rootreducer = combineReducers({
  user,
  token,
  error,
  isAuthorized
})
export default rootreducer