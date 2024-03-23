import React from 'react'
import { Card } from '../Card/Card'
import styles from './CardConteiner.module.css'


export const CardConteiner = ({movies, setShowDetails, setMovie}) => {
  return (
    <>
    <div className={styles.CardConteiner}>
     {
      movies.map((e, i)=> <Card movie={e} key={i} setShowDetails={setShowDetails} setMovie={setMovie}/>)
     }
    </div>

    </>
  )
}
