// eslint-disable-next-line simple-import-sort/imports
import { sectionReveal } from '$motion/sectionReveal';
import { filterContent } from 'src/components/filterContent';
import { videoCards } from 'src/components/videoCards';
import { workServices } from 'src/components/workServices';
import { workTestimonials } from 'src/components/workTestimonials';

export const workTemplate = () => {
  // Page Globals
  // ------------
  const windowLocation = window.location.pathname as string;

  const heroSection = document.querySelector('.section_work-hero') as HTMLElement;
  const heroComponent = document.querySelector('.work-hero_component') as HTMLElement;
  sectionReveal(heroSection, heroComponent);

  // Service Cards
  if (windowLocation !== '/brand') {
    workServices();
  }
  const servicesSection = document.querySelector('.section_work-services') as HTMLElement;
  const servicesComponent = document.querySelector('.work-services_component') as HTMLElement;
  sectionReveal(servicesSection, servicesComponent);

  // Client Testimonials
  workTestimonials();

  const testimonialSection = document.querySelector('.section_work-testimonials') as HTMLElement;
  const testimonialComponent = document.querySelector(
    '.work-testimonials_component'
  ) as HTMLElement;
  sectionReveal(testimonialSection, testimonialComponent);

  // Filter Content
  filterContent();

  const workSection = document.querySelector('.section_work') as HTMLElement;
  const workComponent = document.querySelector('.work_filter-container') as HTMLElement;
  sectionReveal(workSection, workComponent);

  // Video Card
  videoCards();
};
