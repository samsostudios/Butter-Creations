import { sectionReveal } from '$motion/sectionReveal';

export const workDetailTemplate = () => {
  // Page Globals
  // ------------
  const mainVideo = document.querySelector('.vimeo-embed_container') as HTMLElement;
  const mainVideoAspect = document.querySelector('.work-hero_aspect-ratio')?.innerHTML;

  if (mainVideoAspect === '21:9') {
    mainVideo.style.paddingBottom = '42.85%';
  }

  // Hero
  const heroSection = document.querySelector('.section_work-hero-t') as HTMLElement;
  const heroComponent = document.querySelector('.work-hero-t_component') as HTMLElement;
  sectionReveal(heroSection, heroComponent);

  //Work
  const workSection = document.querySelector('.section_work-main') as HTMLElement;
  const workComponent = document.querySelector('.work-main_component') as HTMLElement;
  sectionReveal(workSection, workComponent);
};
