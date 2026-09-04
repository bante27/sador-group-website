import React from 'react';

export function FeaturedProducts() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg shadow-sm">Product 1</div>
                <div className="border border-gray-200 p-6 rounded-lg shadow-sm">Product 2</div>
                <div className="border border-gray-200 p-6 rounded-lg shadow-sm">Product 3</div>
            </div>
        </section>
    );
}

export default FeaturedProducts;

