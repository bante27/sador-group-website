import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sampleJobs } from '../data/jobs';
import { ArrowRight, Mail } from 'lucide-react';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';

gsap.registerPlugin(ScrollTrigger);

export function OpenPositions() {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                containerRef.current,
                '.job-card',
                { opacity: 0, y: 30, scale: 0.98 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 },
                'top 75%'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="positions" className="py-28 bg-white text-[#0F172A] px-6 lg:px-20 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#0F172A]">
                        Current Opportunities
                    </h2>
                    <p className="text-slate-700 text-lg leading-relaxed">
                        Explore active openings across our technology and business ecosystem.
                    </p>
                </div>

                {sampleJobs.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                        {sampleJobs.map((job) => (
                            <div
                                key={job.id}
                                className="job-card p-8 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full border border-emerald-200 font-medium">
                                            {job.department}
                                        </span>
                                        <span className="text-slate-500 text-sm">• {job.location}</span>
                                        <span className="text-slate-500 text-sm">• {job.employmentType}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-emerald-700 transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-slate-700 text-sm max-w-2xl">{job.description}</p>
                                </div>
                                <a
                                    href={job.applicationUrl || '#contact'}
                                    className="px-6 py-3 bg-[#0F172A] text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm flex items-center gap-2"
                                >
                                    <span>View Position</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center p-12 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6 text-emerald-600">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">No Open Positions Right Now</h3>
                        <p className="text-slate-700 leading-relaxed mb-8">
                            We are not currently listing open positions, but we are always interested in connecting with talented people who want to contribute to meaningful technology and business solutions.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F172A] text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
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
