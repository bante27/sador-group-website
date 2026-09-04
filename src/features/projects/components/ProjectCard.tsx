import React from 'react';

export function ProjectCard() {
    return (
        <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2">Project Name</h3>
            <p className="text-gray-600">Project summary and case study.</p>
        </div>
    );
}

export default ProjectCard;
