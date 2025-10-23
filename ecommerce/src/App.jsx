import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Landing_page/Navbar'
import Home from './Landing_page/Home'
import About from './Landing_page/About'
import Product from './Landing_page/product'
import Cart from './Landing_page/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/product' element = {<Product/>}></Route>
      <Route path='/cart' element = {<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
