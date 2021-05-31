// import { v3 } from 'uuid'
import useForm from '../../../../shared/components/hooks/useForm'
import initialState from './initialState'
import { useDispatch } from 'react-redux'
import { createTask } from '../../../../redux/tasks/task-operations'
import TaskAddForm from '../TaskAddForm/TaskAddForm' 
const TaskAdd = () => {
  const dispatch = useDispatch()
  // const labelName = v3()
  // const labelCount = v3()
  const [formData, setDataForm, handleChange] = useForm(initialState)
  const handleTaskSubmit = e => {
    e.preventDefault()
    dispatch(createTask(formData))
    setDataForm('')
  }
  return (
    <TaskAddForm handleTaskSubmit={handleTaskSubmit} handleChange={handleChange} formData={formData}/>
   );
}
 
export default TaskAdd;