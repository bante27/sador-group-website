import React from 'react';

export function CompanyTimeline() {
    return (
        <section className="py-16 px-6 max-w-7xl mx-auto bg-gray-50 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Company Timeline</h2>
            <div className="space-y-4 max-w-xl mx-auto">
                <div className="border-l-4 border-blue-600 pl-4">
                    <div className="font-bold">2015 - Foundation</div>
                    <div className="text-sm text-gray-600">Sador Group was established with a clear vision.</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                    <div className="font-bold">2020 - Global Expansion</div>
                    <div className="text-sm text-gray-600">Expanded operations to international markets.</div>
                </div>
            </div>
        </section>
    );
}

export default CompanyTimeline;
