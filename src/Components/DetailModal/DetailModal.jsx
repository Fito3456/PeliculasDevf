import React, { useEffect } from 'react'
import styles from './DetailModal.module.css'

export const DetailModal = ({show , setShowDetails, movie, setMovie}) => {
    useEffect(()=> {
        return ()=>{
            setMovie(undefined)
        }
    },[])
  return (
    <>
    {
        show && movie ?
        <div className={styles.showe}>
        <button onClick={()=> setShowDetails(false)}> Cerrar X </button>
        <h1>{movie.title}</h1>
        <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}  alt="" />
        <h2>Descripcion:</h2>
        <p>{movie.overview}</p>
        </div>
        :
        null

    }
    </>
  )
}
