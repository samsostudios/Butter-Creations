// eslint-disable-next-line simple-import-sort/imports
import { breakpoints } from '$utils/breakpoints';
import { gsap } from 'gsap';

export const videoCards = () => {
  // const device = getDeviceType();
  const device = breakpoints();

  if (device[0] === 'desktop') {
    const cards = [...document.querySelectorAll('[data-video-card]')];

    initCards();

    for (const i in cards) {
      const tempCard = cards[i] as HTMLElement;

      tempCard.addEventListener('mouseenter', () => {
        // console.log('enter');
        hoverIn(tempCard);
      });
      tempCard.addEventListener('mouseleave', () => {
        // console.log('leave');
        hoverOut(tempCard);
      });
    }
  }

  // Helper Functions
  function initCards() {
    const cardLabels = [...document.querySelectorAll('.work-item_label-wrap')];
    const cardViewMore = [...document.querySelectorAll('.work-item_view-more')];

    // gsap.set([cardLabels, cardViewMore], { y: '100%', opacity: 0 });
    gsap.set(cardViewMore, { rotate: '5deg' });
  }

  function hoverIn(item: HTMLElement) {
    const cardLabel = item.querySelector('.work-item_label-wrap');
    const cardTitle = item.querySelector('.work-item_name');
    const cardViewMore = item.querySelector('.work-item_view-more');
    const cardVideo = item.querySelector('.work-item_video') as HTMLVideoElement;
    const cardImage = item.querySelector('.work-item_image');
    const cardVideoOverlay = item.querySelector('.work-item_bg-wrap');

    const animation = gsap.timeline();

    if (!cardVideo.src.includes('webflow.io') && !cardVideo.src.includes('buttercreations.com')) {
      // console.log('link set');
      if (cardVideo.paused) {
        cardVideo.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      }
      animation.set(cardImage, { opacity: 0 });
    }

    // animation.to(cardLabel, { opacity: 1, y: '0%', ease: 'power4.out' });
    animation.to(
      cardTitle,
      { duration: 1.5, opacity: 0, y: '-100%', rotate: '10deg', ease: 'power4.out' },
      '<'
    );
    animation.to(
      cardViewMore,
      { duration: 1.5, opacity: 1, y: '0%', rotate: '0deg', ease: 'power4.out' },
      '<'
    );
    animation.to([cardVideo, cardImage], { duration: 1, scale: 1.15, ease: 'power4.out' }, '<');
    animation.to(cardVideoOverlay, { duration: 1, opacity: '10%', ease: 'power4.out' }, '<');
  }

  function hoverOut(item: HTMLElement) {
    const cardLabel = item.querySelector('.work-item_label-wrap');
    const cardTitle = item.querySelector('.work-item_name');
    const cardViewMore = item.querySelector('.work-item_view-more');
    const cardVideo = item.querySelector('.work-item_video') as HTMLVideoElement;
    const cardImage = item.querySelector('.work-item_image');
    const cardVideoOverlay = item.querySelector('.work-item_bg-wrap');

    if (!cardVideo.paused) {
      cardVideo.pause();
    }

    const animation = gsap.timeline();

    animation.set(cardImage, { opacity: 1 });
    // animation.to(cardLabel, { opacity: 0, y: '100%', ease: 'power4.out' });
    animation.to(
      cardTitle,
      { duration: 1.5, opacity: 1, y: '0%', rotate: '0deg', ease: 'power4.out' },
      '<'
    );
    animation.to(
      cardViewMore,
      { duration: 1.5, opacity: 0, y: '100%', rotate: '10deg', ease: 'power4.out' },
      '<'
    );
    animation.to([cardVideo, cardImage], { duration: 1, scale: 1, ease: 'power4.out' }, '<');
    animation.to(cardVideoOverlay, { duration: 1, opacity: '40%', ease: 'power4.out' }, '<');

    cardVideo.currentTime = 0;
  }
};
