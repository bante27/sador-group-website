import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TechnologyCapabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Text reveal from left
      tl.fromTo(
        textRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }
      );

      // Image clipping reveal starting from right edge
      const isMobile = window.innerWidth < 788;
      const initialClip = isMobile
        ? 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        : 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)';
      const finalClip = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

      tl.fromTo(
        imageWrapperRef.current,
        {
          clipPath: initialClip,
        },
        {
          clipPath: finalClip,
          duration: 1.4,
          ease: 'power3.out',
        },
        '-=0.8'
      );

      // Cinematic scale-down effect on the inner image
      tl.fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.4, ease: 'power3.out' },
        '-=1.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#09090B] text-white overflow-hidden"
    >
      <div className="w-full pl-0 pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* Left Side: Connected to Left Edge, 30% Dark Tint, High Contrast Bold White Text */}
          <div
            ref={textRef}
            className="lg:col-span-5 opacity-0 will-change-transform pl-6 sm:pl-10 lg:pl-16 pr-6 sm:pr-10 py-10 bg-[#121215]/40 backdrop-blur-md rounded-r-3xl border-l-4 border-amber-400 space-y-6 shadow-2xl z-10"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
              Technology <span className="font-normal italic text-amber-400">Capabilities</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-white font-bold leading-relaxed">
              <p className="text-white">
                Our multi-disciplinary engineering teams possess deep domain expertise across elite technology stacks, modern distributed architectures, and secure multi-cloud infrastructures.
              </p>
              <p className="text-zinc-100 font-semibold">
                We engineer scalable microservices, advanced AI pipelines, and military-grade cybersecurity protocols designed to withstand the highest levels of global enterprise demand.
              </p>

              {/* Expandable Extra Details */}
              {isExpanded && (
                <div className="space-y-4 pt-4 text-zinc-200 font-normal border-t border-zinc-800/80 animate-fadeIn">
                  <p>
                    Furthermore, our continuous deployment pipelines integrate automated regression testing and compliance verification across distributed clusters.
                  </p>
                  <p>
                    By leveraging cutting-edge container orchestration and zero-trust security boundaries, we ensure ultra-low latency and absolute data sovereignty for global financial, medical, and governmental partners.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleToggleExplore}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-400 hover:text-white transition-colors group cursor-pointer"
              >
                <span>{isExpanded ? 'Show less' : 'Explore all stacks'}</span>
                <span className={`transform transition-transform ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`}>
                  {isExpanded ? '↑' : '→'}
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Fully Connected to Right Edge, 75% Brightness / White Contrast, Edge-to-Edge */}
          <div className="lg:col-span-7 relative pr-0">
            <div
              ref={imageWrapperRef}
              className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] rounded-l-none lg:rounded-l-3xl overflow-hidden shadow-2xl will-change-[clip-path]"
            >
              <img
                ref={imageRef}
                src="/image.png"
                alt="Technology Capabilities"
                className="w-full h-full object-cover object-right filter brightness-[0.9] contrast-[1.05] will-change-transform"
              />
              {/* Cinematic ambient side gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyCapabilities;
