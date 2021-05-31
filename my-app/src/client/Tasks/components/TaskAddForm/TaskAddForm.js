const TaskAddForm = ({handleTaskSubmit,handleChange,formData}) => {
  return (
    <form type="submit" onSubmit={handleTaskSubmit}>
      <label htmlFor='namex'>Введите название таска</label>
      <input onChange={handleChange} value={formData.name} name="title" id='namex' type="text" />
      <label htmlFor="count">Введите количество балов</label>
      <input onChange={handleChange} value={formData.count} name="reward" id="count" type="text" />
      <button type="submit">Add</button>
    </form>
   );
}
 
export default TaskAddForm;