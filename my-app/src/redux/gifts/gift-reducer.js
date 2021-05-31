import { createReducer } from '@reduxjs/toolkit'
import giftActions from './gift-actions'
import {combineReducers} from 'redux'
import taskActions from '../tasks/task-actions'
const getGifts = createReducer([], {
  [giftActions.getGiftsSuc]: (_, { payload }) => payload.ruGifts,
})
const buyGifts = createReducer([], {
  [giftActions.buyGiftsSuc]:(_,{payload}) => payload
})

const error = createReducer(null, {
  [giftActions.getGiftsError]: (_, { payload }) => payload,
  [giftActions.buyGiftsError]:(_,{payload}) => payload
})
const planedRewards = createReducer(0, {
  [taskActions.patchSingleTaskSuccess]:(_,{payload}) => payload.updatedWeekPlannedRewards
})
const rootreducer = combineReducers({
  getGifts,
  buyGifts,
  error,
  planedRewards
})
export default rootreducer