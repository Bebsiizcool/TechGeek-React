import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Sign from './page/Sign'
import Home from './page/Home'
import './App.css'

function App() {


  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/>
     </Routes>
     </div>
    </>
  )
}

export default App
