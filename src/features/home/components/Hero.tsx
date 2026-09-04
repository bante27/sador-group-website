import React from 'react';
import { Link } from 'react-router-dom';
import heroBgImage from '../../../assets/images/image.png';

// Reusable data for stats to keep the component clean and maintainable
const STATS_ITEMS = [
    { value: '23+', label: 'Innovative Products', highlight: true },
    { value: 'Multiple', label: 'Tech Businesses', highlight: false },
    { value: '100%', label: 'Scalable Architecture', highlight: true },
    { value: 'Global', label: 'Corporate Presence', highlight: false },
];

export function Hero() {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-center text-white pt-32 pb-24 lg:pt-40 lg:pb-32"
            style={{ backgroundImage: `url(${heroBgImage})` }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-slate-950/90 pointer-events-none"></div>

            {/* Background Decorative Glow Elements (Golden Theme) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#AA8C2C]/10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Responsive Container */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col items-center text-center">

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-[#D4AF37]/10">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                        Sador Group Technology Ecosystem
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-normal tracking-tight leading-[1.15] text-white">
                        Driving Innovation & Excellence Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C]">Sador Group</span>
                    </h1>

                    {/* Sub-headline / Paragraph */}
                    <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
                        Building a modern technology and business conglomerate with over 23+ advanced products and solutions shaping the future of digital enterprise.
                    </p>

                    {/* CTA Buttons with Expanding Width on Hover at the Same Place */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">

                        {/* 1. Explore Products Button (Wides on Hover at the same place) */}
                        <Link
                            to="/products"
                            className="group relative overflow-hidden w-full sm:w-[280px] sm:hover:w-[420px] h-[65px] px-6 rounded-xl bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA8C2C] text-black font-bold text-base shadow-xl shadow-[#D4AF37]/25 transition-all duration-500 ease-in-out flex items-center justify-center mx-auto"
                        >
                            {/* Default Text */}
                            <span className="absolute flex items-center gap-3 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full whitespace-nowrap">
                                Explore Products
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>

                            {/* Hover Description Text */}
                            <span className="absolute inset-0 flex items-center justify-center px-4 text-xs sm:text-sm font-bold text-black transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-center">
                                Discover 23+ innovative digital solutions & advanced enterprise architectures
                            </span>
                        </Link>

                        {/* 2. Our Companies Button (Wides on Hover at the same place) */}
                        <Link
                            to="/companies"
                            className="group relative overflow-hidden w-full sm:w-[280px] sm:hover:w-[420px] h-[65px] px-6 rounded-xl bg-black border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-base shadow-xl shadow-black/25 hover:bg-[#D4AF37]/10 transition-all duration-500 ease-in-out flex items-center justify-center mx-auto"
                        >
                            {/* Default Text */}
                            <span className="absolute flex items-center gap-3 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-full whitespace-nowrap">
                                Our Companies
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>

                            {/* Hover Description Text */}
                            <span className="absolute inset-0 flex items-center justify-center px-4 text-xs sm:text-sm font-bold text-[#D4AF37] transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-center">
                                Explore our global subsidiary tech businesses driving world-class excellence
                            </span>
                        </Link>

                    </div>
                </div>

            </div>

            {/* Key Metrics / Highlights Bar with Fade-out Mask */}
            <div className="max-w-full mx-auto mt-20 relative z-10 overflow-hidden"
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
                    {/* First Map Set */}
                    {STATS_ITEMS.map((stat, index) => (
                        <div key={`stat-1-${index}`} className="flex flex-col items-center flex-shrink-0 px-8">
                            <span className={`text-3xl lg:text-4xl font-extrabold ${stat.highlight ? 'text-[#D4AF37]' : 'text-white'}`}>
                                {stat.value}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{stat.label}</span>
                        </div>
                    ))}

                    {/* Duplicate Set for Seamless Infinite Loop Illusion */}
                    {STATS_ITEMS.map((stat, index) => (
                        <div key={`stat-2-${index}`} className="flex flex-col items-center flex-shrink-0 px-8">
                            <span className={`text-3xl lg:text-4xl font-extrabold ${stat.highlight ? 'text-[#D4AF37]' : 'text-white'}`}>
                                {stat.value}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;