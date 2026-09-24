import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Service } from '../types/service.types';

interface ServiceItemProps {
    service: Service;
    index: number;
    onSelect?: (service: Service) => void;
    isExpanded?: boolean;
}

export function ServiceItem({ service, index, onSelect, isExpanded = false }: ServiceItemProps) {
    const expandRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!expandRef.current) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(expandRef.current, { height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 });
            return;
        }

        if (isExpanded) {
            gsap.fromTo(
                expandRef.current,
                { height: 0, opacity: 0, y: -8 },
                { height: 'auto', opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
            );
        } else {
            gsap.to(expandRef.current, {
                height: 0,
                opacity: 0,
                y: -8,
                duration: 0.4,
                ease: 'power3.inOut',
            });
        }
    }, [isExpanded]);

    return (
        <div ref={itemRef} className={`transition-colors duration-500 ${isExpanded ? 'bg-white/80 shadow-sm' : ''}`}>
            <button
                type="button"
                onClick={() => onSelect?.(service)}
                aria-expanded={isExpanded}
                aria-controls={`service-details-${service.id}`}
                className="w-full text-left py-10 sm:py-12 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center focus:outline-none cursor-pointer group"
            >
                {/* Number */}
                <div className="lg:col-span-1">
                    <span className={`font-mono text-base tracking-widest font-semibold transition-colors duration-300 ${isExpanded ? 'text-[#059669]' : 'text-[#475569]'}`}>
                        {service.number}
                    </span>
                </div>

                {/* Title & Category */}
                <div className="lg:col-span-4">
                    <h3 className={`text-2xl sm:text-3xl font-medium tracking-tight mb-2 transition-colors duration-300 ${isExpanded ? 'text-[#0F172A]' : 'text-[#0F172A]'}`}>
                        {service.title}
                    </h3>
                    {service.category && (
                        <div className="font-mono text-xs tracking-widest text-[#059669] uppercase font-semibold">
                            {service.category}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed max-w-xl">
                        {service.description}
                    </p>
                </div>

                {/* Action / Explore */}
                <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <span className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${isExpanded ? 'text-[#059669]' : 'text-[#059669] group-hover:text-[#0F172A]'}`}>
                        <span>{isExpanded ? 'Collapse' : 'Explore'}</span>
                        <span className="text-lg">{isExpanded ? '↓' : '↗'}</span>
                    </span>
                </div>
            </button>

            {/* Mobile Video Strip when Expanded */}
            {isExpanded && (
                <div className="block lg:hidden px-4 sm:px-6 pb-6">
                    <div className="w-full h-48 rounded-lg overflow-hidden shadow-inner bg-black">
                        <video
                            src="/Support Service.mp4"
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}

            {/* Expandable Section */}
            {service.capabilities && service.capabilities.length > 0 && (
                <div
                    id={`service-details-${service.id}`}
                    ref={expandRef}
                    style={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    className="bg-[#F4F7F5] px-6 sm:px-12 py-10 border-t border-[#CBD5E1]"
                >
                    <div className="max-w-5xl">
                        <div className="font-mono text-xs tracking-widest text-[#059669] uppercase font-bold mb-6">
                            CAPABILITIES & SPECIFICATIONS
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.capabilities.map((cap, idx) => (
                                <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#CBD5E1] shadow-sm">
                                    <span className="font-mono text-xs text-[#059669] mt-0.5 font-semibold">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-[#0F172A] font-medium leading-snug">{cap}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServiceItem;
