import { useSelector,useCallback } from 'react-redux'
import {useState} from 'react'
import DaysNavigation from '../DaysNavigation/DayNavigation'
import Monday from '../WeekTabs/Monday/Monday'
import Tuesday from '../WeekTabs/Tuesday/Tuesday'
import Wednesday from '../WeekTabs/Wednesday/Wednesday'
import Thursday from '../WeekTabs/Thursday/Thursday'
import Friday from '../WeekTabs/Friday/Friday'
import Saturday from '../WeekTabs/Saturday/Saturday'
import Sunday from '../WeekTabs/Sunday/Sunday'
import DateSelectors from '../../../redux/data/data-selectors'
const arrForDates = []
const MainPage = () => {
  const [dayToRender, setdayToRender] = useState('')
  const data = useSelector(DateSelectors)
  const dateFunction =  arr => {
    if (arr.length > 0) {
    const [firsData,secondData] = data
    const firsDatas = firsData.split("-").slice(2,3)
    const secondDatas = secondData.split("-").slice(2, 3)
    const monthYear = firsData.slice(0, 7)
    const firstNnumber = +firsDatas.join('')
    const secondNnumber = +secondDatas.join('')
      let otherNumbers = firstNnumber
      arrForDates.push(firstNnumber)
      for (let i = 0; i < 5; i++){
      otherNumbers =otherNumbers + 1
      
      arrForDates.push(otherNumbers)
      }
      arrForDates.push(secondNnumber)
      const fullDate = arrForDates.map(data => monthYear + '-' + data)
      console.log(fullDate)
      return fullDate
    }
  }
  const todayData = () => {
    const date = new Date().toLocaleDateString()
    const arr = date.split('.')
    const [day, month, year] = arr
    const fullDate = year + "-" + month + "-" + day
    console.log(fullDate)
    return fullDate
  }
  const handleClick = ({ target }) => {
    setdayToRender(target.name)
  }

  return (<>
    <DaysNavigation handleClick={handleClick}/>
    {dayToRender === 'Monday' && <Monday />} 
    {dayToRender === 'Tuesday' && <Tuesday />}
    {dayToRender === 'Wednesday' && <Wednesday />}
    {dayToRender === 'Thursday' && <Thursday />}
    {dayToRender === 'Friday' && <Friday />}
    {dayToRender === 'Saturday' && <Saturday />}
    {dayToRender === 'Sunday' && <Sunday/>}
  </>  );
    }
     
export default MainPage;