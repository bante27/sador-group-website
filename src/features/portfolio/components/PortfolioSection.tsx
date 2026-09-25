import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types/project.types';
import PortfolioHero from './PortfolioHero';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import PortfolioCTA from './PortfolioCTA';

export const PortfolioSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-[#18181B] selection:bg-emerald-600 selection:text-white">
            <PortfolioHero />

            {selectedProject ? (
                <ProjectDetails
                    project={selectedProject}
                    onBack={() => setSelectedProject(null)}
                />
            ) : (
                <ProjectList
                    projects={projects}
                    onSelectProject={(project) => setSelectedProject(project)}
                />
            )}

            <PortfolioCTA />
        </div>
    );
};

export default PortfolioSection;
