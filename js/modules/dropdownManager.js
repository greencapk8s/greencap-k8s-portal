let isOpen = false;

export const openDropdown = (toggleButton, dropdownMenu) => {
  dropdownMenu.classList.remove('hidden');
  dropdownMenu.classList.add('show');
  toggleButton.classList.add('active');
  isOpen = true;
};

export const closeDropdown = (toggleButton, dropdownMenu) => {
  dropdownMenu.classList.remove('show');
  dropdownMenu.classList.add('hidden');
  toggleButton.classList.remove('active');
  isOpen = false;
};

export const toggleDropdown = (toggleButton, dropdownMenu) => {
  if (isOpen) {
    closeDropdown(toggleButton, dropdownMenu);
  } else {
    openDropdown(toggleButton, dropdownMenu);
  }
};

export const isDropdownOpen = () => isOpen;

export const setupDropdownEvents = (toggleButton, dropdownMenu) => {
  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(toggleButton, dropdownMenu);
  });

  document.addEventListener('click', (e) => {
    if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      closeDropdown(toggleButton, dropdownMenu);
    }
  });
};
