import TaskItem from '../TaskItem/TaskItem'
import { switchCompeteTasks } from '../../../../redux/tasks/task-operations'
import CheckboxesForDays from '../CheckboxesForDays/CheckboxesForDays'

const TaskCard = ({ cards }) => {
  console.log(cards)
  const cardElements = cards.map(({ title, imageUrl, reward, days, _id }) =>
    <li key={_id}>
      <TaskItem title={title} reward={reward} imageUrl={imageUrl}/>      
        <CheckboxesForDays  id={_id} days={days} />
    </li>);
  
  return (
  <>
    {cardElements}
    </>
   );
}
 
export default TaskCard;