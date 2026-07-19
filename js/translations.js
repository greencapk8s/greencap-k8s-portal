/**
 * Dicionario de textos da landing page (pt-br / en).
 *
 * Carregado como script classico, antes de main.js, para continuar
 * funcionando ao abrir index.html via file:// (modulos ES sao bloqueados
 * por CORS nesse protocolo).
 */
window.GreenCapTranslations = {
  'pt-br': {
    // Metadados da pagina
    pageTitle: 'GreenCap K8s — Gestão Simples de Clusters Kubernetes',

    // Hero
    subtitle: 'Gestão Simples de Clusters Kubernetes',
    description: 'Plataforma web leve para operar Kubernetes com uma interface poderosa. Um único comando sobe um cluster local com a GreenCap, pronto para estudo, desenvolvimento e testes — e você ainda pode conectar clusters já existentes. Uma alternativa mais amigável ao OpenShift e ao Rancher para indivíduos e times pequenos e médios.',
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
    solutionTitle: 'Uma UI leve e plug-and-play para operar Kubernetes',
    solutionIsTitle: 'O que é',
    solutionIsItem1: 'Monólito Spring Boot dockerizado — plug-and-play',
    solutionIsItem2: 'Setup em um comando: cluster local (minikube) e GreenCap prontos',
    solutionIsItem3: 'Executa ações reais: criar, escalar, reiniciar, suspender, disparar',
    solutionIsItem4: 'Autorização 100% via RBAC nativo do Kubernetes',
    solutionIsNotTitle: 'O que não é',
    solutionIsNotItem1: 'Não exige infraestrutura prévia — conectar um cluster existente é opcional',
    solutionIsNotItem2: 'Não é somente leitura',
    solutionIsNotItem3: 'Não duplica controle de acesso próprio',
    solutionIsNotItem4: 'Não é uma plataforma enterprise pesada',

    // Como Funciona
    stepsEyebrow: 'Como Funciona',
    stepsTitle: 'Do zero ao deploy em três passos',
    step1Title: 'Suba com um comando',
    step1Text: 'O setup sobe um cluster local (minikube) com a GreenCap. Já tem o seu? Conecte via kubeconfig — sempre encriptado antes de persistir.',
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
    comparisonRow5Greencap: 'Open source (Apache 2.0)',

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
    ctaPrereq: 'O único pré-requisito é o Docker — o assistente detecta e instala kubectl, minikube e helm se faltarem.',
    ctaLinkGithub: 'GitHub — greencapk8s/greencap-k8s',
    ctaClosing: 'Kubernetes que você já tem. Interface que faltava.'
  },
  'en': {
    // Metadados da pagina
    pageTitle: 'GreenCap K8s — Simple Kubernetes Cluster Management',

    // Hero
    subtitle: 'Simple Kubernetes Cluster Management',
    description: 'A lightweight web platform to operate Kubernetes through a powerful UI. A single command spins up a local cluster with GreenCap, ready for study, development, and testing — and you can also connect your existing clusters. A friendlier alternative to OpenShift and Rancher for individuals and small-to-medium teams.',
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
    problemItem2Text: 'They need extra components just to run — a heavy operational cost for study, dev, and test clusters.',
    problemItem3Title: 'Steep learning curve',
    problemItem3Text: 'Tools built for specialists, not for beginners.',

    // Solution
    solutionEyebrow: 'The Solution',
    solutionTitle: 'A lightweight, plug-and-play UI to operate Kubernetes',
    solutionIsTitle: 'What it is',
    solutionIsItem1: 'A dockerized Spring Boot monolith — plug-and-play',
    solutionIsItem2: 'One-command setup: a local cluster (minikube) and GreenCap, ready to go',
    solutionIsItem3: 'Executes real actions: create, scale, restart, suspend, trigger jobs',
    solutionIsItem4: '100% authorization via native Kubernetes RBAC',
    solutionIsNotTitle: 'What it isn\'t',
    solutionIsNotItem1: 'It doesn\'t require prior infrastructure — connecting an existing cluster is optional',
    solutionIsNotItem2: 'It isn\'t read-only',
    solutionIsNotItem3: 'It doesn\'t duplicate its own access control',
    solutionIsNotItem4: 'It isn\'t a heavy enterprise platform',

    // How It Works
    stepsEyebrow: 'How It Works',
    stepsTitle: 'From zero to deploy in three steps',
    step1Title: 'Spin it up with one command',
    step1Text: 'Setup spins up a local cluster (minikube) with GreenCap. Already have one? Connect via kubeconfig — always encrypted before persisting.',
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
    securityItem3Text: 'No duplicated access control — your cluster\'s RBAC calls the shots.',

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
    comparisonRow5Greencap: 'Open source (Apache 2.0)',

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
    ctaPrereq: 'The only prerequisite is Docker — the wizard detects and installs kubectl, minikube and helm if missing.',
    ctaLinkGithub: 'GitHub — greencapk8s/greencap-k8s',
    ctaClosing: 'The Kubernetes you already have. The interface it was missing.'
  }
};
