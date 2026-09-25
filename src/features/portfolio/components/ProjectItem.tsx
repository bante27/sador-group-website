import React, { useState, useRef, useLayoutEffect } from 'react';
import { Project } from '../types/project.types';
import gsap from 'gsap';

interface ProjectItemProps {
    project: Project;
    onSelect: (project: Project) => void;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            if (isHovered) {
                gsap.to(numberRef.current, { x: 6, duration: 0.3, ease: 'power3.out' });
                gsap.to(titleRef.current, { x: 8, duration: 0.3, ease: 'power3.out' });
                gsap.to(arrowRef.current, { x: 8, y: -4, rotation: 45, duration: 0.3, ease: 'power3.out' });
                gsap.to(dividerRef.current, { backgroundColor: '#059669', height: '2px', duration: 0.3 });
                if (previewRef.current && project.screenshots && project.screenshots.length > 0) {
                    gsap.to(previewRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' });
                }
            } else {
                gsap.to(numberRef.current, { x: 0, duration: 0.3, ease: 'power3.out' });
                gsap.to(titleRef.current, { x: 0, duration: 0.3, ease: 'power3.out' });
                gsap.to(arrowRef.current, { x: 0, y: 0, rotation: 0, duration: 0.3, ease: 'power3.out' });
                gsap.to(dividerRef.current, { backgroundColor: '#D4D4D8', height: '1px', duration: 0.3 });
                if (previewRef.current) {
                    gsap.to(previewRef.current, { opacity: 0, scale: 0.94, y: 10, duration: 0.3, ease: 'power3.out' });
                }
            }
        }, itemRef);

        return () => ctx.revert();
    }, [isHovered, project.screenshots]);

    const displayClient = project.clientConfidential ? 'Confidential Client' : (project.client || project.industry);

    return (
        <div ref={itemRef} className="relative group">
            <div
                onClick={() => onSelect(project)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="py-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.name}`}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelect(project);
                    }
                }}
            >
                {/* Number & Title & Industry */}
                <div className="flex items-start md:items-center gap-6 md:gap-12 flex-1">
                    <span
                        ref={numberRef}
                        className="font-mono text-sm md:text-base text-zinc-500 font-medium w-8"
                    >
                        {project.number}
                    </span>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
                        <h3
                            ref={titleRef}
                            className="text-2xl md:text-3xl font-light text-slate-900 tracking-tight"
                        >
                            {project.name}
                        </h3>

                        <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 md:ml-auto">
                            {displayClient}
                        </span>
                    </div>
                </div>

                {/* Description & Arrow */}
                <div className="flex items-center gap-8 md:w-1/3 justify-between md:justify-end">
                    <p className="text-sm text-zinc-600 line-clamp-1 hidden lg:block max-w-xs">
                        {project.description}
                    </p>

                    <div
                        ref={arrowRef}
                        className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-slate-900 bg-white/50 shrink-0"
                    >
                        <span className="text-lg">→</span>
                    </div>
                </div>
            </div>

            {/* Floating Image Preview on Desktop */}
            {project.screenshots && project.screenshots.length > 0 && (
                <div
                    ref={previewRef}
                    className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-72 h-44 rounded-lg overflow-hidden shadow-2xl pointer-events-none z-20 opacity-0 scale-94 translate-y-2 border border-zinc-200 bg-white"
                >
                    <img
                        src={project.screenshots[0]}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Divider */}
            <div ref={dividerRef} className="w-full h-[1px] bg-zinc-300 transition-colors" />
        </div>
    );
};

export default ProjectItem;
