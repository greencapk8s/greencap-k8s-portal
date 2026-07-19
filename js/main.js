(function () {
  'use strict';

  var translations = window.GreenCapTranslations || {};

  // Tags BCP 47 canonicas para o atributo lang do documento.
  var htmlLangTags = {
    'pt-br': 'pt-BR',
    en: 'en'
  };

  var currentLanguage = 'pt-br';

  function getSavedLanguage() {
    return localStorage.getItem('language') || 'pt-br';
  }

  function getCurrentLanguage() {
    return currentLanguage;
  }

  function getTranslations(language) {
    return translations[language] || {};
  }

  function updateLanguageDisplay(language, currentLanguageSpan) {
    var languageText = language === 'pt-br' ? '🇧🇷 Português' : '🇺🇸 English';
    currentLanguageSpan.textContent = languageText;

    document.querySelectorAll('.language-option').forEach(function (option) {
      option.classList.remove('selected');
    });

    var selectedOption = document.querySelector('[data-lang="' + language + '"]');
    if (selectedOption) {
      selectedOption.classList.add('selected');
    }
  }

  function updatePageContent(language) {
    var texts = translations[language];
    if (!texts) {
      return;
    }

    // Sem isto a pagina inteira continua declarada como pt-br em ingles:
    // leitores de tela aplicam a pronuncia errada e buscadores indexam
    // o conteudo com o idioma trocado.
    document.documentElement.lang = htmlLangTags[language] || language;

    if (texts.pageTitle !== undefined) {
      document.title = texts.pageTitle;
    }

    // A <meta name="description"> e' deixada estatica em pt-br de proposito:
    // o Google indexa esta URL unica no idioma padrao, entao o snippet nao
    // deve trocar com o seletor de idioma (client-side).

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (texts[key] !== undefined) el.textContent = texts[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (texts[key] !== undefined) el.alt = texts[key];
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (texts[key] !== undefined) el.setAttribute('aria-label', texts[key]);
    });
  }

  function setLanguage(language, currentLanguageSpan) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    updateLanguageDisplay(language, currentLanguageSpan);
    updatePageContent(language);
  }

  function initializeLanguage(currentLanguageSpan) {
    var savedLanguage = getSavedLanguage();
    currentLanguage = savedLanguage;
    updateLanguageDisplay(savedLanguage, currentLanguageSpan);
    updatePageContent(savedLanguage);
  }

  var dropdownOpen = false;

  function openDropdown(toggleButton, dropdownMenu) {
    dropdownMenu.classList.remove('hidden');
    dropdownMenu.classList.add('show');
    toggleButton.classList.add('active');
    toggleButton.setAttribute('aria-expanded', 'true');
    dropdownOpen = true;
  }

  function closeDropdown(toggleButton, dropdownMenu) {
    dropdownMenu.classList.remove('show');
    dropdownMenu.classList.add('hidden');
    toggleButton.classList.remove('active');
    toggleButton.setAttribute('aria-expanded', 'false');
    dropdownOpen = false;
  }

  function setupDropdownEvents(toggleButton, dropdownMenu) {
    toggleButton.addEventListener('click', function (e) {
      e.stopPropagation();
      if (dropdownOpen) {
        closeDropdown(toggleButton, dropdownMenu);
      } else {
        openDropdown(toggleButton, dropdownMenu);
      }
    });

    document.addEventListener('click', function (e) {
      if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        closeDropdown(toggleButton, dropdownMenu);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdownOpen) {
        closeDropdown(toggleButton, dropdownMenu);
        toggleButton.focus();
      }
    });
  }

  function toggleLanguage() {
    var languageToggle = document.getElementById('language-toggle');
    var languageOptions = document.getElementById('language-options');
    var currentLanguageSpan = document.getElementById('current-language');

    if (!languageToggle || !languageOptions || !currentLanguageSpan) {
      return;
    }

    setupDropdownEvents(languageToggle, languageOptions);
    initializeLanguage(currentLanguageSpan);

    document.querySelectorAll('.language-option').forEach(function (option) {
      option.addEventListener('click', function (e) {
        e.stopPropagation();
        var language = option.getAttribute('data-lang');

        setLanguage(language, currentLanguageSpan);
        closeDropdown(languageToggle, languageOptions);
        languageToggle.focus();
      });
    });
  }

  function initImageLightbox() {
    var overlay = document.getElementById('lightbox-overlay');
    var overlayImage = document.getElementById('lightbox-image');
    var overlayCaption = document.getElementById('lightbox-caption');
    var closeButton = document.getElementById('lightbox-close');
    var prevButton = document.getElementById('lightbox-prev');
    var nextButton = document.getElementById('lightbox-next');
    var dotsContainer = document.getElementById('lightbox-dots');
    var previewCards = document.querySelectorAll('.preview-card');

    if (!overlay || !overlayImage || !closeButton || previewCards.length === 0) {
      return;
    }

    var slides = Array.prototype.map.call(previewCards, function (card) {
      return {
        img: card.querySelector('img'),
        caption: card.querySelector('figcaption')
      };
    });

    var currentIndex = 0;
    var dots = [];

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      var slide = slides[currentIndex];
      overlayImage.src = slide.img.src;
      overlayImage.alt = slide.img.alt;
      if (overlayCaption) {
        overlayCaption.textContent = slide.caption ? slide.caption.textContent : '';
      }
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === currentIndex);
      });
    }

    if (dotsContainer) {
      slides.forEach(function (_, index) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'lightbox-dot';
        dot.addEventListener('click', function () {
          showSlide(index);
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
    }

    // Rotula os dots com a legenda da propria imagem em vez de "1", "2", "3".
    // Lido do DOM a cada abertura, entao acompanha a troca de idioma de graca.
    function updateDotLabels() {
      dots.forEach(function (dot, index) {
        var caption = slides[index].caption;
        dot.setAttribute('aria-label', caption ? caption.textContent.trim() : String(index + 1));
      });
    }

    var lastFocusedElement = null;

    function openLightbox(index) {
      lastFocusedElement = document.activeElement;
      updateDotLabels();
      showSlide(index);
      overlay.classList.add('show');
      closeButton.focus();
    }

    function closeLightbox() {
      overlay.classList.remove('show');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
      lastFocusedElement = null;
    }

    slides.forEach(function (slide, index) {
      // As screenshots sao <img> com handler de clique, logo invisiveis para
      // o teclado. Promove cada uma a controle focavel sem alterar o markup.
      slide.img.setAttribute('role', 'button');
      slide.img.setAttribute('tabindex', '0');

      slide.img.addEventListener('click', function () {
        openLightbox(index);
      });

      slide.img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });

    closeButton.addEventListener('click', closeLightbox);

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        showSlide(currentIndex - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', function () {
        showSlide(currentIndex + 1);
      });
    }

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('show')) {
        return;
      }
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
    });

    var touchStartX = 0;

    overlay.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    overlay.addEventListener('touchend', function (e) {
      var deltaX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 50) {
        showSlide(currentIndex + (deltaX < 0 ? 1 : -1));
      }
    }, { passive: true });
  }

  function initCopyCommand() {
    var button = document.getElementById('cta-copy-button');
    var codeEl = document.getElementById('cta-command');

    if (!button || !codeEl) {
      return;
    }

    button.addEventListener('click', function () {
      if (!navigator.clipboard) {
        return;
      }

      navigator.clipboard.writeText(codeEl.textContent.trim()).then(function () {
        var texts = getTranslations(getCurrentLanguage());
        button.classList.add('is-copied');
        button.setAttribute('aria-label', texts.ctaCopiedLabel);

        setTimeout(function () {
          button.classList.remove('is-copied');
          button.setAttribute('aria-label', texts.ctaCopyLabel);
        }, 1800);
      }).catch(function () {
        // clipboard write blocked (permissions/insecure context) — nothing to fall back to
      });
    });
  }

  function initModules() {
    toggleLanguage();
    initImageLightbox();
    initCopyCommand();
  }

  initModules();
})();
