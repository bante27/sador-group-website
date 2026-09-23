import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Product } from '../types/product.types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const formattedIndex = String(index + 1).padStart(2, '0');

  const handleMouseEnter = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 1.03, duration: 0.35, ease: 'power3.out' });
    }
    if (titleRef.current) {
      gsap.to(titleRef.current, { x: 5, duration: 0.35, ease: 'power3.out' });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, { x: 6, duration: 0.35, ease: 'power3.out' });
    }
  };

  const handleMouseLeave = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 1, duration: 0.35, ease: 'power3.out' });
    }
    if (titleRef.current) {
      gsap.to(titleRef.current, { x: 0, duration: 0.35, ease: 'power3.out' });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, { x: 0, duration: 0.35, ease: 'power3.out' });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-[#FAF9F6] border border-zinc-200/80 p-8 flex flex-col justify-between transition-colors hover:border-zinc-400"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-xs text-[#71717A] tracking-widest">
            {formattedIndex}
          </span>
          {product.status && (
            <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200">
              {product.status}
            </span>
          )}
        </div>

        {product.image && (
          <div className="mb-6 overflow-hidden aspect-[16/10] bg-zinc-100 border border-zinc-200/60 relative">
            <img
              ref={imageRef}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover will-change-transform"
              loading="lazy"
            />
            {product.logo && (
              <div className="absolute top-3 left-3 w-8 h-8 bg-white/90 backdrop-blur-sm border border-zinc-200 flex items-center justify-center text-sm shadow-sm">
                {product.logo}
              </div>
            )}
          </div>
        )}

        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#059669] mb-2">
          {product.category}
        </div>

        <h3
          ref={titleRef}
          className="text-xl font-light text-[#18181B] tracking-tight mb-3 font-serif will-change-transform"
        >
          {product.name}
        </h3>

        <p className="text-[#71717A] text-sm font-light leading-relaxed mb-6 line-clamp-2">
          {product.description}
        </p>

        {product.technologies && product.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-8">
            {product.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-zinc-100 text-zinc-600">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between mt-auto">
        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center text-xs uppercase font-mono tracking-widest text-[#18181B] group-hover:text-[#059669] transition-colors"
        >
          <span>View Product</span>
          <span ref={arrowRef} className="ml-2 inline-block will-change-transform">↗</span>
        </Link>
        {product.website && (
          <a
            href={product.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-[#71717A] hover:text-[#18181B] underline underline-offset-4"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
