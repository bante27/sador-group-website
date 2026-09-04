import React from 'react';

export function ProductCard() {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
      <h3 className="font-bold text-xl mb-2">Product Name</h3>
      <p className="text-gray-600">Product description and details.</p>
    </div>
  );
}

export default ProductCard;
