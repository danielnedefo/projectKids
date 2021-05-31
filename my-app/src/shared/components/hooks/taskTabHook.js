import { useSelector } from 'react-redux'
import { task } from '../../../redux/tasks/task-selectors'

const TaskTabHook = () => {
  const Tasks = useSelector(task)
  return Tasks
}
 
export default TaskTabHook;