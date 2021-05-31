import {useState} from 'react'
import ButtonSubmitDays from '../ButtonSubmitForResponsedDays/ButtonSubmitDays'
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem'
const daysisActive = Array(7).fill(false)
const CheckboxesForDays = ({ days, id, idx }) => {
  const index = id || idx
  const [indexes, setindexes] = useState(daysisActive)
  const handleIndex = (idx, active) => {
    console.log(active)
    const newInexes = [...indexes]
    newInexes[idx] = !newInexes[idx];
    setindexes(newInexes)
  }
  // console.log(indexes)
  const inputForDays = days.map(({ date, isActive }, index) => {
    return (
        <li key={index}  >
        <CheckBoxItem date={date} isActive={isActive} checked={daysisActive[index]} handleIndex={()=>handleIndex(index,isActive)} />
      </li>
    )
  })
  return (
    <ul>
      {inputForDays}
      <ButtonSubmitDays id={index} index={indexes}/>
    </ul>
   );
}
 
export default CheckboxesForDays;