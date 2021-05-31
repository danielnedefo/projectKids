import TaskHook from '../../../../shared/components/hooks/taskTabHook'
import TaskItem from '../../../../client/Tasks/components/TaskItem/TaskItem'
import Checkboxes from '../../../../client/Tasks/components/CheckboxesForDone/Checkboxes'
const Monday = () => {
  const dayNumber = 0
  const Tasks = TaskHook()
  const findActive = Tasks.filter(({ days }) => {
    const day = days[dayNumber]
    const { isActive } = day
    return isActive
  })
  const renderTasks = findActive.map(({ _id, title, reward, imageUrl,days },index) =>
    <li key={index}>
      <TaskItem title={title} reward={reward} imageUrl={imageUrl} />
      <Checkboxes day={dayNumber} days={days} id={_id}/>
      </li>
  )
  return (
    <>
  {renderTasks}
      </>
   );
}
 
export default Monday;