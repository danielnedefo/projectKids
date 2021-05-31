import { createAction } from '@reduxjs/toolkit'

const getGiftsReq = createAction('gifts/getGiftsReq')
const getGiftsSuc = createAction('gifts/getGiftsSuc')
const getGiftsError = createAction('gifts/getGiftsError')

const buyGiftsReq = createAction('gifts/buyGiftsReq')
const buyGiftsSuc = createAction('gifts/buyGiftsSuc')
const buyGiftsError = createAction('gifts/buyGiftsError')

export default {
  getGiftsReq,
  getGiftsSuc,
  getGiftsError,
  buyGiftsReq,
  buyGiftsSuc,
  buyGiftsError
}