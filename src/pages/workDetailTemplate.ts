export const workDetailTemplate = () => {
  // Page Globals
  // ------------
  // console.log('work template');
  const mainVideo = document.querySelector('.vimeo-embed_container') as HTMLElement;
  const mainVideoAspect = document.querySelector('.work-hero_aspect-ratio')?.innerHTML;

  if (mainVideoAspect === '21:9') {
    mainVideo.style.paddingBottom = '42.85%';
  }
};
