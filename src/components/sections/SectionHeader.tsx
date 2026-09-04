import React from 'react';

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
    );
}

export default SectionHeader;
