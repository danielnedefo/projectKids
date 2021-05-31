import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from '../AuthorizationForm/Form'
import {initialState} from '../InitialStateForm/initialState'
import { register, login, googleAuth } from '../../../redux/auth/auth-operations'
import { getGifts, buyGifts } from '../../../redux/gifts/gift-operations'
import {createTask} from '../../../redux/tasks/task-operations'
export function LoginRegister() {
  const typeAction =''
  const [state, setstate] = useState(initialState)
  const [type, setType] = useState(typeAction)
  const handleChange = ({ target }) => {
    setstate({
      ...state,
      [target.name]:target.value
    })
  }
  const setActionType = type => {
    setType(type)
  }
   const dispatch = useDispatch()
  const handleSubmitRegister = e => {
    e.preventDefault()
    switch (type) {
      case 'register':
        dispatch(register(state))
        break
      case 'login':
        dispatch(login(state))
        // dispatch(getGifts())
        // dispatch(createTask({title:"task 1",reward:5}))
        // dispatch(buyGifts({giftIds:[1,2,3]}))
        break
      case 'google':
        dispatch(googleAuth(state))
        break
      default:
        return 
    }
    setstate(initialState)
  }
    return (
      <Form state={state} onSubmitRegister={handleSubmitRegister} setActionType={setActionType} handleChange={handleChange}/>
    )
}
export default LoginRegister