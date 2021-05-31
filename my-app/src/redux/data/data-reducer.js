import { createReducer } from '@reduxjs/toolkit'
import AuthActions from '../auth/auth-actions'

const date = createReducer([], {
  [AuthActions.registerSuccess]: (_, { payload }) => [payload.week.startWeekDate,payload.week.endWeekDate],
  [AuthActions.loginSuccess]: (_, { payload }) => [payload.week.startWeekDate,payload.week.endWeekDate],
  [AuthActions.getCurrentUserSuccess]: (_, { payload }) => [payload.week.startWeekDate,payload.week.endWeekDate],
})

export default date