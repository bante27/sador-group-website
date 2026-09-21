import React, { useState, useEffect, useRef } from 'react';

interface EcosystemNode {
    title: string;
    description: string;
    icon: string;
    tags: string[];
}

export function BusinessEcosystem() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.4 } // ልክ ሴክሽኑ 40% ከፊት ለፊት ሲታይ (face-to-face) motion-ው ይጀምራል
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

    const ecosystemNodes: EcosystemNode[] = [
        {
            title: 'Core Engineering & Custom Dev',
            description: 'Robust web and high-performance mobile solutions built with modern tech stack.',
            icon: '💻',
            tags: ['React', 'Angular', 'Java', '.NET']
        },
        {
            title: 'Cloud & Infrastructure',
            description: 'Scalable and secure cloud environments leveraging automated deployment pipelines.',
            icon: '☁️',
            tags: ['AWS', 'Azure', 'Terraform', 'CI/CD']
        },
        {
            title: 'Integration Hub & APIs',
            description: 'API-first architecture connecting third-party services and enterprise tools.',
            icon: '🔌',
            tags: ['REST', 'GraphQL', 'Gateways']
        },
        {
            title: 'Strategic Partners Network',
            description: 'Collaborative network of specialized tech vendors and industry experts.',
            icon: '🌐',
            tags: ['AI Modules', 'Security', 'Payments']
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 px-6 w-full bg-[#f8fafc] text-slate-900 my-0 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Platform-Mediated Network</span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900">Our Business Ecosystem</h2>
                    <p className="text-slate-600 mt-4 text-base sm:text-lg">
                        Explore our interconnected network of capabilities, technologies, and strategic partners driving future growth for Sador Group.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ecosystemNodes.map((node, index) => {
                        const isLeft = index < 2;


                        const transformStyle = isVisible
                            ? 'translate(0, 0)'
                            : 'translate(0, 40px)';

                        const desktopTransformStyle = isVisible
                            ? 'translateX(0) translateY(0)'
                            : isLeft
                                ? 'translateX(-110px) translateY(10px)'
                                : 'translateX(110px) translateY(10px)';

                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-1000 ease-out border border-slate-200 flex flex-col justify-between group hover:-translate-y-2 hover:border-amber-500"
                                style={{
                                    opacity: isVisible ? 1 : 0,

                                    transform: typeof window !== 'undefined' && window.innerWidth >= 768 ? desktopTransformStyle : transformStyle,
                                    transitionDelay: `${index * 450}ms`
                                }}
                            >
                                <div>
                                    <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300 shadow-inner">
                                        {node.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{node.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{node.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                                    {node.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}

export default BusinessEcosystem;