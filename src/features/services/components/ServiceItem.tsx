import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Service } from '../types/service.types';

interface ServiceItemProps {
    service: Service;
    index: number;
    onSelect?: (service: Service) => void;
    isExpanded?: boolean;
}

export function ServiceItem({ service, index, onSelect, isExpanded = false }: ServiceItemProps) {
    const [hovered, setHovered] = useState(false);
    const rowRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const expandRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setHovered(true);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        gsap.to(numberRef.current, {
            x: 5,
            color: '#059669',
            duration: 0.3,
            ease: 'power3.out',
        });
        gsap.to(titleRef.current, {
            x: 7,
            duration: 0.3,
            ease: 'power3.out',
        });
        gsap.to(arrowRef.current, {
            x: 6,
            y: -2,
            rotation: -8,
            duration: 0.3,
            ease: 'power3.out',
        });
        gsap.to(lineRef.current, {
            scaleX: 1,
            transformOrigin: 'left',
            duration: 0.3,
            ease: 'power3.out',
        });
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        gsap.to(numberRef.current, {
            x: 0,
            color: '#71717A',
            duration: 0.3,
            ease: 'power3.out',
        });
        gsap.to(titleRef.current, {
            x: 0,
            duration: 0.3,
            ease: 'power3.out',
        });
        gsap.to(arrowRef.current, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.3,
            ease: 'power3.out',
        });
        gsap.to(lineRef.current, {
            scaleX: 0,
            transformOrigin: 'left',
            duration: 0.3,
            ease: 'power3.out',
        });
    };

    useEffect(() => {
        if (!expandRef.current) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(expandRef.current, { height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 });
            return;
        }

        if (isExpanded) {
            gsap.fromTo(
                expandRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
            );
        } else {
            gsap.to(expandRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power3.out',
            });
        }
    }, [isExpanded]);

    return (
        <div ref={rowRef} className="border-b border-[#D4D4D8] relative overflow-hidden">
            <button
                type="button"
                onClick={() => onSelect?.(service)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-expanded={isExpanded}
                aria-controls={`service-details-${service.id}`}
                className="w-full text-left py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start focus:outline-none focus:ring-2 focus:ring-[#059669] focus:ring-offset-2 rounded-none cursor-pointer group transition-colors"
            >
                {/* Number */}
                <div className="lg:col-span-1">
                    <span
                        ref={numberRef}
                        className="font-mono text-sm tracking-widest text-[#71717A] inline-block transition-colors"
                    >
                        {service.number}
                    </span>
                </div>

                {/* Title & Category */}
                <div className="lg:col-span-4">
                    <h3
                        ref={titleRef}
                        className="text-xl sm:text-2xl font-medium text-[#18181B] tracking-tight mb-2 inline-block transition-transform"
                    >
                        {service.title}
                    </h3>
                    {service.category && (
                        <div className="font-mono text-[11px] tracking-widest text-[#71717A] uppercase">
                            {service.category}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-[#71717A] font-light leading-relaxed max-w-xl">
                        {service.description}
                    </p>
                </div>

                {/* Action / Explore */}
                <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#18181B] group-hover:text-[#059669] transition-colors">
                        <span>Explore</span>
                        <span ref={arrowRef} className="inline-block transition-transform">
                            ↗
                        </span>
                    </span>
                </div>
            </button>

            {/* Emerald Animated Divider on Hover */}
            <div
                ref={lineRef}
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#059669] pointer-events-none scale-x-0"
            />

            {/* Expandable Section */}
            {service.capabilities && service.capabilities.length > 0 && (
                <div
                    id={`service-details-${service.id}`}
                    ref={expandRef}
                    style={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    className="bg-[#F4F3EF] px-4 sm:px-12 py-8 border-t border-[#D4D4D8]"
                >
                    <div className="max-w-4xl">
                        <div className="font-mono text-[11px] tracking-widest text-[#059669] uppercase mb-4">
                            CAPABILITIES
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {service.capabilities.map((cap, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="font-mono text-xs text-[#71717A] mt-0.5">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-[#18181B] font-medium">{cap}</span>
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
