import { translations } from '../texts/hero.js';

let currentLanguage = 'pt-br';

export const getSavedLanguage = () => {
  return localStorage.getItem('language') || 'pt-br';
};

export const getCurrentLanguage = () => currentLanguage;

export const updateLanguageDisplay = (language, currentLanguageSpan) => {
  const languageText = language === 'pt-br' ? '🇧🇷 Português' : '🇺🇸 English';
  currentLanguageSpan.textContent = languageText;

  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('selected');
  });

  const selectedOption = document.querySelector(`[data-lang="${language}"]`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
};

export const updatePageContent = (language) => {
  const texts = translations[language];
  if (!texts) {
    return;
  }

  const elements = {
    subtitle: document.getElementById('hero-subtitle'),
    description: document.getElementById('hero-description'),
    btnGithub: document.getElementById('btn-github-text'),
    btnStar: document.getElementById('btn-star-text')
  };

  if (elements.subtitle) elements.subtitle.textContent = texts.subtitle;
  if (elements.description) elements.description.textContent = texts.description;
  if (elements.btnGithub) elements.btnGithub.textContent = texts.btnGithub;
  if (elements.btnStar) elements.btnStar.textContent = texts.btnStar;
};

export const setLanguage = (language, currentLanguageSpan) => {
  currentLanguage = language;
  localStorage.setItem('language', language);
  updateLanguageDisplay(language, currentLanguageSpan);
  updatePageContent(language);
};

export const initializeLanguage = (currentLanguageSpan) => {
  const savedLanguage = getSavedLanguage();
  currentLanguage = savedLanguage;
  updateLanguageDisplay(savedLanguage, currentLanguageSpan);
  updatePageContent(savedLanguage);
};
