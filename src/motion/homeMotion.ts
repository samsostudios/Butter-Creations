import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const homeOverviewReveal = () => {
  const overviewSection = document.querySelector('.section_home-overview') as HTMLElement;
  const overviewComponent = document.querySelector('.home-overview_component') as HTMLElement;

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: 'top 80%',
      end: 'top 80%',
      markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(overviewComponent, { duration: 2, opacity: 0, y: '2rem', ease: 'power4.out' });
};
