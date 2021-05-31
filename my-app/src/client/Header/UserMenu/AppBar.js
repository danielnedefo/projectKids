import { NavLink } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import authSelectors from '../../../redux/auth/auth-selectors'
import { logout } from '../../../redux/auth/auth-operations'
import {useDispatch} from 'react-redux'
import styles from './AppBar.module.scss'
const AppBar = () => {
  const authorized = useSelector(authSelectors.isAuthorized, shallowEqual)
  const dispatch = useDispatch()
  return (
    <ul className={styles.list}>
      {!authorized && < li  > <NavLink className={styles.links} to="/contacts">Контакти</NavLink></li>}
      {!authorized && <li><NavLink className={styles.links} to="/auth">Авторизация </NavLink></li>}
      {authorized && <li><NavLink className={styles.links} to="/">Главная</NavLink></li>}
      {authorized && <li><NavLink className={styles.links} to="/planning">Планировать</NavLink></li>}
      {authorized && <li><NavLink className={styles.links} to="/awards">Награды</NavLink></li>}
      {authorized && < li > <NavLink className={styles.links} to="/contacts">Контакти</NavLink></li>}
      {authorized && <button onClick={()=>dispatch(logout())} type="submit" className={styles.links} >Log Out</button>}
      </ul>
    );
    }
     
export default AppBar;