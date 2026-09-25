import React from 'react';

interface ProjectGalleryProps {
    screenshots?: string[];
    projectName: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshots, projectName }) => {
    if (!screenshots || screenshots.length === 0) return null;

    return (
        <div className="space-y-6 my-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Screenshots & Architecture
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((src, index) => (
                    <div
                        key={index}
                        className={`rounded-lg overflow-hidden border border-zinc-200 bg-white shadow-sm ${index === 0 && screenshots.length > 1 ? 'md:col-span-2' : ''
                            }`}
                    >
                        <img
                            src={src}
                            alt={`${projectName} screenshot ${index + 1}`}
                            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;
