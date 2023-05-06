import { filterContent } from 'src/components/filterContent';
import { videoCards } from 'src/components/videoCards';

export const workOverview = () => {
  // Page Globals
  // ------------
  console.log('work overview');

  // Filter Content
  filterContent();

  // Video Card
  videoCards();
};
