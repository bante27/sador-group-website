import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { opportunityAreas } from '../data/careerContent';
import { ArrowRight } from 'lucide-react';
import { revealOnScroll } from '@/components/animation/scrollAnimations';

gsap.registerPlugin(ScrollTrigger);

export function InternshipCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left box from left (water flow style)
      revealOnScroll(
        containerRef.current,
        '.intern-card-left',
        { opacity: 0, x: -140, y: 30, scale: 0.94 },
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.5, ease: 'power3.out' },
        'top 75%'
      );

      // Center box from bottom
      revealOnScroll(
        containerRef.current,
        '.intern-card-center',
        { opacity: 0, y: 60, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out' },
        'top 75%'
      );

      // Right box from right (water flow style)
      revealOnScroll(
        containerRef.current,
        '.intern-card-right',
        { opacity: 0, x: 140, y: 30, scale: 0.94 },
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.5, ease: 'power3.out' },
        'top 75%'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-4 bg-white text-[#0F172A] px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#0F172A]">
            Start Your Career by Building Real Things.
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Emerging professionals gain practical exposure, mentorship, and opportunities to contribute to real-world solutions across our technology ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {opportunityAreas.slice(0, 3).map((area, idx) => {
            const positionClass =
              idx === 0
                ? 'intern-card-left'
                : idx === 1
                  ? 'intern-card-center'
                  : 'intern-card-right';

            return (
              <div
                key={idx}
                className={`${positionClass} p-8 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0F172A]">{area.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F172A] text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
          >
            <span>Express Your Interest</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default InternshipCTA;
