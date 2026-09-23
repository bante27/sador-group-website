import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Compass, ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';

const typewriterPhrases = [
    'Digital Experiences',
    'Smart Solutions',
    'Modern Technology',
    'Business Growth'
];

export const AboutHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const typewriterRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    const { currentText } = useTypewriter({
        phrases: typewriterPhrases,
        typingSpeed: 75,
        deletingSpeed: 40,
        pauseAfterTyping: 1800,
        pauseBeforeDeleting: 500
    });

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            gsap.set([leftPanelRef.current, rightPanelRef.current], { display: 'none' });
            gsap.set(
                [eyebrowRef.current, titleRef.current, typewriterRef.current, descriptionRef.current, ctaRef.current, cardsRef.current],
                { opacity: 1, y: 0 }
            );
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.inOut' }
            });
            gsap.set(leftPanelRef.current, { xPercent: 0 });
            gsap.set(rightPanelRef.current, { xPercent: 0 });
            gsap.set(eyebrowRef.current, { opacity: 0, y: 20 });
            gsap.set(titleRef.current, { opacity: 0, y: 70 });
            gsap.set(typewriterRef.current, { opacity: 0, y: 30 });
            gsap.set(descriptionRef.current, { opacity: 0, y: 30 });
            gsap.set(ctaRef.current, { opacity: 0, y: 20 });
            gsap.set(cardsRef.current, { opacity: 0, y: 40 });

            tl.to({}, { duration: 0.25 })
                .to(leftPanelRef.current, {
                    xPercent: -100,
                    duration: 1.0,
                    ease: 'power3.inOut'
                }, '+=0.1')
                .to(rightPanelRef.current, {
                    xPercent: 100,
                    duration: 1.0,
                    ease: 'power3.inOut'
                }, '<') // Simultaneous split
                .to(eyebrowRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                }, '-=0.6')
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.3')
                .to(typewriterRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.4')
                .to(descriptionRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.4')
                .to(ctaRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                }, '-=0.3')
                .to(cardsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.3');
            revealOnScroll(
                cardsRef.current,
                '.about-hero-card',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.0, stagger: 0.2, ease: 'power3.out' },
                'top 85%'
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-zinc-950 text-white overflow-x-hidden min-h-[90vh] flex items-center"
        >
            <div className="absolute inset-0 z-30 pointer-events-none flex overflow-hidden">
                <div
                    ref={leftPanelRef}
                    className="w-1/2 h-full bg-zinc-900 border-r border-zinc-800 will-change-transform shadow-2xl"
                />
                <div
                    ref={rightPanelRef}
                    className="w-1/2 h-full bg-zinc-900 border-l border-zinc-800 will-change-transform shadow-2xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1
                        ref={titleRef}
                        className="mx-auto mb-5 max-w-3xl text-center font-semibold leading-[1.00] tracking-[-0.03em] text-white opacity-0 will-change-transform text-[clamp(1.8rem,4vw,3.5rem)]"
                    >
                        Building the future{" "}
                        <span className="font-normal italic text-zinc-400">
                            through technology.
                        </span>
                    </h1>

                    <div
                        ref={typewriterRef}
                        className="text-[clamp(1.25rem,2.2vw,2rem)] font-light text-zinc-300 mb-8 tracking-tight h-10 flex items-center justify-center opacity-0 will-change-transform"
                    >
                        <span>We create&nbsp;</span>
                        <span className="text-emerald-400 font-normal inline-flex items-center">
                            {currentText}
                            <span className="inline-block w-0.5 h-6 bg-emerald-400 ml-1 animate-pulse" />
                        </span>
                    </div>
                    <p
                        ref={descriptionRef}
                        className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 will-change-transform"
                    >
                        Sador Group is a multi-disciplinary technology conglomerate and enterprise ecosystem dedicated to pioneering high-impact software solutions, AI systems, and scalable corporate ventures.
                    </p>
                    <div
                        ref={ctaRef}
                        className="flex flex-wrap items-center justify-center gap-4 opacity-0 will-change-transform"
                    >
                        <a
                            href="#ecosystem"
                            className="px-7 py-3.5 rounded-xl bg-emerald-600 text-white font-medium text-[14px] sm:text-[16px] hover:bg-emerald-500 transition-colors shadow-sm inline-flex items-center gap-2 group"
                        >
                            Explore Our Business
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/contact"
                            className="px-7 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-medium text-[14px] sm:text-[16px] hover:bg-zinc-800 transition-colors shadow-sm inline-flex items-center gap-2"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-0 will-change-transform"
                >
                    <div className="about-hero-card bg-white border border-zinc-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-emerald-600 mb-6 shadow-xs">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Precision Vision</h3>
                            <p className="text-zinc-600 font-light text-sm leading-relaxed">
                                Architecting scalable digital ecosystems engineered for next-generation enterprise dominance and sustainable value creation.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                            <span>PILLAR 01</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        </div>
                    </div>

                    <div className="about-hero-card bg-white border border-zinc-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-emerald-600 mb-6 shadow-xs">
                                <Compass className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Global Strategy</h3>
                            <p className="text-zinc-600 font-light text-sm leading-relaxed">
                                Expanding international horizons through rigorous corporate governance, data-driven frameworks, and transformative technologies.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                            <span>PILLAR 02</span>
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutHero;
