import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from '../src/Routes/RoutesApp'
import '../../Style/Style.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <RoutesApp/>
  </BrowserRouter>,
)
