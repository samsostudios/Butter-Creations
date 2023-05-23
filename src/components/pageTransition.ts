import { gsap } from 'gsap';

export const pageTransition = () => {
  const allLinks = [...document.querySelectorAll('a')];

  pageTransitionOut();

  for (const i in allLinks) {
    const temp = allLinks[i] as HTMLAnchorElement;
    const linkSrc = temp.href;

    if (linkSrc.includes('buttercreations') && !linkSrc.includes('#')) {
      temp.addEventListener('click', (e) => {
        console.log('ha');
        e.preventDefault();
        const animation = pageTransitionIn();
        animation.play();
        const animationDuration = animation.duration() * 1000;
        setTimeout(
          (url: Location) => {
            window.location = url;
          },
          animationDuration,
          linkSrc
        );
      });
    }
  }

  function pageTransitionIn() {
    const transitionElement = document.querySelector('.transition_component');

    const animation = gsap.timeline({ paused: true });
    animation.to(transitionElement, {
      display: 'block',
      duration: 0.5,
      opacity: 1,
      ease: 'power3.out',
    });

    return animation;
  }

  function pageTransitionOut() {
    const transitionElement = document.querySelector('.transition_component');

    const animation = gsap.timeline();
    animation.set(transitionElement, { display: 'block', opacity: 1 });
    animation.to(transitionElement, {
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      display: 'none',
      ease: 'power3.out',
    });

    return animation;
  }
};
