import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { task } from '../../../redux/tasks/task-selectors'
import TaskCard from './TaskCard/TaskCards'
import TaskAdd from './TaskAdd/TaskAdd'
const Task = () => {
  const state = useSelector(task)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    setTasks(state)
  },[tasks,state])
  return (<>
    <TaskAdd/>
    <ul>
      <TaskCard cards={tasks} />
      </ul>
  </>  );
    }
     
export default Task;