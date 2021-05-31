import React, { useState,useEffect} from 'react'
import contact from './db.json'
import CardList from '../CardList/CardList'
import styles from './Contacts.module.scss'
export default function Contacts() {

  const [team, setTeam] = useState([])
  useEffect(() => {
    setTeam(contact)
  }, [])

  return (
    <>
      <h2 className={styles.header}>Наша команда</h2>
      <p className={styles.subtitle}>Всегда готовы к новым вызовам!</p>
      <CardList contactsTeam={team} />
      </>
    )
}