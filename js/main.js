(function () {
  'use strict';

  var translations = {
    'pt-br': {
      // Hero
      subtitle: 'Gestão Simples de Clusters Kubernetes',
      description: 'Plataforma web para gerenciar os clusters Kubernetes que você já tem — workloads, redes, armazenamento, escalonamento e mais, com permissões por usuário. Uma alternativa leve a ferramentas como OpenShift e Rancher, ideal para estudo, desenvolvimento e testes em pequenas e médias equipes.',
      btnGithub: 'Ver no GitHub',
      btnStar: 'Deixe sua estrela no GitHub',

      // Preview
      previewTitle: 'Conheça a Plataforma',
      previewClustersCaption: 'Registre seus clusters em poucos cliques',
      previewClustersAlt: 'Tela de Clusters do GreenCap K8s',
      previewWorkloadsCaption: 'Gerencie workloads — escale, reinicie e acompanhe o status',
      previewWorkloadsAlt: 'Tela de Deployments do GreenCap K8s',
      previewTopologyCaption: 'Visualize a topologia dos seus recursos',
      previewTopologyAlt: 'Tela de Topologia do GreenCap K8s',
      lightboxPrevLabel: 'Imagem anterior',
      lightboxNextLabel: 'Próxima imagem',

      // Problema
      problemEyebrow: 'O Problema',
      problemTitle: 'Você não precisa de uma plataforma enterprise para aprender Kubernetes.',
      problemItem1Title: 'Complexidade excessiva',
      problemItem1Text: 'OpenShift e Rancher trazem camadas pensadas para operações enterprise, não para times pequenos ou estudantes.',
      problemItem2Title: 'Infraestrutura pesada',
      problemItem2Text: 'Exigem componentes adicionais só para funcionar — custo operacional alto para clusters de estudo, dev e teste.',
      problemItem3Title: 'Curva de aprendizado alta',
      problemItem3Text: 'Ferramentas construídas para especialistas, não para iniciantes.',

      // Solução
      solutionEyebrow: 'A Solução',
      solutionTitle: 'Uma UI leve e plug-and-play sobre o Kubernetes que você já opera',
      solutionIsTitle: 'O que é',
      solutionIsItem1: 'Monólito Spring Boot dockerizado — plug-and-play',
      solutionIsItem2: 'Gerenciador ativo de clusters existentes (não provisiona clusters novos)',
      solutionIsItem3: 'Executa ações reais: criar, escalar, reiniciar, suspender, disparar',
      solutionIsItem4: 'Autorização 100% via RBAC nativo do Kubernetes',
      solutionIsNotTitle: 'O que não é',
      solutionIsNotItem1: 'Não provisiona clusters — você traz o seu (minikube, kind, gerenciado, on-prem)',
      solutionIsNotItem2: 'Não é somente leitura',
      solutionIsNotItem3: 'Não duplica controle de acesso próprio',
      solutionIsNotItem4: 'Não é uma plataforma enterprise pesada',

      // Como Funciona
      stepsEyebrow: 'Como Funciona',
      stepsTitle: 'Do zero ao deploy em três passos',
      step1Title: 'Registre seu cluster',
      step1Text: 'Cole o kubeconfig ou informe URL + Token — sempre encriptado antes de persistir.',
      step2Title: 'Gerencie visualmente',
      step2Text: 'Topologia, workloads, rede, storage e métricas em tempo real.',
      step3Title: 'Faça deploy',
      step3Text: 'A partir de imagem, Compose, Dockerfile, Helm ou um Template pronto.',

      // Funcionalidades
      featuresEyebrow: 'Funcionalidades',
      featuresTitle: 'Tudo que você precisa para operar clusters no dia a dia',
      featuresGlobalTitle: 'Global — visão de infraestrutura',
      featuresGlobalItem1: 'Múltiplos Clusters e Namespaces',
      featuresGlobalItem2: 'Nodes, PersistentVolumes e StorageClasses',
      featuresGlobalItem3: 'Registry interno de imagens',
      featuresProjectTitle: 'Project — por Namespace',
      featuresProjectItem1: 'Topologia visual interativa',
      featuresProjectItem2: 'Observability: Dashboard, Events, Metrics',
      featuresProjectItem3: 'Workloads: Pods, Deployments, StatefulSets, Jobs, CronJobs',
      featuresProjectItem4: 'Networking, Parameters, Auto Scaling, Storage, Helm',
      featuresDeployTitle: '4 formas de deploy',
      featuresDeployItem1: 'Deploy Application — a partir de imagem',
      featuresDeployItem2: 'Import Compose — traduz docker-compose.yml automaticamente',
      featuresDeployItem3: 'Deploy from Dockerfile — build via Kaniko + deploy em um fluxo',
      featuresDeployItem4: 'Deploy from Helm — wizard guiado',
      featuresDxTitle: 'Developer Experience',
      featuresDxItem1: 'Templates Catalog — apps completas prontas para deploy em 1 clique (ex.: Flask + PostgreSQL, MongoDB cache-aside)',
      featuresDxItem2: 'Kubernetes Operators via OLM — catálogo, instalação e status em tempo real',

      // Stack
      stackEyebrow: 'Stack Tecnológica',
      stackTitle: 'Construído com ferramentas que devs já confiam',
      stackItem1Role: 'Virtual Threads',
      stackItem2Role: 'Core da aplicação',
      stackItem3Role: 'UI reativa server-side',
      stackItem4Role: '+ Flyway migrations',
      stackItem5Role: 'Integração nativa com a API do Kubernetes',
      stackItem6Role: 'Kotlin DSL',
      stackItem7Role: 'Editor YAML embutido',
      stackItem8Role: 'Releases nativas',
      stackItem9Role: 'Build de imagens sem Docker daemon',

      // Segurança
      securityEyebrow: 'Segurança',
      securityTitle: 'Sem sistema de permissões paralelo',
      securityItem1Title: 'Kubeconfig encriptado',
      securityItem1Text: 'Sempre encriptado antes de persistir.',
      securityItem2Title: 'RBAC nativo do Kubernetes',
      securityItem2Text: 'Cada usuário opera via ServiceAccount própria.',
      securityItem3Title: 'Uma única fonte de verdade',
      securityItem3Text: 'Sem duplicar controle de acesso — o RBAC do seu cluster manda.',

      // Diferenciais
      comparisonEyebrow: 'Diferenciais',
      comparisonTitle: 'A mesma tarefa, sem a mesma dor de cabeça',
      comparisonColCriteria: 'Critério',
      comparisonColOthers: 'OpenShift / Rancher',
      comparisonColGreencap: 'GreenCap K8s',
      comparisonRow1Criteria: 'Setup inicial',
      comparisonRow1Others: 'Horas a dias',
      comparisonRow1Greencap: 'Minutos, um único container',
      comparisonRow2Criteria: 'Custo operacional',
      comparisonRow2Others: 'Alto',
      comparisonRow2Greencap: 'Mínimo',
      comparisonRow3Criteria: 'Curva de aprendizado',
      comparisonRow3Others: 'Alta',
      comparisonRow3Greencap: 'Baixa',
      comparisonRow4Criteria: 'Deploy de aplicação',
      comparisonRow4Others: 'Múltiplos passos manuais',
      comparisonRow4Greencap: '1 clique via Templates',
      comparisonRow5Criteria: 'Licença',
      comparisonRow5Others: 'Comercial / enterprise',
      comparisonRow5Greencap: 'Open source',

      // Público-Alvo
      audienceEyebrow: 'Público-Alvo',
      audienceTitle: 'Feito para quem coloca a mão na massa',
      audienceItem1Title: 'Estudantes de Kubernetes',
      audienceItem1Text: 'Aprenda operando um cluster real, não só lendo teoria.',
      audienceItem2Title: 'Desenvolvedores individuais',
      audienceItem2Text: 'Suba e gerencie seus clusters sem depender de um time de plataforma.',
      audienceItem3Title: 'Times pequenos e médios',
      audienceItem3Text: 'Ambientes de estudo, dev e teste sem overhead enterprise.',

      // Prova Social
      socialProofEyebrow: 'Prova Social',
      socialProofTitle: 'Construído em público, aberto para todos',
      socialProofStat1Label: 'Stars no GitHub',
      socialProofStat2Label: 'Releases publicados',
      socialProofStat3Label: 'Commits',
      socialProofStat4Label: 'Sprints entregues',
      socialProofFooter: 'Backlog e roadmap públicos.',

      // CTA final
      ctaTitle: 'Suba em minutos.',
      ctaCopyLabel: 'Copiar comando',
      ctaCopiedLabel: 'Copiado!',
      ctaLinkGithub: 'GitHub — greencapk8s/greencap-k8s',
      ctaClosing: 'Kubernetes que você já tem. Interface que faltava.'
    },
    'en': {
      // Hero
      subtitle: 'Simple Kubernetes Cluster Management',
      description: 'A web platform for managing the Kubernetes clusters you already have — workloads, networking, storage, scaling and more, with per-user permissions. A lightweight alternative to tools like OpenShift and Rancher, ideal for studying, developing and testing in small and medium teams.',
      btnGithub: 'View on GitHub',
      btnStar: 'Star on GitHub',

      // Preview
      previewTitle: 'See It In Action',
      previewClustersCaption: 'Register your clusters in a few clicks',
      previewClustersAlt: 'GreenCap K8s Clusters screen',
      previewWorkloadsCaption: 'Manage workloads — scale, restart and track status',
      previewWorkloadsAlt: 'GreenCap K8s Deployments screen',
      previewTopologyCaption: 'Visualize the topology of your resources',
      previewTopologyAlt: 'GreenCap K8s Topology screen',
      lightboxPrevLabel: 'Previous image',
      lightboxNextLabel: 'Next image',

      // Problem
      problemEyebrow: 'The Problem',
      problemTitle: 'You don\'t need an enterprise platform to learn Kubernetes.',
      problemItem1Title: 'Excessive complexity',
      problemItem1Text: 'OpenShift and Rancher bring layers built for enterprise operations, not for small teams or students.',
      problemItem2Title: 'Heavy infrastructure',
      problemItem2Text: 'They require extra components just to run — high operational cost for study, dev and test clusters.',
      problemItem3Title: 'Steep learning curve',
      problemItem3Text: 'Tools built for specialists, not for beginners.',

      // Solution
      solutionEyebrow: 'The Solution',
      solutionTitle: 'A lightweight, plug-and-play UI on top of the Kubernetes you already run',
      solutionIsTitle: 'What it is',
      solutionIsItem1: 'A dockerized Spring Boot monolith — plug-and-play',
      solutionIsItem2: 'An active manager for existing clusters (it doesn\'t provision new ones)',
      solutionIsItem3: 'Executes real actions: create, scale, restart, suspend, trigger',
      solutionIsItem4: '100% authorization via native Kubernetes RBAC',
      solutionIsNotTitle: 'What it isn\'t',
      solutionIsNotItem1: 'It doesn\'t provision clusters — you bring your own (minikube, kind, managed, on-prem)',
      solutionIsNotItem2: 'It isn\'t read-only',
      solutionIsNotItem3: 'It doesn\'t duplicate its own access control',
      solutionIsNotItem4: 'It isn\'t a heavy enterprise platform',

      // How It Works
      stepsEyebrow: 'How It Works',
      stepsTitle: 'From zero to deploy in three steps',
      step1Title: 'Register your cluster',
      step1Text: 'Paste the kubeconfig or provide URL + Token — always encrypted before persisting.',
      step2Title: 'Manage it visually',
      step2Text: 'Topology, workloads, networking, storage and real-time metrics.',
      step3Title: 'Deploy',
      step3Text: 'From an image, Compose, Dockerfile, Helm or a ready-made Template.',

      // Features
      featuresEyebrow: 'Features',
      featuresTitle: 'Everything you need to run clusters day to day',
      featuresGlobalTitle: 'Global — infrastructure view',
      featuresGlobalItem1: 'Multiple Clusters and Namespaces',
      featuresGlobalItem2: 'Nodes, PersistentVolumes and StorageClasses',
      featuresGlobalItem3: 'Internal image registry',
      featuresProjectTitle: 'Project — per Namespace',
      featuresProjectItem1: 'Interactive visual topology',
      featuresProjectItem2: 'Observability: Dashboard, Events, Metrics',
      featuresProjectItem3: 'Workloads: Pods, Deployments, StatefulSets, Jobs, CronJobs',
      featuresProjectItem4: 'Networking, Parameters, Auto Scaling, Storage, Helm',
      featuresDeployTitle: '4 ways to deploy',
      featuresDeployItem1: 'Deploy Application — from an image',
      featuresDeployItem2: 'Import Compose — automatically translates docker-compose.yml',
      featuresDeployItem3: 'Deploy from Dockerfile — build via Kaniko + deploy in one flow',
      featuresDeployItem4: 'Deploy from Helm — guided wizard',
      featuresDxTitle: 'Developer Experience',
      featuresDxItem1: 'Templates Catalog — complete apps ready to deploy in 1 click (e.g. Flask + PostgreSQL, MongoDB cache-aside)',
      featuresDxItem2: 'Kubernetes Operators via OLM — catalog, install and real-time status',

      // Stack
      stackEyebrow: 'Tech Stack',
      stackTitle: 'Built with tools developers already trust',
      stackItem1Role: 'Virtual Threads',
      stackItem2Role: 'Application core',
      stackItem3Role: 'Server-side reactive UI',
      stackItem4Role: '+ Flyway migrations',
      stackItem5Role: 'Native integration with the Kubernetes API',
      stackItem6Role: 'Kotlin DSL',
      stackItem7Role: 'Embedded YAML editor',
      stackItem8Role: 'Native releases',
      stackItem9Role: 'Image builds without a Docker daemon',

      // Security
      securityEyebrow: 'Security',
      securityTitle: 'No parallel permission system',
      securityItem1Title: 'Encrypted kubeconfig',
      securityItem1Text: 'Always encrypted before persisting.',
      securityItem2Title: 'Native Kubernetes RBAC',
      securityItem2Text: 'Each user operates through their own ServiceAccount.',
      securityItem3Title: 'A single source of truth',
      securityItem3Text: 'No duplicated access control — your cluster\'s RBAC rules.',

      // Differentiators
      comparisonEyebrow: 'Differentiators',
      comparisonTitle: 'The same task, without the same headache',
      comparisonColCriteria: 'Criteria',
      comparisonColOthers: 'OpenShift / Rancher',
      comparisonColGreencap: 'GreenCap K8s',
      comparisonRow1Criteria: 'Initial setup',
      comparisonRow1Others: 'Hours to days',
      comparisonRow1Greencap: 'Minutes, a single container',
      comparisonRow2Criteria: 'Operational cost',
      comparisonRow2Others: 'High',
      comparisonRow2Greencap: 'Minimal',
      comparisonRow3Criteria: 'Learning curve',
      comparisonRow3Others: 'High',
      comparisonRow3Greencap: 'Low',
      comparisonRow4Criteria: 'Application deploy',
      comparisonRow4Others: 'Multiple manual steps',
      comparisonRow4Greencap: '1 click via Templates',
      comparisonRow5Criteria: 'License',
      comparisonRow5Others: 'Commercial / enterprise',
      comparisonRow5Greencap: 'Open source',

      // Who It's For
      audienceEyebrow: 'Who It\'s For',
      audienceTitle: 'Built for people who get their hands dirty',
      audienceItem1Title: 'Kubernetes students',
      audienceItem1Text: 'Learn by operating a real cluster, not just reading theory.',
      audienceItem2Title: 'Individual developers',
      audienceItem2Text: 'Spin up and manage your clusters without a platform team.',
      audienceItem3Title: 'Small and medium teams',
      audienceItem3Text: 'Study, dev and test environments without enterprise overhead.',

      // Social Proof
      socialProofEyebrow: 'Social Proof',
      socialProofTitle: 'Built in public, open to everyone',
      socialProofStat1Label: 'GitHub stars',
      socialProofStat2Label: 'Releases shipped',
      socialProofStat3Label: 'Commits',
      socialProofStat4Label: 'Sprints delivered',
      socialProofFooter: 'Public backlog and roadmap.',

      // Final CTA
      ctaTitle: 'Spin it up in minutes.',
      ctaCopyLabel: 'Copy command',
      ctaCopiedLabel: 'Copied!',
      ctaLinkGithub: 'GitHub — greencapk8s/greencap-k8s',
      ctaClosing: 'The Kubernetes you already have. The interface it was missing.'
    }
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
    dropdownOpen = true;
  }

  function closeDropdown(toggleButton, dropdownMenu) {
    dropdownMenu.classList.remove('show');
    dropdownMenu.classList.add('hidden');
    toggleButton.classList.remove('active');
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
        dot.setAttribute('aria-label', String(index + 1));
        dot.addEventListener('click', function () {
          showSlide(index);
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
    }

    function openLightbox(index) {
      showSlide(index);
      overlay.classList.add('show');
    }

    function closeLightbox() {
      overlay.classList.remove('show');
    }

    slides.forEach(function (slide, index) {
      slide.img.addEventListener('click', function () {
        openLightbox(index);
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
