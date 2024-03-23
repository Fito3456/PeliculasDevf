import React, { useEffect, useState } from 'react'
import { CardConteiner } from '../../Components/CardConteiner/CardConteiner'
import styles from './NowPlaying.module.css'
import { DataProvider } from '../../Utils/DataProvider'
import { Loader } from '../../Components/Loader/Loader'
import { Pagination } from '../../Components/Pagination/Pagination'
import { DetailModal } from '../../Components/DetailModal/DetailModal'


export const NowPlaying = () => {
  const [loandig, setLoanding]= useState(false);
  const [movies, setMovies]= useState([]);
  const [movie, setMovie]= useState();
  const [page, setPage] = useState(1);
  const [maxpage, setMaxPage] = useState();
  const [showDetails, setShowDetails] = useState(false);

const getMovies =() =>{
  setLoanding(true)
  DataProvider.getNowPlayingMovies(page)
    .then((res) =>{
      setMovies(res.results)
      setMaxPage(res.total_pages <= 500 ? res.total_pages : 500)
    })
    .catch((err)=>{
      console.log(err);
      alert("Hubo un error cargando las peliculas")
    })
    .finally(()=>{setLoanding(false)})
    
}
  useEffect(()=>{
    getMovies();
  },[page])

  return (
    <div>
      <h1 className={styles.title}>Ahora en cartelera</h1>
      {
        loandig ? 
        <Loader/>
        :
        <CardConteiner movies={movies} setShowDetails={setShowDetails} setMovie={setMovie}/>
      }
        <Pagination page={page} setPage={setPage} maxPage={maxpage}/>
        <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie}/>
      </div>
  )
}
