import { useEffect, useState } from 'react'
import AwardCheckBox from '../AwardChekBox/AwardCheckBox'
import { useDispatch,useSelector, shallowEqual } from 'react-redux'
import AwardItem from '../AwardItems/AwardItems'
import {gifts} from '../../../redux/gifts/gifts-selector'
import { getGifts,buyGifts } from '../../../redux/gifts/gift-operations'
const MainAwardPage = () => {
  const [indexesAwards, setindexesAwards] = useState([])
  const dispatch = useDispatch()
  const allGifts = useSelector(gifts,shallowEqual)
  console.log(allGifts)
  useEffect(() => {
    dispatch(getGifts())
  }, [])
  const submitToBuyGifts = (e) => {
    e.preventDefault()
    dispatch(buyGifts({giftIds:indexesAwards}))
  }
  const handleChange = (id) => {
    setindexesAwards([...indexesAwards, id])
  }
  console.log(indexesAwards)
  const renderPrizes = allGifts.map(({ title, price, id, imageUrl, isSelected }) =>
    <li key={id}>
      < AwardItem title={title} price={price} imageUrl={imageUrl} />
      <AwardCheckBox id={id} isSelected={isSelected} handleChange={handleChange}/>
    </li>  )
  return (
    <>
      {renderPrizes}
      <button type="submit" onSubmit={submitToBuyGifts}>Подтвердить</button>
    </>
   );
}
 
export default MainAwardPage;