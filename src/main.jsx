import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './src/Routes/RoutesApp'
import '../Style.css'
import '../vercel.json'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <RoutesApp/>
  </BrowserRouter>,
)
