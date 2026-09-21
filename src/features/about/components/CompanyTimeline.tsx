import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';

const timelineEvents = [
    {
        year: '2020',
        title: 'Inception & Foundation',
        description: 'Sador Group was founded with a clear vision to bridge the gap between advanced enterprise technology and scalable business ecosystems.',
    },
    {
        year: '2021',
        title: 'Ecosystem Expansion',
        description: 'Launched our initial suite of proprietary software solutions, establishing key strategic partnerships across regional markets.',
    },
    {
        year: '2023',
        title: 'AI & Cloud Integration',
        description: 'Scaled operations to incorporate dedicated AI research divisions and enterprise cloud infrastructure management.',
    },
    {
        year: '2025+',
        title: 'Global Growth & 23+ Products',
        description: 'Achieved a robust portfolio of over 23 enterprise solutions, serving thousands of active users and expanding international footprints.',
    },
];

export const CompanyTimeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                containerRef.current,
                '.timeline-item',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 sm:py-24 bg-[#FAF9F6]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3 block">Evolutionary Milestones</span>
                    <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight mb-4">Company Timeline</h2>
                    <p className="text-zinc-600 font-light text-base leading-relaxed">
                        A chronological look at our growth, expansion, and continuous drive toward technological excellence.
                    </p>
                </div>

                <div className="relative border-l border-zinc-300 ml-4 md:ml-32 space-y-12">
                    {timelineEvents.map((item, idx) => (
                        <div key={idx} className="timeline-item relative pl-8 sm:pl-10">
                            {/* Timeline marker node */}
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-900 ring-4 ring-[#FAF9F6]" />

                            <div className="md:absolute md:-left-32 md:top-1 md:w-24 md:text-right">
                                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-500/20">
                                    {item.year}
                                </span>
                            </div>

                            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-xs">
                                <h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CompanyTimeline;
