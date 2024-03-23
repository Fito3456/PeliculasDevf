import React from 'react'
import { NavBar } from '../../Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'


export const Home = () => {
  return (
    <div >
        <NavBar/>
        <Outlet />
        <Footer/>
    </div>
  )
}
