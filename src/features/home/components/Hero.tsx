import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';
import heroAnimationData from '../../../assets/animations/hero-corporate.json';

const STATS_ITEMS = [
    { value: '23+', label: 'Innovative Products', highlight: true },
    { value: 'Multiple', label: 'Tech Businesses', highlight: false },
    { value: '100%', label: 'Scalable Architecture', highlight: true },
    { value: 'Global', label: 'Corporate Presence', highlight: false },
];

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const lottieRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                badgeRef.current,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.6 }
            )
                .fromTo(
                    headingRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    '-=0.4'
                )
                .fromTo(
                    descRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    '-=0.5'
                )
                .fromTo(
                    ctaRef.current,
                    { opacity: 0, y: 16 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    '-=0.4'
                )
                .fromTo(
                    lottieRef.current,
                    { opacity: 0, scale: 0.94, x: 20 },
                    { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: 'power4.out' },
                    '-=0.6'
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-[#FAF9F6] text-slate-900 pt-36 pb-24 lg:pt-44 lg:pb-32 border-b border-zinc-200"
        >
            {/* Subtle Editorial Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Responsive Container */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                    {/* Top Badge */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-emerald-800 text-xs font-mono uppercase tracking-widest font-semibold mb-8 backdrop-blur-md shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                        Sador Group Technology Ecosystem
                    </div>

                    {/* Main Headline */}
                    <h1
                        ref={headingRef}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-light tracking-tight leading-[1.1] text-slate-900"
                    >
                        Driving Innovation & Excellence Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 font-normal">Sador Group</span>
                    </h1>

                    {/* Sub-headline / Paragraph */}
                    <p
                        ref={descRef}
                        className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl"
                    >
                        Building a modern technology and business conglomerate with over 23+ advanced products and solutions shaping the future of digital enterprise.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        ref={ctaRef}
                        className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full"
                    >
                        <Link
                            to="/products"
                            className="group relative overflow-hidden w-full sm:w-[260px] h-[60px] px-6 rounded-xl bg-slate-900 text-white font-medium text-sm tracking-wider uppercase font-mono shadow-xl transition-all duration-500 ease-in-out flex items-center justify-center"
                        >
                            <span className="absolute flex items-center gap-3 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full whitespace-nowrap">
                                Explore Products
                                <span className="text-lg">→</span>
                            </span>

                            <span className="absolute inset-0 flex items-center justify-center px-4 text-xs font-mono tracking-wide text-emerald-400 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-center">
                                Discover 23+ solutions & architectures
                            </span>
                        </Link>

                        <Link
                            to="/companies"
                            className="group relative overflow-hidden w-full sm:w-[260px] h-[60px] px-6 rounded-xl bg-white border border-zinc-300 text-slate-900 font-medium text-sm tracking-wider uppercase font-mono shadow-sm hover:border-emerald-600 transition-all duration-500 ease-in-out flex items-center justify-center"
                        >
                            <span className="absolute flex items-center gap-3 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full whitespace-nowrap">
                                Our Companies
                                <span className="text-lg">→</span>
                            </span>

                            <span className="absolute inset-0 flex items-center justify-center px-4 text-xs font-mono tracking-wide text-slate-900 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-center">
                                Explore global subsidiary tech businesses
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Local Lottie Animation */}
                <div
                    ref={lottieRef}
                    className="lg:col-span-5 flex items-center justify-center w-full"
                >
                    <div className="w-full max-w-[520px] h-[400px] md:h-[480px] flex items-center justify-center">
                        <DotLottieReact
                            data={heroAnimationData}
                            loop
                            autoplay
                        />
                    </div>
                </div>

            </div>

            {/* Key Metrics Marquee */}
            <div className="max-w-full mx-auto mt-24 relative z-10 overflow-hidden"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                <style>{`
                    @keyframes customMarquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-custom-marquee {
                        display: flex;
                        width: max-content;
                        animation: customMarquee 25s linear infinite;
                    }
                `}</style>

                <div className="animate-custom-marquee items-center gap-20 md:gap-32">
                    {STATS_ITEMS.map((stat, index) => (
                        <div key={`stat-1-${index}`} className="flex flex-col items-center flex-shrink-0 px-8">
                            <span className={`text-3xl lg:text-4xl font-light font-mono ${stat.highlight ? 'text-emerald-700' : 'text-slate-900'}`}>
                                {stat.value}
                            </span>
                            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 mt-1">{stat.label}</span>
                        </div>
                    ))}

                    {STATS_ITEMS.map((stat, index) => (
                        <div key={`stat-2-${index}`} className="flex flex-col items-center flex-shrink-0 px-8">
                            <span className={`text-3xl lg:text-4xl font-light font-mono ${stat.highlight ? 'text-emerald-700' : 'text-slate-900'}`}>
                                {stat.value}
                            </span>
                            <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 mt-1">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
