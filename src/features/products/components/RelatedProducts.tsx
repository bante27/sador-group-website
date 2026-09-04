import React from 'react';

export function RelatedProducts() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 p-4 rounded">Related 1</div>
        <div className="border border-gray-200 p-4 rounded">Related 2</div>
      </div>
    </section>
  );
}

export default RelatedProducts;
