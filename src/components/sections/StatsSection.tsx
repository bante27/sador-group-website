import React from 'react';

export function StatsSection({ stats }: { stats: { label: string; value: string }[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 max-w-7xl mx-auto px-6">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}

export default StatsSection;
