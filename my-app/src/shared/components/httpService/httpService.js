import axios from 'axios'
axios.defaults.baseURL = "https://kidslike-v1-backend.goit.global"

//register,login,logout,create task
const postSmth = async (endpoint, params) => {
  try {
    const data = await axios.post(endpoint, params)
    return data
  } catch (error) {
    throw error
  }
}
//Add task to provided days,Add task to provided days,Mark task as completed/uncompleted,Buy gift
const patchSmth = async (endpoint, params) => {
   try {
    const  data  = await axios.patch(endpoint, params)
    return data
  } catch (error) {
    throw error
  }
}
//Google authentication,get gifts,get all user info 
const getSmth = async (endpoint, params) => {
   try {
    const  data  = await axios.get(endpoint, params)
    return data
  } catch (error) {
    throw error
  }
}
//delete smth 
const deleteSmth = async(endpoint, params) => {
   try {
    const  data  = await axios.delete(endpoint, params)
    return data
  } catch (error) {
    throw error
  }
}
export default {
  postSmth,
  patchSmth,
  getSmth,
  deleteSmth
}
