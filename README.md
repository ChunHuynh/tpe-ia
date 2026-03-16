# TPE: Intelligence Artificielle — Archive & Modernisation

A hybrid project preserving a 2014 high school research paper (TPE) on 
Artificial Intelligence, while rebuilding it as a modern, accessible, 
bilingual (FR/EN) static site.

## 🏛️ The Archive (2014)

The original site, exported from Google Sites Classic, is preserved 
as-is for historical fidelity.

👉 [View the 2014 archive](https://chunhuynh.github.io/tpe-ia/legacy/home.html)

## 🚀 Modern Stack

| Concern | Technology |
|---|---|
| Framework | Astro 6.0 (SSG) |
| Styling | Tailwind CSS v4 + Typography plugin |
| Typography | Libre Baskerville + Montserrat (Fontsource) |
| Icons | astro-icon |
| i18n | Astro native routing (`/fr/`, `/en/`) |
| Deployment | GitHub Pages via GitHub Actions |

## 📁 Project Structure
```
tpe-ia/
├── public/
│   └── legacy/       ← 2014 archive, untouched
├── src/
│   └── pages/        ← Astro pages (FR/EN routes)
├── astro.config.mjs  ← Base path + SSG config
└── package.json
```

## 🛠️ Local Development
```bash
nvm use        # Node v24.14.0 (see .nvmrc)
npm install
npm run dev    # → http://localhost:4321
```

## 📐 Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/report` | Full scrolling research report |
| `/appendix` | Biographies, bibliography, etc |

## 🌍 i18n

Default locale is **French** (`/fr/`). English available at `/en/`.

## 📊 Project Status

> 🔨 Active development — Phase 1 (Project Setup) complete.