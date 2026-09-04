import React from 'react';

export function ProductScreenshots() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Product Screenshots</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-400">Screenshot 1</div>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-400">Screenshot 2</div>
            </div>
        </section>
    );
}

export default ProductScreenshots;
