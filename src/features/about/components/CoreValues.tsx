import React from 'react';

export function CoreValues() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded-lg">Integrity</div>
                <div className="border border-gray-200 p-6 rounded-lg">Innovation</div>
                <div className="border border-gray-200 p-6 rounded-lg">Excellence</div>
            </div>
        </section>
    );
}

export default CoreValues;
