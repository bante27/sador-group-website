import React from 'react';
import { sampleJobs } from '../data/jobs';
import { ArrowRight, Mail } from 'lucide-react';

export function OpenPositions() {
    return (
        <section id="positions" className="py-28 bg-[#18181B] text-[#FAF9F6] px-6 border-t border-zinc-800/60">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 mb-3 block">
                        Open Positions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
                        Current Opportunities
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Explore active openings across our technology and business ecosystem.
                    </p>
                </div>

                {sampleJobs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                        {sampleJobs.map((job) => (
                            <div key={job.id} className="p-8 rounded-2xl bg-[#121214] border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-emerald-950 text-emerald-400 text-xs font-mono rounded-full border border-emerald-800/40">
                                            {job.department}
                                        </span>
                                        <span className="text-zinc-400 text-sm">• {job.location}</span>
                                        <span className="text-zinc-400 text-sm">• {job.employmentType}</span>
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-2">{job.title}</h3>
                                    <p className="text-zinc-400 text-sm max-w-2xl">{job.description}</p>
                                </div>
                                <a
                                    href={job.applicationUrl || '#contact'}
                                    className="px-6 py-3 bg-[#FAF9F6] text-[#18181B] font-medium text-sm rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap"
                                >
                                    View Position →
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center p-12 rounded-2xl bg-[#121214] border border-zinc-800/80">
                        <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center mx-auto mb-6 text-emerald-400">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-medium mb-3 text-white">No Open Positions Right Now</h3>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            We are not currently listing open positions, but we are always interested in connecting with talented people who want to contribute to meaningful technology and business solutions.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF9F6] text-[#18181B] font-medium rounded-xl hover:bg-zinc-200 transition-colors"
                        >
                            <span>Send Your CV</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}

export default OpenPositions;
