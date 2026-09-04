import React from 'react';

export function ProjectsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-black mb-4 text-white">Sador Group Projects & Portfolio</h1>
            <p className="text-slate-300 mb-12">Showcasing verified corporate implementations and technology deployments.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Cloud Infrastructure Migration</h3>
                    <p className="text-slate-300 text-sm mb-4">Enterprise cloud migration and zero-downtime architecture for regional partners.</p>
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full">Cloud / DevOps</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">AI-Driven Analytics Platform</h3>
                    <p className="text-slate-300 text-sm mb-4">Real-time business intelligence and data visualization dashboard.</p>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full">AI & Analytics</span>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;