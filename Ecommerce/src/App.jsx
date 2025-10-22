import React from 'react'
import Home from './Landing_page/Home'
import Navbar from './Landing_page/Navbar'
import { Route, Routes  } from  "react-router-dom";
import About from './Landing_page/About'
import Cart from './Landing_page/Cart'
import Product from './Landing_page/product';
import { CartProvider } from './context/CartContext';



const App = () => {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/product" element = {<Product/>}/>
      <Route path="/cart" element = {<Cart/>}/>
    </Routes>
  
    </>
  )
}

export default App
