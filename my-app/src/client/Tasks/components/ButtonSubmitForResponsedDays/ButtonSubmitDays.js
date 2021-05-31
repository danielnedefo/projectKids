import { useState } from 'react'
import { patchTaskToProvidedDay } from '../../../../redux/tasks/task-operations'
import { useDispatch } from 'react-redux'
const daysisActive = [false, false, false, false, false, false, false]

const ButtonSubmitDays = ({ index, id }) => {
  console.log(index)

  const dispatch = useDispatch()
  const [Days, setDays] = useState(daysisActive)
  //пустой массив и на каджой иттерации добавлять 
  const keys = Object.keys(index)
  // console.log(keys)
  // const lol = keys.flatMap(elem => elem)
  // console.log(lol)
  const myArr = new Array(7)
  for (const elem in index) {
    myArr.splice(elem,1,!index[elem])
  }
  console.log(myArr)
  // const indexFromCheckBox = index.filter((elem, idx, arr) => arr.indexOf(elem) === idx)
  // const transformArr = Days.map((elem, idx) => console.log(index[idx])
  // console.log(transformArr)
  const handleSubmit = () => {
    // setDays(() => {
    //   const daysChange = Days.map((elem, idx) => indexFromCheckBox.includes(idx) ? !elem : elem )
    //     console.log(daysChange)
    //   dispatch(patchTaskToProvidedDay(id, {
    //   days:daysChange
    //   }))
    // })
  }

  return (<>
    <button type="submit" onClick={handleSubmit}>Ок</button>
  </>  );
    }
     
export default ButtonSubmitDays;