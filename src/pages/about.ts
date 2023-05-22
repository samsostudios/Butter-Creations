// eslint-disable-next-line simple-import-sort/imports
import { sectionReveal } from '$motion/sectionReveal';
import { clientSlider } from 'src/components/clientSlider';
import { reelModal } from 'src/components/reelModal';
import { testimonialsSlider } from 'src/components/testimonialsSlider';

export const about = () => {
  // Page Globals
  // ------------
  // console.log('about');

  // Hero
  reelModal();

  // Services
  const servicesSection = document.querySelector('.section_about-services') as HTMLElement;
  const servicesComponent = document.querySelector('.about-services_component') as HTMLElement;
  sectionReveal(servicesSection, servicesComponent);

  // Team
  const teamSection = document.querySelector('.section_about-team') as HTMLElement;
  const teamComponent = document.querySelector('.about-team_component') as HTMLElement;
  sectionReveal(teamSection, teamComponent);

  // Clients Slider
  const clientSection = document.querySelector('.section_clients-slider') as HTMLElement;
  const clientComponent = document.querySelector('.clients-slider_component') as HTMLElement;
  sectionReveal(clientSection, clientComponent);
  clientSlider();

  // Testimonials Slider
  testimonialsSlider();
};
