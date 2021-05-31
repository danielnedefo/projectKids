import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import authActions from '../auth/auth-actions'
import taskActions from './task-actions'

const tasks = createReducer([], {
  [authActions.registerSuccess]: (_, { payload }) => payload.week.tasks,
  [authActions.loginSuccess]: (_, { payload }) => payload.week.tasks,
  [authActions.logOutSuccess]: (_, __) => [],
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.week.tasks,
  [taskActions.createTaskSuccess]:(state,{payload:{id,title,days,imageUrl,reward}}) => [...state,{id,title,days,imageUrl,reward}]
})

const rootReducer = combineReducers({
  tasks
})
export default rootReducer