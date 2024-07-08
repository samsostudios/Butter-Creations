// eslint-disable-next-line simple-import-sort/imports
import { smoothScroll } from '$utils/smoothScroll';
import { menu } from './components/menu';
import { pageTransition } from './components/pageTransition';
import { about } from './pages/about';
import { contact } from './pages/contact';
import { home } from './pages/home';
import { workDetailTemplate } from './pages/workDetailTemplate';
import { workOverview } from './pages/workOverview';
import { workTemplate } from './pages/workTemplate';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// Butter Creations ///');

  // Site Globals
  menu();
  smoothScroll();
  pageTransition();

  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    home();
  } else if (windowLocation.includes('/about')) {
    about();
  } else if (windowLocation.includes('/music')) {
    workTemplate();
  } else if (windowLocation.includes('/brand')) {
    const hasFurtherIndex = windowLocation.substring(5);

    if (hasFurtherIndex === '' || hasFurtherIndex === 'd') {
      workTemplate();
    } else {
      workDetailTemplate();
    }
  } else if (windowLocation.includes('/contact')) {
    contact();
  }
});
