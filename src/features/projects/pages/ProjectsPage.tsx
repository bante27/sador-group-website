import React from 'react';
import ProjectGrid from '../components/ProjectGrid';

export function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <ProjectGrid />
    </div>
  );
}

export default ProjectsPage;
