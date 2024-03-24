import React, {useState } from 'react'
import style from './Search.module.css'
import { CardConteiner } from '../../Components/CardConteiner/CardConteiner';
import { DetailModal } from '../../Components/DetailModal/DetailModal';
import { Pagination } from '../../Components/Pagination/Pagination';
import { Loader } from '../../Components/Loader/Loader';
import { DataProvider } from '../../Utils/DataProvider';

export const Search = () => {
    const [loandig, setLoanding]= useState(false);
    const [movies, setMovies]= useState([]);
    const [movie, setMovie]= useState();
    const [page, setPage] = useState(1);
    const [maxpage, setMaxPage] = useState();
    const [showDetails, setShowDetails] = useState(false);
    const [text, setText]= useState ('')
  
  const getMovies =() =>{
    setLoanding(true)
    DataProvider.getMovieByName(page , text)
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
  const handleClink = () => {
    if(text.length >= 3) getMovies()
    else{
        alert('No exite ingresa mas caracteres')
    }

  }
  const handleKeyDown = (e) =>{
     if(e.code === 'Enter'){
        if(text.length >= 3) getMovies()
        else{
            alert('No exite ingresa mas caracteres')
        }
     }return
  }
 
    return (
      <div id={style.contenedor}>
        <div>
        <input type='text' placeholder='Ingresa un nombre' className={style.input} onKeyDown={(e) => handleKeyDown(e)}
        onChange={(e) => setText(e.target.value)} value={text} />
        <button className={style.btn} onClick={handleClink}><img className={style.imag}></img></button>
        </div>
        <h1 className={style.titulo}>Resultados:</h1>
        {
          loandig ? 
          <Loader/>
          :
          <CardConteiner className={style.cartas} movies={movies} setShowDetails={setShowDetails} setMovie={setMovie}/>
        }
          <Pagination page={page} setPage={setPage} maxPage={maxpage}/>
          <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie}/>
        </div>
  )
}