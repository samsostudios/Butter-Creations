// eslint-disable-next-line simple-import-sort/imports
import { smoothScroll } from '$utils/smoothScroll';
import { menu } from './components/menu';
import { about } from './pages/about';
import { home } from './pages/home';
import { workOverview } from './pages/workOverview';
import { workTemplate } from './pages/workTemplate';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Butter Creations ///');

  // Site Globals
  menu();
  smoothScroll();

  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    home();
  } else if (windowLocation.includes('/about')) {
    about();
  } else if (windowLocation.includes('/work')) {
    const hasFurtherIndex = windowLocation.substring(5);
    console.log(windowLocation.substring(5));
    if (hasFurtherIndex === '') {
      workOverview();
    } else {
      workTemplate();
    }
  }
});
