import taskActions from './task-actions'
import httpService from '../../shared/components/httpService/httpService'
import endpoints from '../../shared/components/httpService/endpoints/enpoints'

export const createTask = datatask => async dispatch => {
  dispatch(taskActions.createTaskRequest())
  try {
    const { data } = await httpService.postSmth(endpoints.postTask, datatask)
    dispatch(taskActions.createTaskSuccess(data))
    console.log(data)
  } catch (error) {
    dispatch(taskActions.createTaskError(error))
  }
}

export const patchActiveTasks = tasks => async dispatch => {
  dispatch(taskActions.patchActiveTasksRequest())
  try {
    const { data } = await httpService.patchSmth(endpoints.patchActiveTasks, tasks)
    dispatch(taskActions.patchActiveTasksSuccess(data))
  } catch (error) {
    dispatch(taskActions.patchSingleTaskError(error))
  }
}

export const patchTaskToProvidedDay = (taskId,Data) => async dispatch => {
  dispatch(taskActions.patchSingleTaskRequest())
  try {
    const { data } = await httpService.patchSmth(endpoints.patchSingleActive(taskId),Data)
    dispatch(taskActions.patchSingleTaskSuccess(data))
    console.log(data)
    localStorage.setItem('pointsPlaned',data.updatedWeekPlannedRewards)
  } catch (error) {
    dispatch(taskActions.patchSingleTaskError(error))
  }
}

export const switchCompeteTasks = (taskId,Data) => async dispatch => {
  dispatch(taskActions.switchTaskCompletedRequest())
  try {
    const { data } = await httpService.patchSmth(endpoints.switchTask(taskId),Data)
    dispatch(taskActions.switchTaskCompletedSuccess(data))
    console.log(data)
  } catch (error) {
    dispatch(taskActions.switchTaskCompletedError(error))
  }
}