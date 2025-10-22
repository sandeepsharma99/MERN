import React from 'react'

const Cart = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Stylish T-Shirt', price: 25.00, quantity: 2, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Running Shoes', price: 80.00, quantity: 1, image: 'https://via.placeholder.com/150' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4"/>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="text-lg">Qty: {item.quantity}</div>
              <div className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
          <div className="text-right mt-8">
            <h3 className="text-2xl font-bold">Subtotal: ${subtotal.toFixed(2)}</h3>
            <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
