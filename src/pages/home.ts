// eslint-disable-next-line simple-import-sort/imports
import { homeOverviewReveal } from '$motion/homeMotion';
import { clientSlider } from 'src/components/clientSlider';
import { testimonialsSlider } from 'src/components/testimonialsSlider';
import { videoCards } from 'src/components/videoCards';

export const home = () => {
  console.log('home');

  // Page Globals
  // ------------

  // Overview
  homeOverviewReveal();

  // Video Cards
  videoCards();

  // Clients Slider
  clientSlider();

  // Testimonials Slider
  testimonialsSlider();
};
