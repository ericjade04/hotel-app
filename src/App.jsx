import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, BrowserRouter, Routes, Link } from "react-router-dom"
import Hotel from './pages/Hotel'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/hotel-app/' element={<Home />}/>
          <Route path='/hotel-app/about' element={<About />}/>
          <Route path='/hotel-app/hotel' element={<Hotel />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
