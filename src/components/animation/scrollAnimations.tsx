import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const revealOnScroll = (
    triggerElement: HTMLElement | null,
    target: string,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars,
    customStart: string = 'top 75%'
) => {
    if (!triggerElement) return;

    gsap.fromTo(target, fromVars, {
        ...toVars,
        scrollTrigger: {
            trigger: triggerElement,
            start: customStart,
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
        },
    });
};

export const createTunnelZoomEffect = (
    containerRef: HTMLElement | null,
    tunnelLayerRef: HTMLElement | null,
    contentRef: HTMLElement | null
) => {
    if (!containerRef || !tunnelLayerRef) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef,
            start: 'top top',
            end: '+=1600',
            pin: true,
            scrub: 1.0,
            anticipatePin: 1,
        },
    });

    tl.fromTo(
        tunnelLayerRef,
        {
            width: '75vw',
            height: '70vh',
            borderRadius: '2rem',
            scale: 0.85,
            y: 40,
        },
        {
            width: '100vw',
            height: '100vh',
            borderRadius: '0rem',
            scale: 1.15,
            y: 0,
            ease: 'power2.inOut',
        }
    );

    if (contentRef) {
        tl.fromTo(
            contentRef,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            0.2
        );
    }
};

export const applyWaveTextSplit = (containerElement: HTMLElement | null, selector: string = '.wave-text-reveal') => {
    if (!containerElement) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const waveElements = containerElement.querySelectorAll(selector);
    waveElements.forEach((el) => {
        const text = el.textContent || '';
        el.innerHTML = text
            .split('')
            .map((char) => `<span class="inline-block wave-char" style="opacity: 0.15; filter: blur(8px); transform: translateY(20px);">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');

        gsap.to(el.querySelectorAll('.wave-char'), {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            stagger: 0.015,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'top 45%',
                scrub: true,
            },
        });
    });
};
