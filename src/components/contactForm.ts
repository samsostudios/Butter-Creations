export const contactForm = () => {
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];

  for (const i in filterCheckboxes) {
    const tempCheckbox = filterCheckboxes[i] as HTMLInputElement;

    tempCheckbox.addEventListener('click', (e) => {
      const clickedCheckbox = e.target as HTMLInputElement;
      const clickedParent = clickedCheckbox.parentElement as HTMLElement;
      const clickedSpan = clickedParent.querySelector('span') as HTMLElement;

      // reset current
      for (const i in filterCheckboxes) {
        const temp = filterCheckboxes[i] as HTMLInputElement;
        const tempParent = temp.parentElement as HTMLElement;
        const tempSpan = tempParent.querySelector('span') as HTMLElement;

        tempSpan.style.color = '#1e1e1e';
      }

      clickedSpan.style.color = '#ffffff';
    });
  }
};
