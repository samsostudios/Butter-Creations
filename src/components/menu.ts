import { gsap } from 'gsap';

const menuOpenButton = document.querySelector('.nav_link.is-menu') as HTMLElement;
const menuCloseButton = document.querySelector('.nav_link.is-close') as HTMLElement;
const menuComponent = document.querySelector('.menu_component') as HTMLElement;
const menuLinks = [...menuComponent.querySelectorAll('.menu_link')];
const menuStamp = menuComponent.querySelector('.mneu_stamp');

export const menu = () => {
  if (!menuOpenButton || !menuCloseButton) {
    console.log('WARN:// Not Found (Mobile Menu Buttons)');
    return;
  }

  console.log('here', menuOpenButton, menuCloseButton);
  menuOpenButton.addEventListener('click', () => {
    menuInAnimation();
  });
  menuCloseButton.addEventListener('click', () => {
    menuOutAnimation();
  });
};

export const menuInAnimation = () => {
  const animation = gsap.timeline();
  animation.set(menuComponent, { height: 0, display: 'block' });
  animation.set([menuLinks, menuStamp], { opacity: 0 });

  animation.to(menuOpenButton, { y: '-100%', ease: 'power4.inOut' });
  animation.to(menuCloseButton, { y: '-100%', ease: 'power4.inOut' }, '<');
  animation.to(menuComponent, { duration: 1, height: 'auto', ease: 'power4.inOut' }, '<');
  animation.to(menuLinks, { opacity: 1, stagger: { each: 0.1 }, ease: 'power4.inOut' }, '<0.4');
  animation.to(
    menuStamp,
    { duration: 1, opacity: 1, rotate: '-10deg', ease: 'power4.out' },
    '<0.5'
  );
};
export const menuOutAnimation = () => {
  const animation = gsap.timeline();

  animation.to(menuOpenButton, { y: '0%', ease: 'power4.inOut' });
  animation.to(menuCloseButton, { y: '100%', ease: 'power4.inOut' }, '<');
  animation.to(menuLinks, { opacity: 0, stagger: { each: -0.1 }, ease: 'power4.inOut' }, '<');
  animation.to(menuStamp, { duration: 1, opacity: 0, rotate: '0deg', ease: 'power4.out' }, '<');
  animation.to(menuComponent, { duration: 1, height: '0%', ease: 'power4.inOut' }, '<0.4');

  //   animation.set(menuComponent, { height: '0%', display: 'none' });
};
