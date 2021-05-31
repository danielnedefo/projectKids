import {useState} from 'react'
const CheckBoxItem = ({ date, handleIndex, isActive,checked }) => {
  // console.log(checked)
  const [stateCheckbox, setstateCheckbox] = useState(isActive)
  const handleChange = () => {
    setstateCheckbox(!stateCheckbox)
  }
  // // console.log(stateCheckbox)

  return (

    <>
      <input id={date} onChange={handleChange} onClick={handleIndex} checked={stateCheckbox} type="checkbox" />{date}
      </>
   );
}
 
export default CheckBoxItem;