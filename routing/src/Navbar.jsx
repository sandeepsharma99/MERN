import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          MyApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
