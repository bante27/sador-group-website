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
                ease: 'power3.inOut',
            });
        }
    }, [isExpanded]);

    return (
        <div className="bg-white text-slate-900 border-b border-slate-200 transition-colors">
            <button
                type="button"
                onClick={() => onSelect?.(service)}
                aria-expanded={isExpanded}
                aria-controls={`service-details-${service.id}`}
                className="w-full text-left py-10 sm:py-12 px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center focus:outline-none cursor-pointer group"
            >
                {/* Number */}
                <div className="lg:col-span-1">
                    <span className="font-mono text-base tracking-widest text-slate-500 font-semibold">
                        {service.number}
                    </span>
                </div>

                {/* Title & Category */}
                <div className="lg:col-span-4">
                    <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-2">
                        {service.title}
                    </h3>
                    {service.category && (
                        <div className="font-mono text-xs tracking-widest text-emerald-600 uppercase font-semibold">
                            {service.category}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl">
                        {service.description}
                    </p>
                </div>

                {/* Action / Explore without external icon/line */}
                <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <span className="text-sm font-semibold text-emerald-600 group-hover:text-slate-900 transition-colors">
                        {isExpanded ? 'Collapse' : 'Explore'}
                    </span>
                </div>
            </button>

            {/* Expandable Section */}
            {service.capabilities && service.capabilities.length > 0 && (
                <div
                    id={`service-details-${service.id}`}
                    ref={expandRef}
                    style={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    className="bg-slate-50 px-6 sm:px-12 py-8 border-t border-slate-200"
                >
                    <div className="max-w-5xl">
                        <div className="font-mono text-xs tracking-widest text-emerald-600 uppercase font-bold mb-4">
                            CAPABILITIES
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.capabilities.map((cap, idx) => (
                                <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                    <span className="font-mono text-xs text-emerald-600 mt-0.5 font-semibold">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-slate-800 font-medium leading-snug">{cap}</span>
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
