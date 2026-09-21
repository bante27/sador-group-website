import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { revealOnScroll } from '../../../components/animation/scrollAnimations';
import { Cpu, Cloud, Smartphone, Database, Lock, GitBranch } from 'lucide-react';

const capabilities = [
  {
    title: 'Enterprise Software Architecture',
    description: 'Designing scalable microservices, high-performance distributed systems, and robust backend infrastructures.',
    icon: Database,
  },
  {
    title: 'Artificial Intelligence & Automation',
    description: 'Integrating advanced machine learning pipelines, predictive analytics, and automated decision engines.',
    icon: Cpu,
  },
  {
    title: 'Cloud Solutions & DevOps',
    description: 'Migrating and managing secure multi-cloud environments with automated CI/CD deployment workflows.',
    icon: Cloud,
  },
  {
    title: 'Mobile & Web Application Engineering',
    description: 'Building responsive, lightning-fast cross-platform applications with immersive UI/UX frameworks.',
    icon: Smartphone,
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Implementing military-grade encryption, zero-trust architectures, and strict regulatory compliance.',
    icon: Lock,
  },
  {
    title: 'Digital Transformation & Strategy',
    description: 'Guiding legacy enterprises through comprehensive technological modernization and workflow digitization.',
    icon: GitBranch,
  },
];

export const TechnologyCapabilities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      revealOnScroll(
        containerRef.current,
        '.capability-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3 block">Technical Prowess</span>
          <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 tracking-tight mb-4">Technology Capabilities</h2>
          <p className="text-zinc-600 font-light text-base leading-relaxed">
            Our multi-disciplinary engineering teams possess deep domain expertise across modern technology stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="capability-card bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-3 tracking-tight">{cap.title}</h3>
                  <p className="text-zinc-600 font-light text-sm leading-relaxed">{cap.description}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>CAPABILITY 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-600/60" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechnologyCapabilities;
