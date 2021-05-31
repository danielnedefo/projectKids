import { createAction } from '@reduxjs/toolkit'
const createTaskRequest = createAction('task/taskRequest')
const createTaskSuccess = createAction('task/taskSuccess')
const createTaskError = createAction('task/taskError')

const patchActiveTasksRequest = createAction('task/patchActiveTasksRequest')
const patchActiveTasksSuccess = createAction('task/patchActiveTasksSuccess')
const patchActiveTasksError = createAction('task/patchActiveTasksError')

const patchSingleTaskRequest = createAction('task/patchSingleTaskRequest')
const patchSingleTaskSuccess = createAction('task/patchSingleTaskSuccess') 
const patchSingleTaskError = createAction('task/patchSingleTaskError')

const switchTaskCompletedRequest = createAction('task/switchTaskCompletedRequest')
const switchTaskCompletedSuccess = createAction('task/switchTaskCompletedSuccess')
const switchTaskCompletedError = createAction('task/switchTaskCompletedError')

export default {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  patchActiveTasksRequest,
  patchActiveTasksSuccess,
  patchActiveTasksError,
  patchSingleTaskRequest,
  patchSingleTaskSuccess,
  patchSingleTaskError,
  switchTaskCompletedRequest,
  switchTaskCompletedSuccess,
  switchTaskCompletedError
}
