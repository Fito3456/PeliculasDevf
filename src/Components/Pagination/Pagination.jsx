import React, { useState } from 'react'
import Style from "./Pagination.module.css"

export const Pagination = ({page, setPage, maxPage, setMaxPage}) => {
  const hadClick=(type)=>{
    if(type==='next'){
      if(actualPage < maxPage){
        setPage(page + 1)
        setActualPage (actualPage + 1)
      }
  } else if(type==='back'){
    if(page > 1){
      setPage(page - 1);
      setActualPage (actualPage -1)
    }
  }else return
}
const  handleEnter= (e)=> {
  if(e.key==="Enter"){
      if(Number(actualPage) <= maxPage){
        if(Number(actualPage)===0 ){
          setPage(1)
          setActualPage(1)
        }else{
          setPage(actualPage)
        } 
       
      }else{
        alert('Ya se paso el limite de pagina que son: ' +  maxPage )
      }
       
  }
;}

const [actualPage, setActualPage] = useState(page);

const handleChange= (e)=>{
  let valor = e.target.value.replace(/\D/g,"");
    setActualPage(valor)
}

  return (
  <div className={Style.pagination}>
       <div className={Style.Back}>
      <button className={Style.button} onClick={() => hadClick('back')}>BACK</button>  
      </div>
        <input className={Style.input} type='text' maxLength={4} value={actualPage} onChange={handleChange} onKeyDown={handleEnter}/>
        <div className={Style.Next}>
      <button className={Style.button} onClick={() => hadClick('next')}>NEXT</button>
      </div>
  </div>
  )
}
