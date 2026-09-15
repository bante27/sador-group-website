import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTACT_METHODS } from './contact.data';
import { HelpCircle, Briefcase, TrendingUp, Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
      gsap.fromTo(
        '.method-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (link: string) => {
    const el = document.querySelector(link);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="py-24 border-b border-white/10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2 block">
            // CHANNELS
          </span>
          <h2 className="text-3xl font-light text-white tracking-tight">How can we assist you today?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_METHODS.map((method) => {
            const IconComponent = iconMap[method.iconName] || HelpCircle;
            return (
              <div
                key={method.id}
                onClick={() => handleCardClick(method.link)}
                className="method-card group relative p-8 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/80 hover:border-white/30 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-105 group-hover:border-white/30 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{method.title}</h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">{method.description}</p>
                </div>
                <div className="flex items-center text-xs font-mono text-slate-300 group-hover:text-white transition-colors">
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