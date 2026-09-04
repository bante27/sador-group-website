import React from 'react';

export function VisionMission() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-600">To be a leading global enterprise transforming industries through innovation and excellence.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600">To deliver exceptional value to our customers, partners, and communities worldwide.</p>
            </div>
        </section>
    );
}

export default VisionMission;
