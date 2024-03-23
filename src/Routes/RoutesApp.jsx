import React from 'react'
import {Routes, Route, Navigate} from  "react-router-dom";
import { Home } from '../Screens/Home/Home';
import { NowPlaying } from '../Screens/NowPlaying/NowPlaying';
import { Popular } from '../Screens/Popular/Popular';
import { TopRelated } from '../Screens/TopRelated/TopRelated';
import { Upcomnig } from '../Screens/Upcoming/Upcomnig';
import { Search } from '../Screens/Search/Search';


export const RoutesApp = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'/home/now_playing'}/>} />
        <Route path='home' element={<Home/>}>
        <Route path='now_playing' element={<NowPlaying/> }/>
        <Route path='popular' element={<Popular/>}/>
        <Route path='toprelated' element={<TopRelated/>}/>
        <Route path='upcoming' element={<Upcomnig/>}/>
        <Route path='search' element={<Search/> }/>
        </Route>
        <Route path='/' element={<Navigate to={'/home/now_playing'}/>} />
    </Routes>
    
  )
}
