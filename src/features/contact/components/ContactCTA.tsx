import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ContactCTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToForm = () => {
    const el = document.querySelector('#contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ctaRef} className="py-28 relative overflow-hidden bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="cta-content">
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4 block">
            // SADOR GROUP ECOSYSTEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight mb-6 leading-tight">
            Your next opportunity could <span className="font-normal italic">start here.</span>
          </h2>
          <p className="text-zinc-400 font-light text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are evaluating our portfolio of 23+ technology solutions, exploring joint corporate partnerships, or looking to scale your career, our leadership team is ready to connect.
          </p>
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors group cursor-pointer"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};