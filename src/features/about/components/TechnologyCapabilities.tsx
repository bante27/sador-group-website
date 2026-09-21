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

      // Image wrapper expansion using clip-path circle (starting compact circle from right, expanding outward)
      const isMobile = window.innerWidth < 768;
      const initialClip = isMobile ? 'circle(0% at 50% 50%)' : 'circle(15% at 90% 50%)';
      const finalClip = isMobile ? 'circle(150% at 50% 50%)' : 'circle(100% at 50% 50%)';

      tl.fromTo(
        imageWrapperRef.current,
        {
          clipPath: initialClip,
        },
        {
          clipPath: finalClip,
          duration: 1.9,
          ease: 'power3.out',
        },
        '-=0.8'
      );

      // Cinematic scale-down effect on the inner image
      tl.fromTo(
        imageRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 1.9, ease: 'power3.out' },
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
      <div className="w-full pl-4 sm:pl-8 lg:pl-16 pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Bold White Text & Expandable Details */}
          <div
            ref={textRef}
            className="lg:col-span-5 opacity-0 will-change-transform space-y-6 pr-4 sm:pr-8 lg:pr-0"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400 block font-semibold">
              Technical Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
              Technology <span className="font-normal italic text-amber-400">Capabilities</span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-white font-bold leading-relaxed">
              <p>
                Our multi-disciplinary engineering teams possess deep domain expertise across elite technology stacks, modern distributed architectures, and secure multi-cloud infrastructures.
              </p>
              <p>
                We engineer scalable microservices, advanced AI pipelines, and military-grade cybersecurity protocols designed to withstand the highest levels of global enterprise demand.
              </p>

              {/* Expandable Extra Details */}
              {isExpanded && (
                <div className="space-y-4 pt-2 text-zinc-300 font-normal border-t border-zinc-800 animate-fadeIn">
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

          {/* Right Side: Edge-to-Edge Image with Circle Reveal */}
          <div className="lg:col-span-7 relative">
            <div
              ref={imageWrapperRef}
              className="relative w-full h-[380px] sm:h-[480px] lg:h-[600px] overflow-hidden will-change-[clip-path]"
            >
              <img
                ref={imageRef}
                src="/image.png"
                alt="Technology Capabilities"
                className="w-full h-full object-cover object-center will-change-transform"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologyCapabilities;
