import { translations as heroTranslations } from '../texts/hero.js';
import { translations as previewTranslations } from '../texts/preview.js';
import { translations as problemTranslations } from '../texts/problem.js';
import { translations as solutionTranslations } from '../texts/solution.js';
import { translations as howItWorksTranslations } from '../texts/howItWorks.js';
import { translations as stackTranslations } from '../texts/stack.js';
import { translations as featuresTranslations } from '../texts/features.js';
import { translations as securityTranslations } from '../texts/security.js';
import { translations as comparisonTranslations } from '../texts/comparison.js';
import { translations as audienceTranslations } from '../texts/audience.js';
import { translations as socialProofTranslations } from '../texts/socialProof.js';
import { translations as ctaTranslations } from '../texts/cta.js';

const textModules = [
  heroTranslations,
  previewTranslations,
  problemTranslations,
  solutionTranslations,
  howItWorksTranslations,
  stackTranslations,
  featuresTranslations,
  securityTranslations,
  comparisonTranslations,
  audienceTranslations,
  socialProofTranslations,
  ctaTranslations
];

const translations = Object.fromEntries(
  Object.keys(heroTranslations).map(language => [
    language,
    Object.assign({}, ...textModules.map(module => module[language]))
  ])
);

let currentLanguage = 'pt-br';

export const getSavedLanguage = () => {
  return localStorage.getItem('language') || 'pt-br';
};

export const getCurrentLanguage = () => currentLanguage;

export const getTranslations = (language) => translations[language] || {};

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

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key] !== undefined) el.textContent = texts[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (texts[key] !== undefined) el.alt = texts[key];
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (texts[key] !== undefined) el.setAttribute('aria-label', texts[key]);
  });
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
