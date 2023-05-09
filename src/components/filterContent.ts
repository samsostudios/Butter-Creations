import { filterReveal } from '$motion/filterReveal';

export const filterContent = () => {
  let activeFilters: string[] = [];
  let renderQueue: Element[] = [];
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];

  const initialFilter = filterCheckboxes[0].parentElement as HTMLElement;
  updateInitialCheckbox(initialFilter, 'show');

  for (const i in filterCheckboxes) {
    const tempCheckbox = filterCheckboxes[i] as HTMLInputElement;

    tempCheckbox.addEventListener('click', (e) => {
      const clickedCheckbox = e.target as HTMLInputElement;
      const clickedParent = clickedCheckbox.parentElement as HTMLElement;
      const clickedSpan = clickedParent.querySelector('span') as HTMLElement;
      const filterText = clickedSpan.innerHTML as string;

      renderQueue = masterList;

      if (clickedCheckbox.checked === true) {
        clickedSpan.style.color = '#ffffff';

        if (filterText !== 'All') {
          activeFilters = [];
          activeFilters.push(filterText);
          const tempList = filterList(renderQueue, activeFilters);
          renderQueue = tempList;
          hideAll();
          filterReveal(renderQueue);
          // renderUpdate(renderQueue);
          checkReset(activeFilters[0]);
          updateInitialCheckbox(initialFilter, 'hide');
        }

        if (filterText === 'All') {
          activeFilters = [];
          renderQueue = masterList;
          hideAll();
          filterReveal(renderQueue);
          // renderUpdate(renderQueue);
          allReset();
        }
      } else {
        clickedSpan.style.color = '#1e1e1e';

        if (filterText !== 'All') {
          const updatedFilters = activeFilters.filter((item) => item !== filterText);
          activeFilters = updatedFilters;

          if (activeFilters.length < 1) {
            hideAll();
            filterReveal(renderQueue);
            // renderUpdate(renderQueue);
            updateInitialCheckbox(initialFilter, 'show');
          } else {
            const tempList = filterList(renderQueue, activeFilters);
            renderQueue = tempList;
            hideAll();
            filterReveal(renderQueue);
            // renderUpdate(renderQueue);
          }
        }
      }
    });
  }
};

function renderUpdate(items: Element[]) {
  hideAll();

  for (const i in items) {
    items[i].classList.remove('hide');
  }
}

function filterList(items: Element[], filters: string[]) {
  const filteredList = items.filter((item) => {
    const itemTemp = item as HTMLElement;
    const itemType = itemTemp.querySelector('[data-filter-item-type]')?.innerHTML as string;
    if (filters.includes(itemType)) {
      return itemTemp;
    }
  });
  return filteredList;
}

function hideAll() {
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  for (const item of masterList) {
    const temp = item as HTMLElement;
    temp.style.display = 'none';
  }
}

function updateInitialCheckbox(initialFilter: Element, setState: string) {
  // console.log('updated', initialFilter);
  const checkboxContainer = initialFilter.children[0] as HTMLElement;
  const checkboxInput = initialFilter.children[1] as HTMLInputElement;
  const checkboxText = initialFilter.children[2] as HTMLElement;

  if (setState === 'hide') {
    checkboxInput.checked = false;
    checkboxContainer.classList.remove('w--redirected-checked');
    checkboxText.style.color = '#1e1e1e';
  } else if (setState === 'show') {
    checkboxInput.checked = true;
    checkboxContainer.classList.add('w--redirected-checked');
    checkboxText.style.color = '#ffffff';
  }
}

function checkReset(curFilter: string) {
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];
  for (let i = 0; i < filterCheckboxes.length; i++) {
    const temp = filterCheckboxes[i] as HTMLInputElement;
    const tempParent = temp.parentElement as HTMLElement;
    const tempContainer = tempParent.children[0] as HTMLElement;
    const tempText = tempParent.childNodes[2] as HTMLElement;
    const checkText = tempText.innerHTML as string;

    if (checkText !== curFilter) {
      temp.checked = false;
      tempContainer.classList.remove('w--redirected-checked');
      tempText.style.color = '#1e1e1e';
    }
  }
}

function allReset() {
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];

  for (let i = 0; i < filterCheckboxes.length; i++) {
    const temp = filterCheckboxes[i] as HTMLInputElement;
    const tempParent = temp.parentElement as HTMLElement;
    const tempContainer = tempParent.children[0] as HTMLElement;
    const tempText = tempParent.childNodes[2] as HTMLElement;

    if (i !== 0) {
      temp.checked = false;
      tempContainer.classList.remove('w--redirected-checked');
      tempText.style.color = '#1e1e1e';
    }
  }
}
