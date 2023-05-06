import { gsap } from 'gsap';

export const testimonialsSlider = () => {
  const testimonialsSection = document.querySelector('.clients_testimonials') as HTMLElement;
  const testimonialsList = testimonialsSection.querySelector('.testimonials_list') as HTMLElement;
  const testimonialItems = [...testimonialsSection.querySelectorAll('.testimonials_item')];
  const sliderPrev = testimonialsSection.querySelector(
    '.testimonials_button.is-prev'
  ) as HTMLElement;
  const sliderNext = testimonialsSection.querySelector(
    '.testimonials_button.is-next'
  ) as HTMLElement;

  const moveWidth = testimonialsList.offsetWidth;

  let curIndex = 0;
  let prevIndex = 0;
  const itemCount = testimonialItems.length;

  initSlider();

  sliderPrev.addEventListener('click', () => {
    curIndex -= 1;
    prevIndex = curIndex + 1;
    if (curIndex < 0) {
      curIndex = itemCount - 1;
    }

    showPrev(curIndex, prevIndex);
  });
  sliderNext.addEventListener('click', () => {
    curIndex += 1;
    prevIndex = curIndex - 1;
    if (curIndex > itemCount - 1) {
      curIndex = 0;
    }

    showNext(curIndex, prevIndex);
  });

  function initSlider() {
    // console.log(moveWidth);
    for (let i = 0; i < testimonialItems.length; i++) {
      if (i > 0) {
        const tempItem = testimonialItems[i] as HTMLElement;
        gsap.set(tempItem, { x: -moveWidth });
      }
    }
  }

  function showNext(curIndex: number, prevIndex: number) {
    const curItem = testimonialItems[curIndex];
    const prevItem = testimonialItems[prevIndex];

    const animation = gsap.timeline();
    animation.set(curItem, { x: -moveWidth });
    animation.to(curItem, { duration: 1, x: 0, ease: 'power4.out' });
    animation.to(prevItem, { duration: 1, x: moveWidth, ease: 'power4.out' }, '<');

    animation.set(prevItem, { x: -moveWidth });

    //   console.log('nex', curItem, prevItem);
  }
  function showPrev(curIndex: number, prevIndex: number) {
    const curItem = testimonialItems[curIndex];
    const prevItem = testimonialItems[prevIndex];

    const animation = gsap.timeline();
    animation.set(curItem, { x: moveWidth });

    animation.to(curItem, { duration: 1, x: 0, ease: 'power4.out' });
    animation.to(prevItem, { duration: 1, x: -moveWidth, ease: 'power4.out' }, '<');

    animation.set(prevItem, { x: moveWidth });
  }
};
