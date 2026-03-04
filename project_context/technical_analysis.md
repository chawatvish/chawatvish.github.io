# Technical Analysis — chawatvish.github.io

## Overview

Personal developer portfolio website for Chawatvish Worrapoj, deployed on GitHub Pages.

---

## Core Stack

| Layer | Technology | Version |
|---|---|---|
| UI Framework | React | ^19.2.1 |
| Build Tool | Vite | ^7.3.0 |
| Styling | Tailwind CSS | ^4.1.11 |
| Tailwind Vite Plugin | @tailwindcss/vite | ^4.1.11 |
| Language | JavaScript (ESM) | — |
| Hosting | GitHub Pages | — |

---

## Frontend Architecture

### Component Structure

```
src/
├── App.jsx                        # Root component
├── Home.jsx                       # Page layout orchestrator
├── firebase.js                    # Firebase initialization
├── index.css                      # Global styles
├── main.jsx                       # React DOM entry point
├── assets/                        # Static images
├── components/
│   ├── Navigation.jsx             # Fixed top navbar with theme toggle & mobile menu
│   ├── HeroSection.jsx            # Intro section with TypeAnimation
│   ├── AboutSection.jsx           # Short bio paragraph
│   ├── PhilosophySection.jsx      # 3-card philosophy grid
│   ├── SkillsSection.jsx          # Skill categories + professional competencies
│   ├── WorkExperienceSection.jsx  # Timeline of work history
│   ├── ProjectsSection.jsx        # Featured projects grid with overlay
│   ├── RequestResumeForm.jsx      # Firestore-backed resume request form
│   ├── ContactSection.jsx         # Email & social links
│   ├── AnalyticsDashboard.jsx     # Dev-only real-time event viewer
│   └── index.js                   # Barrel export
├── context/
│   ├── ThemeContext.jsx            # ThemeProvider (localStorage persistence)
│   ├── theme-context.js            # React.createContext definition
│   └── useTheme.js                 # Custom hook
└── utils/
    └── analytics.js               # Firebase Analytics event wrappers
```

### Routing

- **No router** — single-page, anchor-based smooth scroll navigation.
- Section IDs: `#home`, `#about`, `#philosophy`, `#work`, `#skills`, `#projects`, `#resume`, `#contact`.

---

## Third-Party Libraries

| Library | Purpose | Version |
|---|---|---|
| `firebase` | Analytics + Firestore backend | ^12.3.0 |
| `lucide-react` | Icon set (Sun, Moon, Menu, X) | ^0.562.0 |
| `react-type-animation` | Typewriter effect in HeroSection | ^3.2.0 |

---

## Firebase Services

| Service | Usage |
|---|---|
| **Firebase Analytics** | Custom event tracking (page views, button clicks, nav, skill hover, project clicks, contact clicks) |
| **Firestore** | Stores resume request form submissions in `resume_requests` collection |

### Environment Variables (`.env`)

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
```

---

## Analytics Event System (`src/utils/analytics.js`)

| Function | Firebase Event | Trigger |
|---|---|---|
| `trackPageView` | `page_view` | Home mount |
| `trackContactClick` | `contact_click`, `{channel}_click` | Email / social link clicks |
| `trackProjectClick` | `project_click` | Project card link clicks |
| `trackNavigation` | `navigation_click` | Nav item clicks |
| `trackButtonClick` | `button_click` | CTA, theme toggle, form submit, analytics dashboard |
| `trackSkillInteraction` | `skill_interaction` | Skill card hover & click |

---

## Theme System

- **Implementation**: Class-based dark mode (`darkMode: 'class'` in Tailwind config).
- **Persistence**: `localStorage` via `ThemeContext`.
- **API**: `useTheme()` hook exposes `{ theme, toggleTheme, darkMode, toggleDarkMode }`.

---

## Dev Tooling

| Tool | Config File | Purpose |
|---|---|---|
| ESLint | `eslint.config.js` | Linting with `react-hooks` & `react-refresh` plugins |
| Vite | `vite.config.js` | Dev server, HMR, Tailwind integration |
| Tailwind CSS | `tailwind.config.js` | Utility-first styling, `Urbanist` font extension |

---

## Typography

- **Font**: `Urbanist` (Google Fonts) — extended in Tailwind theme as `font-urbanist`.

---

## Build & Deploy

```bash
npm run dev       # Start local dev server (Vite HMR)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

Deployment target: **GitHub Pages** (`chawatvish.github.io`).
