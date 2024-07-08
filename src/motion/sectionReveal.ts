import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const sectionReveal = (tiggerElement: HTMLElement, animateElement: HTMLElement) => {
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: tiggerElement,
      start: 'top 85%',
      end: 'top 85%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(animateElement, { duration: 2, opacity: 0, y: '2rem', ease: 'power4.out' });
};
