import React, { useEffect, useState } from 'react'
import { Loader } from '../../Components/Loader/Loader'
import { CardConteiner } from '../../Components/CardConteiner/CardConteiner'
import { DataProvider } from '../../Utils/DataProvider';
import  Styles  from './Popular.module.css'
import { Pagination } from '../../Components/Pagination/Pagination';
import { DetailModal } from '../../Components/DetailModal/DetailModal';


export const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [movie, setMovie]= useState();
  const [maxPage , setMaxPage ]=useState(1)
  const [loandig, setLoanding] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getMovies = () =>{
    DataProvider.getPopularMovies(page)
    .then(res =>{
      setMovies(res.results)
      setMaxPage(res.total_pages <= 500 ? res.total_pages : 500)
    })
    .catch((err) =>{
       alert('Hubo un error al cargar las peliculas')
    })
    .finally(() => setLoanding(false))
  }

  useEffect(() =>{
    getMovies()
  }, [page])

  return (
    <div>
      <h1 className={Styles.titulo}>Populares</h1>
      {
        loandig ? 
        <Loader/>
        :
        <CardConteiner movies={movies} setShowDetails={setShowDetails} setMovie={setMovie}/>
      }
       <Pagination maxPage={maxPage} page={page} setPage={setPage}/>
       <DetailModal show={showDetails} setShowDetails={setShowDetails} setMovie={setMovie} movie={movie}/>
      </div>

  )
}
