import { gsap } from 'gsap';

export const reelModalCursor = () => {
  const heroSection = document.querySelector('.section_home-hero') as HTMLElement;
  const heroVideo = heroSection.querySelector('.home-hero_video') as HTMLElement;
  const cursor = heroSection.querySelector('.home-hero_video-cursor');

  heroVideo.addEventListener('mouseenter', () => {
    gsap.to(cursor, { opacity: 1, ease: 'power4.out' });
  });
  heroVideo.addEventListener('mouseleave', () => {
    gsap.to(cursor, { opacity: 0, ease: 'power4.out' });
  });

  heroVideo.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.to(cursor, { x: mouseX, y: mouseY });
  });
};

export const reelModal = () => {
  const reelTrigger = document.querySelector('[data-reel-open]') as HTMLElement;
  const modalSection = document.querySelector('.section_player-modal') as HTMLElement;
  const modalCloseButton = modalSection.querySelector('a') as HTMLElement;
  const modalVideo = modalSection.querySelector('.player-modal_video') as HTMLElement;

  reelTrigger.addEventListener('click', () => {
    console.log('open');
    modalOpen();
  });
  modalCloseButton.addEventListener('click', () => {
    modalClose();
  });

  function modalOpen() {
    const animation = gsap.timeline();
    animation.set('body', { overflow: 'hidden' });
    animation.set(modalSection, { display: 'flex', opacity: 0 });
    animation.set([modalVideo, modalCloseButton], { opacity: 0 });
    animation.to(modalSection, { duration: 0.8, opacity: 1, ease: 'power4.out' });
    animation.to([modalVideo, modalCloseButton], { duration: 1, opacity: 1, ease: 'power4.out' });

    console.log('open animation', modalSection);
  }
  function modalClose() {
    const animation = gsap.timeline();
    animation.set('body', { overflow: 'auto' });
    animation.to([modalVideo, modalCloseButton], {
      duration: 1,
      opacity: 0,
      ease: 'power4.out',
    });
    animation.to(modalSection, { duration: 0.8, opacity: 0, ease: 'power4.out' });

    animation.to(modalSection, { display: 'none' });
  }
};
