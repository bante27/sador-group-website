import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Linkedin, Github, ArrowRight } from 'lucide-react';
import { navigationConfig } from '../../config/navigation.config';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.footer-reveal', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#09090B] text-[#FAFAFA] pt-24 pb-16 px-6 lg:px-12 overflow-hidden "
    >
      {/* Subtle technical background texture / grid & glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#FAFAFA_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Abstract ecosystem visual (subtle nodes & lines behind heading) */}
      <div className="absolute top-16 right-12 lg:right-24 opacity-[0.06] pointer-events-none hidden md:block">
        <svg className="w-64 h-64 text-emerald-400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="40" r="4" fill="currentColor" />
          <circle cx="50" cy="120" r="4" fill="currentColor" />
          <circle cx="150" cy="120" r="4" fill="currentColor" />
          <circle cx="100" cy="160" r="4" fill="currentColor" />
          <path d="M100 40L50 120H150L100 40Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M50 120L100 160L150 120" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 40V160" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Section: Brand + Large Statement + Description + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-white/10">

          {/* Brand & Editorial Heading */}
          <div className="lg:col-span-6 flex flex-col items-start">

            {/* Logo / Brand Indicator */}
            <div className="footer-reveal flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <span className="text-black font-black text-lg">S</span>
              </div>
              <span className="text-white font-semibold text-base tracking-wider uppercase">Sador Group</span>
            </div>

            {/* Large Closing Statement (slightly smaller on large screens as requested) */}
            <h2 className="footer-reveal text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-white mb-6">
              Technology<br />
              that moves<br />
              business forward.
            </h2>

            {/* Sador Group Verified Description */}
            <p className="footer-reveal max-w-md text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-6">
              Sador Group brings together specialized technology businesses focused on innovation, digital transformation, and long-term business growth.
            </p>

            {/* Primary Footer CTA */}
            <div className="footer-reveal">
              <Link
                to="/companies"
                className="inline-flex items-center gap-2 text-white hover:text-emerald-400 font-medium text-sm sm:text-base group transition-colors duration-300"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Right Side: Navigation Columns (3 columns grid on large screens) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4 lg:pt-2">

            {/* Company Column */}
            <div className="footer-reveal">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA] mb-6">Company</h3>
              <ul className="space-y-3.5">
                <li>
                  <Link to="/about" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      About
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Careers
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Contact
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ecosystem Column */}
            <div className="footer-reveal">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA] mb-6">Ecosystem</h3>
              <ul className="space-y-3.5">
                <li>
                  <Link to="/companies" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Companies
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Products
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Services
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Solutions
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Projects
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-reveal">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA] mb-6">Resources</h3>
              <ul className="space-y-3.5">
                <li>
                  <Link to="/news" className="group inline-flex items-center text-sm text-[#FAFAFA] hover:text-emerald-400 transition-colors duration-300">
                    <span className="relative">
                      Insights & News
                      <span className="absolute left-full ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">→</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Active / Accent Line Segment */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#09090B] px-4 text-emerald-500">
              <span className="block w-16 h-[2px] bg-emerald-500 rounded-full" />
            </span>
          </div>
        </div>

        {/* Bottom Metadata & Social Links */}
        <div className="footer-reveal flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-sm text-[#A1A1AA]">

          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} Sador Group. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Follow us</span>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#A1A1AA] hover:text-emerald-400 transition-colors duration-300 p-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://bante27.github.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#A1A1AA] hover:text-emerald-400 transition-colors duration-300 p-1"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Secondary Legal / Links */}
          <div className="flex items-center gap-6 text-xs">
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-emerald-400 transition-colors">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
