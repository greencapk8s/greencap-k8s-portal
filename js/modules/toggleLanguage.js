import {
  setupDropdownEvents,
  closeDropdown
} from './dropdownManager.js';
import {
  setLanguage,
  initializeLanguage
} from './languageManager.js';

function toggleLanguage() {
  const languageToggle = document.getElementById('language-toggle');
  const languageOptions = document.getElementById('language-options');
  const currentLanguageSpan = document.getElementById('current-language');

  if (!languageToggle || !languageOptions || !currentLanguageSpan) {
    return;
  }

  setupDropdownEvents(languageToggle, languageOptions);
  initializeLanguage(currentLanguageSpan);

  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const language = option.getAttribute('data-lang');

      setLanguage(language, currentLanguageSpan);
      closeDropdown(languageToggle, languageOptions);
    });
  });
}

export { toggleLanguage };
