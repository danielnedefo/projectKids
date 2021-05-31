import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { switchCompeteTasks } from '../../../../redux/tasks/task-operations'
const Checkboxes = ({ day, id, days }) => {
  const currentDay = days[day]
  // const dispatch = useDispacth()
  const { isCompleted, date } = currentDay
  const [stateCheckbox, setStateCheckbox] = useState(isCompleted)
  const [disable, setdisable] = useState(false)
  const handleChange = () => {
    setStateCheckbox(!stateCheckbox)
    setdisable(true)
    // dispatch(switchCompeteTasks(id,date))
  } 
  return (
    <input  onChange={handleChange} type="checkbox" disabled={disable} checked={stateCheckbox}></input>
   );
}
 
export default Checkboxes;