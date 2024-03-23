import React, { useEffect, useState } from 'react'
import { Loader } from '../../Components/Loader/Loader';
import { CardConteiner } from '../../Components/CardConteiner/CardConteiner';
import { Pagination } from '../../Components/Pagination/Pagination';
import Styles from './Upcomnig.module.css'
import { DataProvider } from '../../Utils/DataProvider';
import { DetailModal } from '../../Components/DetailModal/DetailModal';

export const Upcomnig = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [movie, setMovie]= useState();
  const [maxPage , setMaxPage ]=useState(1)
  const [loandig, setLoanding] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getMovies = () =>{
    DataProvider.getNowPlayingMovies(page)
    .then(res =>{
      setMovies(res.results)
      setMaxPage(res.total_pages <= 500 ? res.total_pages : 500)
    })
    .catch((err) =>{
      console.log(err)
       alert('Hubo un error al cargar las peliculas')
    })
    .finally(() => setLoanding(false))
  }

  useEffect(() =>{
    getMovies()
  }, [page])
  return (
    <div>
    <h1 className={Styles.titulo}>Proximamente</h1>
    {
      loandig ? 
      <Loader/>
      :
      <CardConteiner movies={movies} setShowDetails={setShowDetails} setMovie={setMovie}/>
    }
     <Pagination maxPage={maxPage} page={page} setPage={setPage}/>
     <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie}/>
    </div>
  )
}
