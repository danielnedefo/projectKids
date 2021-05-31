import {useState} from 'react'
const CheckBoxItem = ({ date, handleIndex, isActive,index }) => {
  // console.log(isActive)
  const [stateCheckbox, setstateCheckbox] = useState(isActive)
  const handleChange = () => {
    setstateCheckbox(!stateCheckbox)
  }
  // console.log(stateCheckbox)

  return (

    <>
      <input id={date} onChange={handleChange} onClick={() => handleIndex(index,stateCheckbox)} type="checkbox" checked={stateCheckbox} />{date}
      </>
   );
}
 
export default CheckBoxItem;