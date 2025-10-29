import React, { useState } from 'react';
import product from '../Product';

const Product = () => {
  // Access products safely (depends on your data structure)
  const products = product[0].products
  const [count,setCount]=useState(0);
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {products.map((item, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={item.images }
              alt={item.title }
              className="h-64 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title || "Product Title"}</h2>
            <p>{item.description || "No description available."}</p>
            <div className="card-actions justify-end">
              
               {count === 0 ? (
            <button
              className="btn btn-primary"
              onClick={() => setCount(1)}
            >
              Buy Now
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                className="btn btn-sm btn-error"
                onClick={() => setCount(count - 1)}
              >
                –
              </button>
              <span className="text-lg font-bold">{count}</span>
              <button
                className="btn btn-sm btn-success"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;


