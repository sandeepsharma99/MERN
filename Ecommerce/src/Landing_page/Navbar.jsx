import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navLinkClasses = "text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out";
  const { cartCount } = useCart();
  const activeLinkClasses = {
    color: '#3B82F6', // blue-500
    fontWeight: '600',
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link className="text-3xl font-bold text-blue-600 hover:text-blue-500" to="/">
          Ecommerce
        </Link>
        <div className="flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => navLinkClasses} style={({ isActive }) => isActive ? activeLinkClasses : undefined}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => navLinkClasses} style={({ isActive }) => isActive ? activeLinkClasses : undefined}>
            About
          </NavLink>
          <NavLink to="/product" className={({ isActive }) => navLinkClasses} style={_ => _.isActive ? activeLinkClasses : undefined}>
            Products
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `${navLinkClasses} flex items-center relative`} style={({ isActive }) => isActive ? activeLinkClasses : undefined}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="ml-2">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
