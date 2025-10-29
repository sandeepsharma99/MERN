import React from 'react';

const ProductCard = () => {
  const handleToggle = (e) => {
    const btn = e.target;
    // Use ternary operator to toggle text and classes
    btn.innerText === '+'
      ? (btn.innerText = '-', btn.classList.replace('btn-primary', 'btn-error'))
      : (btn.innerText = '+', btn.classList.replace('btn-error', 'btn-primary'));
  };

  return (
    <div className="card bg-base-100 w-80 shadow-md">
      <div className="card-body">
        <h2 className="card-title">Product Name</h2>
        <p>Product description goes here.</p>
        <div className="card-actions justify-end">
          <button onClick={handleToggle} className="btn btn-primary">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
