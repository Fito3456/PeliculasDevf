import React from 'react'
import styles from './Footer.module.css'
import {Link, useLocation} from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();
  return (
    
    <footer className="footer">
    <div className="logo"></div>
    <div className={styles.card}>
    <h1 className={styles.titulos}>Sectiones de la pagina: </h1>
      <ul className={styles.uli}>
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
</ul>
<h2 className={styles.tituloDos}>Medio de contacto: </h2>
<div className={styles.main}>
  <div className={styles.up}>
    <a className={styles.link2} href='https://www.instagram.com/fito3456_d/'>
    <button className={styles.card1}>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0,0,256,256" width="30px" height="30px" fill-rule="nonzero" className={styles.instagram}><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></svg>
    </button>
    </a>

  </div>
  <div className={styles.down}>
  <a className={styles.link2} href='https://github.com/Fito3456?tab=repositories'>
    <button className={styles.card3}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" className={styles.github}>    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
    </button>
    </a>
    <a  className={styles.link2}href='https://discord.com/channels/@me/945170221885435916'>
    <button className={styles.card4}>
      <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={styles.discord}><path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path></svg>
    </button>
    </a>
  </div>
</div>
<div className={styles.contenedorInformacion}>
  <h3>Informacion del creador:</h3>
  <p className={styles.flechas}>--------</p>
  <p className={styles.flechas}>---------</p>
  <p className={styles.flechas}>--------</p>
  <p className={styles.flechasArriba}>|</p>
  <p className={styles.flechasArriba}>|</p>
  <p className={styles.flechasAbajo}>|</p>
  <p className={styles.flechasAbajo}>|</p>
  <p className={styles.informacion}>Nombre: Renato Lopez</p>
  <p className={styles.informacion}>Ubicacion: Chile</p>
  <p className={styles.informacion}>Telefono: +56957238804</p>
  
</div>
      </div>
      
  </footer>
  )
}
