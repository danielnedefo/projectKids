const DaysNavigation = ({handleClick}) => {
  
  return (
    <ul>
      <li><button onClick={handleClick} name='Monday'>Понедельник</button></li>
      <li><button onClick={handleClick} name='Tuesday'>Вторник</button></li>
      <li><button onClick={handleClick} name='Wednesday'>Середа</button></li>
      <li><button onClick={handleClick} name='Thursday'>Четвер</button></li>
      <li><button onClick={handleClick} name='Friday'>Пятница</button></li>
      <li><button onClick={handleClick} name='Saturday'>Субота</button></li>
      <li><button onClick={handleClick} name='Sunday'>Воскресенье</button></li>
   </ul>
   );
}
 
export default DaysNavigation;