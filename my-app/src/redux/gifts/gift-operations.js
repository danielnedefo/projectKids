import giftActions from './gift-actions'
import httpService from '../../shared/components/httpService/httpService'
import endpoints from '../../shared/components/httpService/endpoints/enpoints'
import tokenOperations from '../setToken/token'

export const getGifts = () => async dispatch => {
  const tokenStorage = localStorage.getItem('token')
  tokenOperations.set(tokenStorage)
  dispatch(giftActions.getGiftsReq())
  try {
    const { data } = await httpService.getSmth(endpoints.getGifts)
    dispatch(giftActions.getGiftsSuc(data))
  } catch (error) {
    dispatch(giftActions.getGiftsError(error))
  }
}
export const buyGifts = sum => async dispatch => {
  dispatch(giftActions.buyGiftsReq())
  try {
    const { data } = await httpService.patchSmth(endpoints.patchGifts, sum)
    dispatch(giftActions.buyGiftsSuc(data))
  } catch (error) {
    dispatch(giftActions.buyGiftsError(error))
  }
}