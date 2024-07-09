import { gsap } from 'gsap';

export const workTestimonials = () => {
  const wTestimonialComponent = document.querySelector(
    '.work-testimonials_component'
  ) as HTMLElement;

  if (!wTestimonialComponent) {
    console.log('WARN:// Missing Testimonials UI');
    return;
  }

  const wTestimonialsItems = [...wTestimonialComponent.querySelectorAll('.work-testimonials_item')];
  const wIndicators = [...wTestimonialComponent.querySelectorAll('.work-testimonials_indicator')];

  let currentIndex = 0;
  const delayTime = parseInt(wTestimonialComponent.dataset.slideDelay as string);
  const duration = parseInt(wTestimonialComponent.dataset.slideSpeed as string);
  const maxIndex = wTestimonialsItems.length;

  const animateTestimonial = (index: number) => {
    const currentTestimonial = wTestimonialsItems[index];
    const currentIndicator = wIndicators[index];
    const nextIndex = (index + 1) % wTestimonialsItems.length;
    const nextTestimonial = wTestimonialsItems[nextIndex];
    const nextIndicator = wIndicators[nextIndex];

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.delayedCall(delayTime, () => {
          currentIndex = nextIndex;
          animateTestimonial(nextIndex);
        });
      },
    });

    tl.set(nextTestimonial, { opacity: 0 });
    tl.to(currentTestimonial, { opacity: 0, duration: duration, ease: 'power4.in' });
    tl.to(
      nextTestimonial,
      { x: '0%', opacity: 1, duration: duration, ease: 'power4.out' },
      `-=${duration}`
    );
    currentIndicator.classList.remove('is-active');
    nextIndicator.classList.add('is-active');
  };

  // Initialize testimonials' positions and visibility
  wTestimonialsItems.forEach((testimonial, index) => {
    gsap.set(testimonial, { opacity: index === 0 ? 1 : 0 });
  });

  // Start the animation
  animateTestimonial(currentIndex);
};
