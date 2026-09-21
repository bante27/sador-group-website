import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CONTACT_METHODS } from './contact.data';
import { HelpCircle, Briefcase, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';

const iconMap: Record<string, React.ElementType> = {
  HelpCircle,
  Briefcase,
  TrendingUp,
  Users,
};

export const ContactMethods: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      revealOnScroll(
        containerRef.current,
        '.method-card',
        { scale: 0.92, y: 40, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (link: string) => {
    const el = document.querySelector(link);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-[#FAF9F6] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-14">

          <h2 className="text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight">How can we assist you today?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_METHODS.map((method) => {
            const IconComponent = iconMap[method.iconName] || HelpCircle;
            return (
              <div
                key={method.id}
                onClick={() => handleCardClick(method.link)}
                className="method-card group relative p-8 rounded-xl border border-zinc-300 bg-white hover:border-zinc-400 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-950 mb-6 group-hover:scale-105 group-hover:border-zinc-400 transition-all duration-300 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-950 mb-3">{method.title}</h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed mb-6">{method.description}</p>
                </div>
                <div className="flex items-center text-xs font-mono text-zinc-700 group-hover:text-zinc-950 transition-colors">
                  <span>{method.actionText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;