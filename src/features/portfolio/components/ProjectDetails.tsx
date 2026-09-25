import React from 'react';
import { Project } from '../types/project.types';
import ProjectGallery from './ProjectGallery';

interface ProjectDetailsProps {
    project: Project;
    onBack: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
    const displayClient = project.clientConfidential ? 'Confidential Client' : (project.client || 'Not Disclosed');

    return (
        <div className="py-12 px-6 md:px-12 max-w-5xl mx-auto animate-fade-in">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-zinc-600 hover:text-slate-900 mb-12 transition-colors"
            >
                <span>←</span> Back to Projects
            </button>

            <div className="border-t border-zinc-300 pt-8 mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-700">
                    PROJECT CASE STUDY / {project.number}
                </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-12">
                {project.name}
            </h1>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-zinc-200 mb-12">
                <div>
                    <span className="block text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                        Client / Company
                    </span>
                    <span className="text-base text-slate-900 font-medium">
                        {displayClient}
                    </span>
                </div>

                <div>
                    <span className="block text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                        Industry
                    </span>
                    <span className="text-base text-slate-900 font-medium">
                        {project.industry}
                    </span>
                </div>

                <div>
                    <span className="block text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                        Year
                    </span>
                    <span className="text-base text-slate-900 font-medium">
                        {project.year || '2026'}
                    </span>
                </div>
            </div>

            {/* Description */}
            <div className="mb-12">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                    Overview
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed font-normal">
                    {project.description}
                </p>
            </div>

            {/* Technologies */}
            <div className="mb-12">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                    Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 bg-zinc-100 text-zinc-800 text-xs font-mono rounded border border-zinc-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Screenshots Gallery */}
            <ProjectGallery screenshots={project.screenshots} projectName={project.name} />

            {/* Results / Impact */}
            {project.results && project.results.length > 0 && (
                <div className="my-12 p-8 bg-zinc-50 border-l-2 border-emerald-600 rounded-r-lg">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-800 mb-4">
                        Results / Impact
                    </h3>
                    <ul className="space-y-3">
                        {project.results.map((result, idx) => (
                            <li key={idx} className="text-slate-700 text-base">
                                {result}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Project Link */}
            {project.projectUrl && (
                <div className="pt-8 border-t border-zinc-200 flex items-center justify-between">
                    <span className="text-sm font-mono text-zinc-500">External Verification</span>
                    <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded hover:bg-emerald-700 transition-colors"
                    >
                        Visit Project ↗
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
