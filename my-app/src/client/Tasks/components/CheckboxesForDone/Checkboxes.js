import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { switchCompeteTasks } from '../../../../redux/tasks/task-operations'
const Checkboxes = ({ day, id, days, idx }) => {
  const index = id || idx
  const currentDay = days[day]
  const dispatch = useDispatch();
  // const dispatch = useDispacth()
  const { isCompleted, date } = currentDay
  console.log(date)
  const [stateCheckbox, setStateCheckbox] = useState(isCompleted)
  const [disable, setdisable] = useState(false)
  const handleChange = () => {
    setStateCheckbox(!stateCheckbox)
    setdisable(true)
    dispatch(switchCompeteTasks(index,{date:date}))
  } 
  return (
    <input  onChange={handleChange} type="checkbox" disabled={disable} checked={stateCheckbox}></input>
   );
}
 
export default Checkboxes;