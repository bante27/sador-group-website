import React from 'react';

interface ProductScreenshotsProps {
    screenshots?: string[];
}

export function ProductScreenshots({ screenshots }: ProductScreenshotsProps) {
    if (!screenshots || screenshots.length === 0) {
        return null;
    }

    return (
        <section className="mb-16 py-12 border-t border-zinc-200">
            <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-[#71717A] mb-8">Screenshots & Interface</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((screenshot, idx) => (
                    <div key={idx} className="overflow-hidden aspect-[16/10] bg-zinc-100 border border-zinc-200 shadow-sm">
                        <img 
                            src={screenshot} 
                            alt={`Product Screenshot ${idx + 1}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductScreenshots;
