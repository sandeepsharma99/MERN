import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      {title && <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>}
      <div className="text-gray-700 space-y-2">
        {children}
      </div>
    </div>
  );
};

export default Card;