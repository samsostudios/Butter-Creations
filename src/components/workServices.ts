import { gsap } from 'gsap';

export const workServices = () => {
  const wServiceComponent = document.querySelector('.work-services_component') as HTMLElement;

  if (!wServiceComponent) {
    console.log('WARN::/ Missing component in DOM');
    return;
  }

  const wServiceItems = [...wServiceComponent.querySelectorAll('.work-services_item')];

  // Store timelines for each element
  const timelines: Map<HTMLElement, gsap.core.Timeline> = new Map();

  for (const i in wServiceItems) {
    const temp = wServiceItems[i] as HTMLElement;

    temp.addEventListener('mouseenter', (e) => {
      const target = e.target as HTMLElement;
      hoverIn(target);
    });
    temp.addEventListener('mouseleave', (e) => {
      const target = e.target as HTMLElement;
      hoverOut(target);
    });
  }

  const hoverIn = (element: HTMLElement) => {
    const title = element.querySelector('.work-services_heading');
    const content = element.querySelector('.work-services_item-wrap');
    const blurLayer = element.querySelector('.work-services_blur');

    // If there is an existing timeline for this element, kill it
    const existingTimeline = timelines.get(element);
    if (existingTimeline) {
      existingTimeline.kill();
    }

    const tl = gsap.timeline();
    tl.set(content, { y: '1rem' });
    tl.set(blurLayer, { opacity: 0 });
    tl.to(title, { y: '-1rem', display: 'none', opacity: 0, ease: 'power4.out' });
    tl.to(blurLayer, { display: 'block', opacity: 1, ease: 'power4.out' }, '<');
    tl.to(content, { y: '0rem', display: 'flex', opacity: 1, ease: 'power4.out' }, '<0.3');

    // Store the new timeline
    timelines.set(element, tl);
  };

  const hoverOut = (element: HTMLElement) => {
    const title = element.querySelector('.work-services_heading');
    const content = element.querySelector('.work-services_item-wrap');
    const blurLayer = element.querySelector('.work-services_blur');

    // If there is an existing timeline for this element, kill it
    const existingTimeline = timelines.get(element);
    if (existingTimeline) {
      existingTimeline.kill();
    }

    const tl = gsap.timeline();
    tl.to(content, { y: '1rem', display: 'none', opacity: 0, ease: 'power4.out' });
    tl.to(blurLayer, { display: 'none', opacity: 0, ease: 'power4.out' }, '<');
    tl.to(title, { y: '0rem', display: 'block', opacity: 1, ease: 'power4.out' }, '<0.3');

    // Store the new timeline
    timelines.set(element, tl);
  };
};
