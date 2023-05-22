import { gsap } from 'gsap';

export const clientSlider = () => {
  const sliderSection = document.querySelector('.section_clients-slider') as HTMLElement;
  const sliderWrapper = sliderSection.querySelector('.clients-slider_wrapper') as HTMLElement;
  const sliderTop = sliderSection.querySelector('.clients-slider_list.is-top') as HTMLElement;
  const sliderBottom = sliderSection.querySelector('.clients-slider_list.is-bottom') as HTMLElement;

  const dataScrollTime = sliderSection.dataset.movementTime;

  const sliderWidth = sliderTop.scrollWidth;
  const wrapperWidth = sliderWrapper.offsetWidth;
  const computedMovement = sliderWidth - wrapperWidth;

  // console.log(computedMovement);

  const animation = gsap.timeline({
    yoyo: true,
    repeat: -1,
  });
  animation.set(sliderBottom, { x: -computedMovement });

  animation.to(sliderTop, { duration: dataScrollTime, x: -computedMovement, ease: 'linear' });
  animation.to(sliderBottom, { duration: dataScrollTime, x: 0, ease: 'linear' }, '<');

  //   console.log(sliderTop, sliderBottom);
};
