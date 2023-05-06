import { gsap } from 'gsap';

export const videoCards = () => {
  const cards = [...document.querySelectorAll('[data-video-card]')];

  initCards();

  for (const i in cards) {
    const tempCard = cards[i] as HTMLElement;

    tempCard.addEventListener('mouseenter', (e) => {
      // console.log('enter');
      hoverIn(tempCard);
    });
    tempCard.addEventListener('mouseleave', (e) => {
      // console.log('leave');
      hoverOut(tempCard);
    });
  }

  console.log(cards);

  // Helper Functions
  function initCards() {
    const cardLabels = [...document.querySelectorAll('.work-item_label-wrap')];
    const cardViewMore = [...document.querySelectorAll('.work-item_view-more')];
    const tempVideo = [...document.querySelectorAll('.work-item_video')];

    gsap.set([cardLabels, cardViewMore], { y: '100%', opacity: 0 });
    gsap.set(cardViewMore, { rotate: '5deg' });
  }
  function hoverIn(item: HTMLElement) {
    const cardLabel = item.querySelector('.work-item_label-wrap');
    const cardTitle = item.querySelector('.work-item_name');
    const cardViewMore = item.querySelector('.work-item_view-more');
    const cardVideo = item.querySelector('.work-item_video') as HTMLVideoElement;
    const cardVideoOverlay = item.querySelector('.work-item_bg-wrap');

    cardVideo.play();

    const animation = gsap.timeline();

    animation.to(cardLabel, { opacity: 1, y: '0%', ease: 'power4.out' });
    animation.to(
      cardTitle,
      { duration: 1, opacity: 0, y: '-100%', rotate: '5deg', ease: 'power4.out' },
      '<'
    );
    animation.to(
      cardViewMore,
      { duration: 1, opacity: 1, y: '0%', rotate: '0deg', ease: 'power4.out' },
      '<'
    );
    animation.to(cardVideo, { duration: 1, scale: 1.15, ease: 'power4.out' }, '<');
    animation.to(cardVideoOverlay, { duration: 1, opacity: '10%', ease: 'power4.out' }, '<');
  }

  function hoverOut(item: HTMLElement) {
    const cardLabel = item.querySelector('.work-item_label-wrap');
    const cardTitle = item.querySelector('.work-item_name');
    const cardViewMore = item.querySelector('.work-item_view-more');
    const cardVideo = item.querySelector('.work-item_video') as HTMLVideoElement;
    const cardVideoOverlay = item.querySelector('.work-item_bg-wrap');

    cardVideo.pause();

    const animation = gsap.timeline();

    animation.to(cardLabel, { opacity: 0, y: '100%', ease: 'power4.out' });
    animation.to(
      cardTitle,
      { duration: 1, opacity: 1, y: '0%', rotate: '0deg', ease: 'power4.out' },
      '<'
    );
    animation.to(
      cardViewMore,
      { duration: 1, opacity: 0, y: '100%', rotate: '5deg', ease: 'power4.out' },
      '<'
    );
    animation.to(cardVideo, { duration: 1, scale: 1, ease: 'power4.out' }, '<');
    animation.to(cardVideoOverlay, { duration: 1, opacity: '40%', ease: 'power4.out' }, '<');
  }
};
