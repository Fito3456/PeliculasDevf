import React from 'react'
import styles from './Card.module.css';
export const Card = ({movie , setShowDetails, setMovie}) => {
  
  return (

    <div >
     <div className={styles.cards}>
     <div className={styles.card} >
       <img className={styles.tip}  onClick={()=> {setShowDetails(true); setMovie(movie)}} src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}  alt="" />
       <p className={styles.secondText}>{movie.title}</p>        
       </div>
      </div>
    </div>
  )
}
  
