import React from 'react'
import { NavBar } from '../../Components/Navbar/NavBar'
import { Outlet } from 'react-router-dom'


export const Home = () => {
  return (
    <div >
        <NavBar/>
        <Outlet />
        <h1>Footer</h1>
    </div>
  )
}
