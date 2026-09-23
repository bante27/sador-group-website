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
        '.cta-element',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
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
    <section ref={ctaRef} className="py-20 sm:py-28 relative overflow-hidden bg-[#FAF9F6] ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
        <div>
          <span className="cta-element text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4 block">

          </span>
          <h2 className="cta-element text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight">
            Your next opportunity could <span className="font-bold italic">start here.</span>
          </h2>
          <p className="cta-element text-zinc-600 font-bold text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are evaluating our portfolio of 23+ technology solutions, exploring joint corporate partnerships, or looking to scale your career, our leadership team is ready to connect.
          </p>
          <div className="cta-element">
            <button
              onClick={handleScrollToForm}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-lg bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-colors group cursor-pointer shadow-sm"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

