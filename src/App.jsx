import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import { Route, BrowserRouter, Routes, Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/hotel-app/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
