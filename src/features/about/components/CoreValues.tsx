import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { ShieldCheck, Zap, Lightbulb, Users, Globe, Lock } from 'lucide-react';

const coreValues = [
    {
        title: 'Uncompromising Excellence',
        description: 'We adhere to the highest standards of engineering and corporate governance in every solution we deploy.',
        icon: ShieldCheck,
    },
    {
        title: 'Radical Innovation',
        description: 'Pioneering next-generation AI and enterprise frameworks to stay ahead of dynamic market demands.',
        icon: Zap,
    },
    {
        title: 'Strategic Vision',
        description: 'Long-term value creation prioritizing scalability, sustainability, and technological leadership.',
        icon: Lightbulb,
    },
    {
        title: 'Collaborative Ecosystem',
        description: 'Empowering cross-functional synergies across our subsidiary companies to deliver holistic value.',
        icon: Users,
    },
    {
        title: 'Global Impact',
        description: 'Designing solutions that scale effortlessly across international markets and diverse industries.',
        icon: Globe,
    },
    {
        title: 'Security & Trust',
        description: 'Maintaining rigorous data integrity and enterprise-grade security protocols across all operations.',
        icon: Lock,
    },
];

export const CoreValues: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            revealOnScroll(
                containerRef.current,
                '.value-card',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 sm:py-24 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3 block">Foundational Pillars</span>
                    <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight mb-4">Core Values</h2>
                    <p className="text-zinc-600 font-light text-base leading-relaxed">
                        The guiding principles that dictate our engineering culture, corporate relationships, and product evolution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreValues.map((val, idx) => {
                        const Icon = val.icon;
                        return (
                            <div
                                key={idx}
                                className="value-card bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 mb-6">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">{val.title}</h3>
                                    <p className="text-zinc-600 font-light text-sm leading-relaxed">{val.description}</p>
                                </div>
                                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-400">
                                    <span>PRINCIPLE 0{idx + 1}</span>
                                    <span className="w-2 h-2 rounded-full bg-emerald-600/60" />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CoreValues;
