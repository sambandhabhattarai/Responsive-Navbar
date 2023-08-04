import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import Encrypt from './Components/Encrpt'
import React from 'react'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Contact/>
    <Encrypt/>
    </>
    
  )
}

export default App


