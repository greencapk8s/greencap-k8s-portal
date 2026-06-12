import { translations as heroTranslations } from '../texts/hero.js';
import { translations as previewTranslations } from '../texts/preview.js';

const translations = Object.fromEntries(
  Object.keys(heroTranslations).map(language => [
    language,
    { ...heroTranslations[language], ...previewTranslations[language] }
  ])
);

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
    btnStar: document.getElementById('btn-star-text'),
    previewTitle: document.getElementById('preview-title'),
    previewClusters: document.getElementById('preview-clusters'),
    previewWorkloads: document.getElementById('preview-workloads'),
    previewTopology: document.getElementById('preview-topology')
  };

  if (elements.subtitle) elements.subtitle.textContent = texts.subtitle;
  if (elements.description) elements.description.textContent = texts.description;
  if (elements.btnGithub) elements.btnGithub.textContent = texts.btnGithub;
  if (elements.btnStar) elements.btnStar.textContent = texts.btnStar;
  if (elements.previewTitle) elements.previewTitle.textContent = texts.previewTitle;

  if (elements.previewClusters) {
    elements.previewClusters.querySelector('figcaption').textContent = texts.previewClustersCaption;
    elements.previewClusters.querySelector('img').alt = texts.previewClustersAlt;
  }
  if (elements.previewWorkloads) {
    elements.previewWorkloads.querySelector('figcaption').textContent = texts.previewWorkloadsCaption;
    elements.previewWorkloads.querySelector('img').alt = texts.previewWorkloadsAlt;
  }
  if (elements.previewTopology) {
    elements.previewTopology.querySelector('figcaption').textContent = texts.previewTopologyCaption;
    elements.previewTopology.querySelector('img').alt = texts.previewTopologyAlt;
  }
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
