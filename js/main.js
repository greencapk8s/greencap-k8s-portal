import { toggleLanguage } from './modules/toggleLanguage.js';
import { initImageLightbox } from './modules/imageLightbox.js';
import { initCopyCommand } from './modules/copyCommand.js';

function initModules() {
  toggleLanguage();
  initImageLightbox();
  initCopyCommand();
}

initModules();
