
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from '../redux/auth/auth-reducer'
import dateReducer from '../redux/data/data-reducer'
import giftReducer from '../redux/gifts/gift-reducer'
import taskReducer from '../redux/tasks/task-reducer'
const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: {
    auth: authReducer,
    gifts: giftReducer,
    task: taskReducer,
    date:dateReducer
  },
  middleware
})
export default store