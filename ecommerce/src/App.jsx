import React from 'react'
import Navbar from './Landing_page/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Landing_page/Home'
import Product from './Landing_page/Product'
import About from './Landing_page/About'
import Cart from './Landing_page/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
