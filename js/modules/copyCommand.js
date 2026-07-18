import { getCurrentLanguage, getTranslations } from './languageManager.js';

function initCopyCommand() {
  const button = document.getElementById('cta-copy-button');
  const codeEl = document.getElementById('cta-command');

  if (!button || !codeEl) {
    return;
  }

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeEl.textContent.trim());
    } catch {
      return;
    }

    const texts = getTranslations(getCurrentLanguage());
    button.classList.add('is-copied');
    button.setAttribute('aria-label', texts.ctaCopiedLabel);

    setTimeout(() => {
      button.classList.remove('is-copied');
      button.setAttribute('aria-label', texts.ctaCopyLabel);
    }, 1800);
  });
}

export { initCopyCommand };
