// eslint-disable-next-line simple-import-sort/imports
import { sectionReveal } from '$motion/sectionReveal';
import { filterContent } from 'src/components/filterContent';
import { videoCards } from 'src/components/videoCards';

export const musicWork = () => {
  console.log('MUSIC');
  // Page Globals
  // ------------
  // console.log('work overview');

  const workSection = document.querySelector('.section_work') as HTMLElement;
  const workComponent = document.querySelector('.work_filter-container') as HTMLElement;
  sectionReveal(workSection, workComponent);

  // Filter Content
  filterContent();

  // Video Card
  videoCards();
};
