import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from "../../../components/animation/scrollAnimations";
import { Handshake, Mail, Phone, Linkedin, Twitter, Instagram, Facebook, MapPin } from 'lucide-react';

const GeometricBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <polygon
          points="970,0 1440,0 1440,800 700,800"
          fill="#0f172a"
        />
      </svg>
    </div>
  );
};

export const ContactHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      revealOnScroll(
        heroRef.current,
        '.title-char',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' },
        'top 80%'
      );

      revealOnScroll(
        heroRef.current,
        '.hero-animate',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.9, ease: 'power3.out' },
        'top 75%'
      );

      revealOnScroll(
        heroRef.current,
        '.glass-card-wrapper',
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
        'top 75%'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleText = "Let's Build What Comes Next.";

  return (
    <div ref={heroRef} className="relative pt-12 pb-0 md:pt-16 md:pb-0 border-b border-slate-200 overflow-hidden">
      <GeometricBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-slate-900 pr-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-[1.1] text-slate-900" aria-label={titleText}>
              {titleText.split('').map((char, index) => {
                const isItalic = index >= 20; 
                return (
                  <span
                    key={index}
                    className={`title-char inline-block opacity-100 ${isItalic ? 'font-normal italic' : ''}`}
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>

            <div className="hero-animate flex items-center gap-4 text-sm text-slate-700 font-mono mb-4 opacity-100">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Global Response Team Active (Avg. response &lt; 24h)
            </div>

            <p className="hero-animate text-base text-slate-800 font-light leading-relaxed max-w-xl opacity-100">
              Connect with Sador Group for enterprise technology solutions, strategic partnerships, product information, or dedicated sales assistance across our ecosystem.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative min-h-[460px] lg:min-h-[520px] items-center text-white">
            <div className="glass-card-wrapper relative z-10 w-full max-w-md p-6 flex flex-col gap-4 transition-all duration-300">
              
              <div className="w-full">
                <div className="relative w-full py-6 px-6 bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-orange-500/20 border border-orange-500/20 flex items-center justify-center gap-5 text-orange-400 transition-all duration-300">
                  <Handshake className="w-16 h-16 stroke-[1.5]" />
                  <span className="text-base font-semibold text-white tracking-wide">Strategic Partnerships</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 flex flex-col justify-center gap-2">
                  <span className="text-xs font-medium text-slate-300">Live working hours</span>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Currently Online
                  </div>
                </div>

                <div className="p-3.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 flex flex-col justify-center gap-2">
                  <span className="text-xs font-medium text-slate-300">Direct Contact</span>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Mail className="w-3.5 h-3.5 text-orange-400" />
                    <span>Email</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>Phone</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="p-3.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 flex items-center justify-around">
                  <a href="#linkedin" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sky-400 hover:scale-110 transition-transform">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#twitter" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform">
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a href="#instagram" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-pink-400 hover:scale-110 transition-transform">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a href="#facebook" className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform">
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-3 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center relative z-10 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="relative z-10 overflow-hidden">
                    <span className="text-xs font-bold text-white block truncate">Sador Group HQ</span>
                    <span className="text-[10px] text-slate-300 block truncate">Global Office Node</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};