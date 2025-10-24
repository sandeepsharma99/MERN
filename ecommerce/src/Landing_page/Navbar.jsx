import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='container bg-black qq'>
        <h1>Ecommerce</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </>
  )
}

export default Navbar
