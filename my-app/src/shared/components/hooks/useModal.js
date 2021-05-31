import { useState } from 'react';

const useModal = (initialState) => {
  const [showModal, setshowModal] = useState(initialState)
  const toggleModal = () => {
    setshowModal(!showModal)
  }
  return [showModal,setshowModal,toggleModal]
}
 
export default useModal;