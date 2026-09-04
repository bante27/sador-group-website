import React from 'react';

export function LogoCloud({ logos }: { logos: { name: string; url: string }[] }) {
    return (
        <div className="py-12 bg-gray-50 my-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Trusted by industry leaders worldwide</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {logos.map((logo, idx) => (
                        <span key={idx} className="text-lg font-bold text-gray-400">{logo.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogoCloud;
