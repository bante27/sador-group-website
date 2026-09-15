import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ContactHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.tech-node',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="hero-animate inline-block text-xs font-mono tracking-widest text-slate-400 uppercase mb-4">
              // LET'S CONNECT
            </span>
            <h1 className="hero-animate text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]">
              Let's Build What <span className="font-normal italic">Comes Next.</span>
            </h1>
            <p className="hero-animate text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
              Connect with Sador Group for enterprise technology solutions, strategic partnerships, product information, dedicated sales assistance, or career opportunities across our ecosystem.
            </p>
            <div className="hero-animate flex items-center gap-4 text-sm text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Global Response Team Active (Avg. response &lt; 24h)
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="tech-node relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-8 flex flex-col justify-between shadow-2xl">
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-white/10 pb-4">
                <span>ECOSYSTEM.NODE</span>
                <span>SECURE // 256-BIT</span>
              </div>
              
              <div className="relative flex items-center justify-center my-auto">
                <div className="absolute w-32 h-32 rounded-full border border-white/10 animate-ping opacity-20" />
                <div className="absolute w-48 h-48 rounded-full border border-dashed border-white/20 animate-spin" style={{ animationDuration: '30s' }} />
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-inner">
                  <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-white/10 pt-4">
                <span>23+ SOLUTIONS</span>
                <span className="text-white">ONLINE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};