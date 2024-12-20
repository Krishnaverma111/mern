import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Services from './Components/Services'
import Signup from './Components/Signup'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />


  </Routes>
  <Footer/>

  </BrowserRouter>
  )
}
