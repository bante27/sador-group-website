import React from 'react';

interface InsightImageProps {
    src?: string;
    alt: string;
    className?: string;
}

export const InsightImage: React.FC<InsightImageProps> = ({ src, alt, className = '' }) => {
    if (!src) {
        return (
            <div className={`bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-400 font-mono text-xs uppercase tracking-widest ${className}`}>
                SADOR GROUP ARCHIVE
            </div>
        );
    }

    return (
        <div className={`overflow-hidden rounded-lg border border-zinc-200 bg-white ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
            />
        </div>
    );
};

export default InsightImage;
