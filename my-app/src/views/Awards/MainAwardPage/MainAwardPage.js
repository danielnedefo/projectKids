import { useEffect, useState } from 'react'
import AwardCheckBox from '../AwardChekBox/AwardCheckBox'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import Modal from '../../../shared/components/Modal/Modal'
import AwardItem from '../AwardItems/AwardItems'
import giftsSelector from '../../../redux/gifts/gifts-selector'
import { getGifts, buyGifts } from '../../../redux/gifts/gift-operations'
import useModal from '../../../shared/components/hooks/useModal'
const MainAwardPage = () => {
  const [showModal,setshowModal,toggleModal] = useModal(false)
  const [indexesAwards, setindexesAwards] = useState([])
  const dispatch = useDispatch()
  const allGifts = useSelector(giftsSelector.gifts, shallowEqual)
  console.log(allGifts)
  useEffect(() => {
    dispatch(getGifts())
  }, [])
  const submitToBuyGifts = (e) => {
    e.preventDefault()
    dispatch(buyGifts({ giftIds: indexesAwards }))
    toggleModal()
  }
  const handleChange = (id) => {
    console.log(id)
    setindexesAwards([...indexesAwards, id])
  }

  const buyingGifts = allGifts.filter(({ id }) => indexesAwards.includes(id))
  console.log(buyingGifts)
  const renderBuyingGifts = buyingGifts.map(({title,price,imageUrl},index) => <li key={index}>< AwardItem title={title} price={price} imageUrl={imageUrl} /></li>)
  // console.log(indexesAwards)
  const renderPrizes = allGifts.map(({ title, price, id, imageUrl, isSelected }) =>
  <li key={id}>
      < AwardItem title={title} price={price} imageUrl={imageUrl} />
      <AwardCheckBox id={id} isSelected={isSelected} handleChange={handleChange}/>
    </li>  )
  return (
    <>
      {showModal && <Modal>
        <ul>
          {renderBuyingGifts}
          </ul>
      <button onClick={()=>toggleModal()}>Close Modal</button>
      </Modal>}
      {renderPrizes}
      <button onClick={submitToBuyGifts}>Подтвердить</button>
    </>
   );
}
 
export default MainAwardPage;