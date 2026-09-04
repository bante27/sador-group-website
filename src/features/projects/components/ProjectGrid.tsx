import React from 'react';
import ProjectCard from './ProjectCard';

export function ProjectGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

export default ProjectGrid;
