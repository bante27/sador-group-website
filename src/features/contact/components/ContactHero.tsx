import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Handshake, Mail, Phone, Linkedin, Twitter, Instagram, Facebook, MapPin } from 'lucide-react';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';

const GeometricBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAF9F6]" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <polygon
          points="970,0 1440,0 1440,800 700,800"
          className="hidden lg:block fill-[#0f172a]"
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 95%',
          toggleActions: 'play reverse play reverse',
        },
        defaults: { ease: 'power3.out' }
      });

      tl.fromTo(
        '.title-char',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.03 }
      )
        .fromTo(
          '.hero-animate',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.2 },
          '-=0.6'
        )
        .fromTo(
          '.glass-card-wrapper',
          { x: 180, y: -120, rotation: 15, scale: 0.7, opacity: 0 },
          { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.0, ease: 'power2.out' },
          '-=0.8'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleText = "Let's Build What Comes Next.";

  return (
    <div ref={heroRef} className="relative pt-12 pb-12 md:pt-24 md:pb-24 bg-[#FAF9F6] overflow-hidden">
      <GeometricBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-4 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7 text-zinc-900 pr-0 lg:pr-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6 sm:mb-8 leading-[1.1] text-zinc-900">
              Let&apos;s Build What <span className="font-normal italic">Comes Next.</span>
            </h1>

            <div className="hero-animate flex items-center gap-3 text-xs sm:text-sm text-zinc-700 font-mono mb-3 sm:mb-4 opacity-100">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <span>Global Response Team Active (&lt; 24h)</span>
            </div>

            <p className="hero-animate text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-xl opacity-100">
              Connect with Sador Group for enterprise technology solutions, strategic partnerships, product information, or dedicated sales assistance across our ecosystem.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative min-h-[auto] lg:min-h-[520px] items-center text-white w-full">
            <div className="glass-card-wrapper relative z-10 w-full max-w-md p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 transition-all duration-300">

              <div className="w-full">
                <div className="relative w-full py-5 px-4 sm:py-6 sm:px-6 bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-orange-500/20 border border-orange-500/20 flex items-center justify-center gap-4 sm:gap-5 text-orange-400 transition-all duration-300">
                  <Handshake className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1.5] shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-white tracking-wide">Strategic Partnerships</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 sm:p-3.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 flex flex-col justify-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300">Live working hours</span>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>Currently Online</span>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 flex flex-col justify-center gap-1.5 sm:gap-2">
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300">Direct Contact</span>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                    <span>Email Support</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                    <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                    <span>Phone Line</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                <div className="p-3 sm:p-3.5 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 flex items-center justify-around">
                  <a href="#linkedin" aria-label="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700 flex items-center justify-center text-sky-400 hover:scale-110 transition-transform">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#twitter" aria-label="Twitter" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform">
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                  <a href="#instagram" aria-label="Instagram" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700 flex items-center justify-center text-pink-400 hover:scale-110 transition-transform">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a href="#facebook" aria-label="Facebook" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-700 flex items-center justify-center text-blue-400 hover:scale-110 transition-transform">
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-3 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center relative z-10 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="relative z-10 overflow-hidden">
                    <span className="text-[11px] sm:text-xs font-bold text-white block truncate">Sador Group HQ</span>
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