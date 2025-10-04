import { translations } from '../texts/hero.js';

function toggleLanguage() {
  const languageSelect = document.getElementById('languageSelect');

  if (!languageSelect) {
    alert(translations[languageSelect.value].notfound);
  }

  function updateLanguage(language) {
    const texts = translations[language];
    if (!texts) {
      return;
    }

    const subtitle = document.getElementById('hero-subtitle');
    const description = document.getElementById('hero-description');
    const btnGithub = document.getElementById('btn-github-text');
    const btnStar = document.getElementById('btn-star-text');

    if (subtitle) subtitle.textContent = texts.subtitle;
    if (description) description.textContent = texts.description;
    if (btnGithub) btnGithub.textContent = texts.btnGithub;
    if (btnStar) btnStar.textContent = texts.btnStar;
    localStorage.setItem('language', language);
  }

  languageSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
  });

  const savedLanguage = localStorage.getItem('language') || 'pt-br';
  languageSelect.value = savedLanguage;
  updateLanguage(savedLanguage);
}

export { toggleLanguage };
