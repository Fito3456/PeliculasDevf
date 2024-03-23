import React from 'react'
import  styles from './Loader.module.css'

export const Loader = () => {
  return (
  
    <div>
        <div id={styles.page}></div>
    <div id={styles.container}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div id={styles.h3}>loading</div>
    </div>
</div>
  )
}
