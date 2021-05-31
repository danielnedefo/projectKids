import {useState} from 'react'
import ButtonSubmitDays from '../ButtonSubmitForResponsedDays/ButtonSubmitDays'
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem'
const CheckboxesForDays = ({ days, id }) => {
  const [indexes, setindexes] = useState({})
  const handleIndex = (idx, active) => {
    // console.log(idx,active)
    // setindexes([...indexes, idx])
    // console.log(indexes)
    setindexes({...indexes,[idx]:active})
  }
  // const handleChange = ({ target }) => {
  //     const {checked} = target
  //     console.log()
  //   return !checked
  // }
  const inputForDays = days.map(({ date, isActive }, index) => {
    return (
        <li key={index}  >
        <CheckBoxItem date={date} isActive={isActive} index={index} handleIndex={handleIndex} />
      </li>
    )
  }
  
  )

  return (
    <ul>
      {inputForDays}
      <ButtonSubmitDays id={id} index={indexes}/>
    </ul>
   );
}
 
export default CheckboxesForDays;