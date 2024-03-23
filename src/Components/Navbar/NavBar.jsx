import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import styles from './Navbar.module.css'
import logo from '../../assets/Logo.png';


export const NavBar = () => {
  
  const location = useLocation();
  return (
    <>
    <div className={styles.navbar}>
      <div>
          <img className={styles.img} src={logo} alt="" />
                </div>
          <ul className={styles.NavBar}>
            <li className={styles.lista}>
                  <Link className={styles.link} to={'now_playing'} style={{color: location.pathname === '/home/now_playing' ? 'white':undefined}}>En cartelera</Link>
            </li>
            <li className={styles.lista}>
                 <Link className={styles.link} to={'popular'} style={{color: location.pathname === '/home/popular' ? 'white':undefined}}>Populares</Link>
            </li>
            <li className={styles.lista}> 
                <Link className={styles.link} to={'toprelated'} style={{color: location.pathname === '/home/toprelated' ? 'white':undefined}}>Mejor Calificados</Link>
            </li>
            <li className={styles.lista}>
                   <Link className={styles.link} to={'upcoming'} style={{color: location.pathname === '/home/upcoming' ? 'white':undefined}}>Proximamente</Link>
            </li>
            <li className={styles.lista}>
                   <Link className={styles.link} to={'search'} style={{color: location.pathname === '/home/search' ? 'white':undefined}}>Search</Link>
            </li>
          
        </ul> 
    </div>
    </>

  )
}
