<div align="center">
  <img src="assets/greencap.png" alt="GreenCap K8s" width="140" />
  <h1>greencap-k8s-portal</h1>
  <p>Landing page do <a href="https://github.com/greencapk8s/greencap-k8s">GreenCap K8s</a> — plataforma web leve para operar clusters Kubernetes.</p>
  <p>
    <a href="https://www.greencapk8s.dev">greencapk8s.dev</a> ·
    <a href="https://github.com/greencapk8s/greencap-k8s">Projeto principal</a> ·
    <a href="https://github.com/greencapk8s/greencap-k8s/issues">Issues</a>
  </p>
</div>

---

## Sobre este repositório

Código-fonte da landing page [greencapk8s.dev](https://www.greencapk8s.dev): página estática em HTML, CSS e JavaScript puro, sem etapa de build. Disponível em **português (pt-br)** e **inglês (en)**, publicada automaticamente no S3 + CloudFront a cada push na `main`.

## Estrutura

```
index.html              Página principal
assets/                 Logo, favicon e screenshots da plataforma
css/
  components/           Estilos de componentes reutilizáveis (cards, botões, tabelas…)
  pages/                Estilos por seção da página
  palette.css           Variáveis de cor
  reset.css             Reset CSS
  style.css             Estilos globais
js/
  translations.js       Dicionário de textos (pt-br / en)
  main.js               Comportamentos: troca de idioma, lightbox, botão de cópia
scripts/
  screenshots/          Script para capturar screenshots da plataforma
```

## Rodando localmente

Não há etapa de build. Sirva os arquivos estáticos com qualquer servidor:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

Ou abra `index.html` diretamente no browser — a página funciona via `file://` sem restrições.

## Atualizando os textos

Todos os textos estão centralizados em `js/translations.js`, que expõe um objeto com as chaves `pt-br` e `en`. Cada elemento HTML com o atributo `data-i18n="chave"` é substituído automaticamente pelo texto do idioma selecionado.

Para adicionar ou corrigir um texto, edite a chave correspondente nas duas línguas e o `data-i18n` no `index.html` (usado como fallback antes do JavaScript carregar).

## Atualizando os screenshots

Os screenshots ficam em `assets/screenshots/` e são exibidos na seção "Conheça a Plataforma". Para recapturá-los a partir de uma instância local do GreenCap K8s:

```bash
cd scripts/screenshots
pip install -r requirements.txt
python capture.py
```

> A instância local do GreenCap K8s precisa estar rodando. Veja o [guia de início rápido](https://github.com/greencapk8s/greencap-k8s#quick-start) do projeto principal.

## Deploy

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`): a cada push na `main` os arquivos são enviados ao S3 e o cache do CloudFront é invalidado.

## Sobre o GreenCap K8s

GreenCap é uma plataforma web para **operar Kubernetes por uma interface em vez do terminal**. Um único comando (`./setup/setup.sh`) sobe um cluster local com a GreenCap rodando — a forma mais rápida de começar. Você também pode conectar clusters que já usa: minikube, kind, gerenciados ou on-prem.

Feito para desenvolvedores individuais e times pequenos e médios que estudam, desenvolvem e testam com Kubernetes, e querem as operações do dia a dia sem o peso de uma plataforma enterprise.

O código da plataforma está em **[greencapk8s/greencap-k8s](https://github.com/greencapk8s/greencap-k8s)**.

## Licença

Distribuído sob a [Apache License 2.0](https://github.com/greencapk8s/greencap-k8s/blob/main/LICENSE).
