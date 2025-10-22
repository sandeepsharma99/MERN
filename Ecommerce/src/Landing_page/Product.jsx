import React from 'react'

const products = [
  // Sample data to showcase the layout
  { id: 1, name: 'Stylish T-Shirt', price: '$25.00', image: 'https://via.placeholder.com/300x400' },
  { id: 2, name: 'Comfortable Jeans', price: '$50.00', image: 'https://via.placeholder.com/300x400' },
  { id: 3, name: 'Running Shoes', price: '$80.00', image: 'https://via.placeholder.com/300x400' },
  { id: 4, name: 'Classic Watch', price: '$150.00', image: 'https://via.placeholder.com/300x400' },
  { id: 5, name: 'Leather Backpack', price: '$75.00', image: 'https://via.placeholder.com/300x400' },
  { id: 6, name: 'Sunglasses', price: '$40.00', image: 'https://via.placeholder.com/300x400' },
];

const Product = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
              <img src={product.image} alt={product.name} className="w-full h-80 object-cover"/>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-700 text-lg mt-2">{product.price}</p>
                <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 opacity-0 group-hover:opacity-100">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
