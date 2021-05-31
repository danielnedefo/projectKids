import React from 'react'
import CardMember from '../CardMember/CardMember'
import style from './CardList.module.scss'
const CardList = ({ contactsTeam }) => {
  const contactArr = contactsTeam
  return (
    <ul className={style.list}>
      <CardMember contactsTeam={contactsTeam}/>
    </ul>
   );
}
 
export default CardList;