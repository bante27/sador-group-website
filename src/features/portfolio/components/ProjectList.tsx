import React, { useState, useLayoutEffect, useRef, useMemo } from 'react';
import { Project } from '../types/project.types';
import ProjectItem from './ProjectItem';
import ProjectFilters from './ProjectFilters';
import gsap from 'gsap';

interface ProjectListProps {
    projects: Project[];
    onSelectProject: (project: Project) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onSelectProject }) => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const listRef = useRef<HTMLDivElement>(null);

    const categories = useMemo(() => {
        const set = new Set<string>();
        set.add('All');
        projects.forEach((p) => {
            if (p.category) set.add(p.category);
        });
        return Array.from(set);
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return projects;
        return projects.filter((p) => p.category === activeCategory);
    }, [projects, activeCategory]);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.project-row-item',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: 'power3.out',
                }
            );
        }, listRef);

        return () => ctx.revert();
    }, [activeCategory]);

    return (
        <section ref={listRef} className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
            <ProjectFilters
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <div className="flex flex-col">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-row-item">
                        <ProjectItem project={project} onSelect={onSelectProject} />
                    </div>
                ))}

                {filteredProjects.length === 0 && (
                    <div className="py-16 text-center text-zinc-500 font-mono text-sm">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectList;
