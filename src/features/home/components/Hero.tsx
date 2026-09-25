import React from 'react';
import { Link } from 'react-router-dom';

const STATS_ITEMS = [
    { value: '23+', label: 'Innovative Products', highlight: true },
    { value: 'Multiple', label: 'Tech Businesses', highlight: false },
    { value: '100%', label: 'Scalable Architecture', highlight: true },
    { value: 'Global', label: 'Corporate Presence', highlight: false },
];

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#FAF9F6] text-slate-900 pt-36 pb-24 lg:pt-44 lg:pb-32 border-b border-zinc-200">
            {/* Background Decorative Glow Elements (Emerald / Sophisticated Theme) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-2xl pointer-events-none"></div>

            {/* Responsive Container */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col items-center text-center">

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-emerald-800 text-xs font-mono uppercase tracking-widest font-semibold mb-8 backdrop-blur-md shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                        Sador Group Technology Ecosystem
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-light tracking-tight leading-[1.1] text-slate-900">
                        Driving Innovation & Excellence Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 font-normal">Sador Group</span>
                    </h1>

                    {/* Sub-headline / Paragraph */}
                    <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                        Building a modern technology and business conglomerate with over 23+ advanced products and solutions shaping the future of digital enterprise.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">

                        <Link
                            to="/products"
                            className="group relative overflow-hidden w-full sm:w-[280px] sm:hover:w-[420px] h-[65px] px-6 rounded-xl bg-slate-900 text-white font-medium text-sm tracking-wider uppercase font-mono shadow-xl transition-all duration-500 ease-in-out flex items-center justify-center mx-auto"
                        >
                            <span className="absolute flex items-center gap-3 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full whitespace-nowrap">
                                Explore Products
                                <span className="text-lg">→</span>
                            </span>

                            <span className="absolute inset-0 flex items-center justify-center px-4 text-xs font-mono tracking-wide text-emerald-400 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-center">
                                Discover 23+ innovative digital solutions & advanced enterprise architectures
                            </span>
                        </Link>

                        <Link
                            to="/companies"
                            className="group relative overflow-hidden w-full sm:w-[280px] sm:hover:w-[420px] h-[65px] px-6 rounded-xl bg-white border border-zinc-300 text-slate-900 font-medium text-sm tracking-wider uppercase font-mono shadow-sm hover:border-emerald-600 transition-all duration-500 ease-in-out flex items-center justify-center mx-auto"
                        >
                            <span className="absolute flex items-center gap-3 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full whitespace-nowrap">
                                Our Companies
                                <span className="text-lg">→</span>
                            </span>

                            <span className="absolute inset-0 flex items-center justify-center px-4 text-xs font-mono tracking-wide text-slate-900 transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-center">
                                Explore our global subsidiary tech businesses driving world-class excellence
                            </span>
                        </Link>

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
