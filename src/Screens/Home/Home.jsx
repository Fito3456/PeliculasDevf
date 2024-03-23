import React from 'react'
import { NavBar } from '../../Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div >
        <NavBar/>
        <Outlet />
    </div>
  )
}
