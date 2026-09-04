import React from 'react';

export function JobCard() {
    return (
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2">Job Title</h3>
            <p className="text-gray-600 mb-4">Location • Department</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">Apply Now</button>
        </div>
    );
}

export default JobCard;
