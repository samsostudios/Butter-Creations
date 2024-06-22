// eslint-disable-next-line simple-import-sort/imports
import { sectionReveal } from '$motion/sectionReveal';
import { filterContent } from 'src/components/filterContent';
import { videoCards } from 'src/components/videoCards';
import { workServices } from 'src/components/workServices';
import { workTestimonials } from 'src/components/workTestimonials';

export const workTemplate = () => {
  console.log('MUSIC');
  // Page Globals
  // ------------
  // console.log('work overview');

  // const workSection = document.querySelector('.section_work') as HTMLElement;
  // const workComponent = document.querySelector('.work_filter-container') as HTMLElement;
  // sectionReveal(workSection, workComponent);

  // Service Cards
  workServices();

  // Client Testimonials
  workTestimonials();

  // Filter Content
  filterContent();

  // Video Card
  videoCards();
};
