import React from 'react'
import About from './About'
import Navbar from './Navbar'
import Home from './home'
import { Route, Routes  } from "react-router-dom";

const App = () => {
  return (
    <>
        <Navbar/>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
          
    </>
  )
}

export default App
