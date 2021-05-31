import {useState} from 'react'

const useCheckBox = (initialState) => {
  const [checked, setChecked] = useState(initialState)
  const [disable, setDisable] = useState(false)
  return [checked,setChecked,disable,setDisable]
}
 
export default useCheckBox;