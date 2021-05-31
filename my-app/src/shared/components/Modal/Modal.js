import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'
const modalRoot = document.getElementById('modal-root')
const Modal = ({children}) => {
  return createPortal(
    <div className={styles.Backdrop}>
      <div className={styles.Content}>{children}</div>
    </div>,modalRoot);
}
 
export default Modal;