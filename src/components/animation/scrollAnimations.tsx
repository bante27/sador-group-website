import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reusable scroll animation helper
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