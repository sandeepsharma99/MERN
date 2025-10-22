import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to Our Store</h1>
          <p className="mt-6 text-gray-600">Find the best products at the best prices. We have a wide selection of items for you.</p>
          <Link to="/product">
            <button className="mt-8 bg-blue-500 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home