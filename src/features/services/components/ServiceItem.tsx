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
        <div ref={itemRef} className="transition-colors duration-500 my-6">
            {/* Center-aligned normal paragraph block representing the service item without any button/box styling */}
            <div
                onClick={() => onSelect?.(service)}
                className="w-full max-w-4xl mx-auto text-center py-8 px-6 cursor-pointer group"
            >
                {/* Title */}
                <h3 className="text-2xl sm:text-4xl font-medium tracking-tight mb-3 text-[#12143F]">
                    {service.title}
                </h3>

                {/* Category tag */}
                {service.category && (
                    <div className="text-xs tracking-widest text-[#FF7A53] uppercase font-semibold mb-4">
                        {service.category}
                    </div>
                )}

                {/* Description */}
                <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto">
                    {service.description}
                </p>
            </div>

            {/* Expandable Normal Paragraph Section */}
            {service.capabilities && service.capabilities.length > 0 && (
                <div
                    id={`service-details-${service.id}`}
                    ref={expandRef}
                    style={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    className="px-6 sm:px-12 py-6 bg-transparent max-w-3xl mx-auto text-center"
                >
                    <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
                        {service.capabilities.join('. ')}
                    </p>
                </div>
            )}
        </div>
    );
}

export default ServiceItem;
