import { useState, useEffect, useRef } from 'react';

// Reusable TechIcon Component using Devicon CDN
interface TechIconProps {
    name: string;
    size?: string;
    className?: string;
}

export function TechIcon({ name, size = 'text-4xl', className = '' }: TechIconProps) {
    // Format name to match Devicon class conventions
    const formatTechName = (tech: string) => {
        const lower = tech.toLowerCase();
        if (lower === '.net') return 'dot-net';
        if (lower === 'node.js') return 'nodejs';
        return lower;
    };

    return (
        <i className={`devicon-${formatTechName(name)}-plain colored ${size} ${className}`}></i>
    );
}

export function CompanyIntro() {
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const technologies = [
        { name: 'Angular' },
        { name: 'React' },
        { name: 'Java' },
        { name: '.NET' },
        { name: 'JavaScript' },
        { name: 'Node.js' },
        { name: 'PHP' },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-24 bg-slate-50">
            <div
                className="absolute inset-0 pointer-events-none bg-black"
                style={{
                    clipPath: 'polygon(0 0, 72% 0, 30% 100%, 0 100%)'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 relative flex items-center justify-center h-[380px] sm:h-[450px]">
                        <div className="absolute z-20 w-28 h-28 bg-gradient-to-br from-amber-400 to-amber-600 text-black rounded-full flex flex-col items-center justify-center shadow-2xl font-bold tracking-wider border-4 border-black">
                            <span className="text-xl">Sador</span>
                            <span className="text-[10px] text-white uppercase font-semibold">Tech Stack</span>
                        </div>

                        <div
                            className={`absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full ${isVisible ? 'animate-spin' : ''}`}
                            style={{ animationDuration: '35s', animationPlayState: isPaused ? 'paused' : 'running' }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {technologies.map((tech, index) => {
                                const angle = (index / technologies.length) * 360;
                                const rad = (angle * Math.PI) / 180;
                                const radius = 180;
                                const x = Math.cos(rad) * radius;
                                const y = Math.sin(rad) * radius;

                                return (
                                    <div
                                        key={index}
                                        className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 -ml-8 -mt-8 flex flex-col items-center justify-center bg-transparent transition-all duration-300 hover:scale-110 cursor-pointer group"
                                        style={{
                                            transform: `translate(${x}px, ${y}px)`,
                                        }}
                                    >
                                        <div
                                            className={`flex flex-col items-center justify-center ${isVisible ? 'animate-spin' : ''}`}
                                            style={{ animationDuration: '35s', animationDirection: 'reverse', animationPlayState: isPaused ? 'paused' : 'running' }}
                                        >
                                            <div className="w-14 h-14 flex items-center justify-center drop-shadow-md">
                                                <TechIcon name={tech.name} size="text-5xl" />
                                            </div>
                                            <span className="text-[11px] font-medium text-white mt-1 px-1.5 py-0.5 text-center bg-black/90 rounded shadow">
                                                {tech.name}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div
                        className="lg:col-start-7 lg:col-span-6 flex flex-col items-start text-left pl-11 sm:pl-24"
                        style={{
                            display: 'flex',
                            flexDirection: 'column-reverse',
                            gap: '1.5rem',
                            transform: 'rotate(-9deg)',
                            transformOrigin: 'left center'
                        }}
                    >
                        <div
                            className="transition-all duration-1000 ease-out transform w-full"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
                                transitionDelay: '500ms'
                            }}
                        >
                            <a
                                href="/technologies"
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-black hover:to-amber-500 text-black hover:text-white font-semibold rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105"
                            >
                                Explore Our Capabilities
                                <span className="text-xl">→</span>
                            </a>
                        </div>
                        <div
                            className="transition-all duration-1000 ease-out transform w-full"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
                                transitionDelay: '900ms'
                            }}
                        >
                            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                                At Sador Group, we engineer robust web and high-performance mobile solutions. We turn complex challenges into seamless digital experiences.
                            </p>
                        </div>
                        <div
                            className="transition-all duration-1000 ease-out transform w-full"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
                                transitionDelay: '2000ms'
                            }}
                        >
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight">
                                Empowering Business Through <span className="text-amber-600">Advanced Tech Stack.</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyIntro;