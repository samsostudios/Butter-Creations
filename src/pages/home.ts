// eslint-disable-next-line simple-import-sort/imports
import { sectionReveal } from '$motion/sectionReveal';
import { clientSlider } from 'src/components/clientSlider';
import { reelModalCursor, reelModal } from 'src/components/reelModal';
import { testimonialsSlider } from 'src/components/testimonialsSlider';
import { videoCards } from 'src/components/videoCards';

export const home = () => {
  // console.log('home');

  // Page Globals
  // ------------

  // Hero Reel
  reelModalCursor();
  // reelModal();

  // Overview
  const overviewSection = document.querySelector('.section_home-overview') as HTMLElement;
  const overviewComponent = document.querySelector('.home-overview_component') as HTMLElement;
  sectionReveal(overviewSection, overviewComponent);

  // Video Cards
  videoCards();

  // Clients Slider
  const clientSection = document.querySelector('.section_clients-slider') as HTMLElement;
  const clientComponent = document.querySelector('.clients-slider_component') as HTMLElement;
  sectionReveal(clientSection, clientComponent);
  clientSlider();

  // Testimonials Slider
  testimonialsSlider();
};
