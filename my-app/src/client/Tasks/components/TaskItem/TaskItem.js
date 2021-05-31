const TaskItem = ({title,reward,imageUrl}) => {
  return (
    <>
       <p>{title}</p>
      <p>Reward {reward}</p>
      <img src={imageUrl} alt={title} />
      </>
   );
}
 
export default TaskItem;