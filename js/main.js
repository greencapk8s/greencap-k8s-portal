import { toggleLanguage } from './modules/toggleLanguage.js';
import { initImageLightbox } from './modules/imageLightbox.js';

function initModules() {
  toggleLanguage();
  initImageLightbox();
}

initModules();
