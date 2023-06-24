import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, BrowserRouter, Routes, Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/hotel-app/' element={<Home />}/>
          <Route path='/hotel-app/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
