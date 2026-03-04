# Copilot / AI Agent Instructions

This file governs how AI coding agents (GitHub Copilot, Claude, GPT, etc.) must behave when working on this project. Read it fully before making any change.

---

## 1. Project Identity

| Field | Value |
|---|---|
| **Project** | Personal portfolio website |
| **Owner** | Chawatvish Worrapoj |
| **URL** | https://chawatvish.github.io |
| **Type** | Single-page application (SPA) — no router |
| **Purpose** | Professional branding, lead generation, portfolio showcase |

**Source of truth for all personal content**: `project_context/chawatvish_cv.md`.  
**Never invent, guess, or hallucinate** any personal data (job titles, companies, projects, skills, dates, education).

---

## 2. Project Context Files — Read Before Any Task

Always consult these files before starting any task:

| File | What it contains |
|---|---|
| `project_context/technical_analysis.md` | Full tech stack, architecture, component map, analytics events |
| `project_context/business_context.md` | Goals, audience, user journeys, success metrics |
| `project_context/development_phases.md` | All pending tasks with status — **check this first** |

When completing a task from `development_phases.md`, update the corresponding `⬜` to `✅`.

---

## 3. Tech Stack — Strict Rules

### ✅ Use These

| Technology | Notes |
|---|---|
| **React 19** | Functional components + hooks only. No class components. |
| **Vite 7** | Build tool. Do not touch `vite.config.js` unless required. |
| **Tailwind CSS v4** | Utility-first. Use `dark:` variants for dark mode. |
| **JavaScript (ESM)** | `.jsx` / `.js` files only. No TypeScript. |
| **Firebase Analytics** | Use existing wrappers in `src/utils/analytics.js`. |
| **Firestore** | Only for `resume_requests` collection (resume form). |
| **lucide-react** | For all icons. Do not add other icon libraries. |
| **react-type-animation** | Used only in `HeroSection.jsx`. |

### ❌ Never Add or Use

- **TypeScript** — this is a plain JS project, do not introduce `.ts` / `.tsx` files or type annotations.
- **React Router / any router** — navigation is anchor-based smooth scroll only.
- **Next.js** — not used and not planned despite appearing in old skill data.
- **CSS Modules / Styled Components / Emotion** — use Tailwind or `index.css` only.
- **Redux / Zustand / other state libs** — React context + `useState` is sufficient.
- **Axios** — use native `fetch` if HTTP calls are needed.
- **Any new npm packages** without explicitly being asked — justify with a comment if unavoidable.

---

## 4. Architecture & File Conventions

### Component Rules
- All components live in `src/components/`.
- One component per file. File name matches component name exactly (PascalCase).
- Export components as **default exports**.
- Export from `src/components/index.js` barrel if creating a new component.
- New section components follow this naming pattern: `[Name]Section.jsx`.

### Import Order (within a file)
1. React
2. Third-party libraries (`lucide-react`, `react-type-animation`, etc.)
3. Firebase utilities (`../firebase`, `firebase/analytics`, etc.)
4. Analytics utils (`../utils/analytics`)
5. Local components
6. Assets (images)

### Naming Conventions
| Item | Convention | Example |
|---|---|---|
| Components | PascalCase | `EducationSection.jsx` |
| Hooks | camelCase with `use` prefix | `useTheme.js` |
| Utility functions | camelCase | `trackButtonClick` |
| CSS classes | Tailwind utilities or kebab-case custom classes | `section-container` |
| Event handlers | `handle` prefix | `handleSubmit`, `handleContactClick` |

### Page Structure (Home.jsx)
Sections are rendered in this fixed order — maintain it:
```
Navigation → Hero → About → Philosophy → Work → Skills → Projects → Resume → Contact
```
When adding a new section (e.g., Education, Awards), insert it **between Work and Skills** or at the end before Contact, depending on context.

---

## 5. Styling Rules

### Tailwind CSS
- Always use Tailwind utility classes first.
- Use `dark:` prefix for all dark mode variants.
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px).
- Use `scroll-mt-20` on all `<section>` elements to account for the fixed nav.
- Font: `font-urbanist` is extended in `tailwind.config.js` — use it for headings.

### Custom CSS (`index.css`)
- Add custom classes here only when Tailwind utilities are not sufficient.
- Follow existing naming patterns: `section-container`, `card`, `section-title`, `section-text`.
- All new custom classes must support both light and dark themes using CSS variables.

### Dark Mode Pattern
```jsx
// Always pair light and dark variants
className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
```
- Use `useTheme()` hook only when you need the `theme` value in JS logic (e.g., inline styles).
- Prefer `dark:` Tailwind classes over JS-driven inline styles.

---

## 6. Analytics — Always Track New Interactions

Every new user interaction **must** have a tracking call. Use the existing functions in `src/utils/analytics.js`:

| User Action | Function to Call |
|---|---|
| New button click | `trackButtonClick(buttonType, buttonLabel, { source })` |
| New link click (external) | `trackContactClick(channel, 'click', url)` |
| New section navigation | `trackNavigation(sectionId)` |
| New project interaction | `trackProjectClick(title, link, { source })` |
| New skill hover/click | `trackSkillInteraction(skillName, 'hover'\|'click')` |
| New page-level event | `trackPageView(pageName)` |

If a new event type is needed that doesn't fit existing functions, add it to `src/utils/analytics.js` following the same pattern — use `logEvent(analytics, 'event_name', { ...data })` wrapped in try/catch.

---

## 7. Content Rules — CV is the Law

All personal content must be sourced exclusively from `project_context/chawatvish_cv.md`. **Never invent, guess, or hallucinate** any personal data — names, job titles, companies, projects, skills, dates, education, or contact details.

When in doubt, read `project_context/chawatvish_cv.md` before writing any content.

---

## 8. Firebase Rules

### Firestore
- Only write to `resume_requests` collection from `RequestResumeForm.jsx`.
- Always include `serverTimestamp()` and `status: 'new'` on new documents.
- Never read from Firestore on the client for public-facing content (performance cost).

### Analytics
- Import `analytics` instance from `src/utils/analytics.js` — never re-initialize it.
- Never call `logEvent` directly in components — always go through the utility wrappers.
- `AnalyticsDashboard.jsx` is **dev-only** — it renders `null` in production. Do not change this guard.

### Environment Variables
- All Firebase config values come from `.env` via `import.meta.env.VITE_*`.
- Never hardcode Firebase credentials.
- When adding new env vars, prefix with `VITE_` and document them in `project_context/technical_analysis.md`.

---

## 9. Theme / Context

- `useTheme()` is the only hook for theme access. Import from `../context/useTheme`.
- `ThemeContext` provides `{ theme, toggleTheme, darkMode, toggleDarkMode }`.
- Theme is persisted in `localStorage` under key `"darkMode"` — do not change the key.
- `dark` class is toggled on both `<html>` and `<body>` — respect this in any global style changes.

---

## 10. Task Execution Workflow

When asked to implement a task from `development_phases.md`:

1. **Read** the relevant phase section carefully.
2. **Read** the current file(s) that need to be changed before editing.
3. **Cross-check** any personal data against Section 7 of this file.
4. **Implement** the change in the correct file.
5. **Add analytics tracking** if the change involves a new user interaction.
6. **Check for errors** — ensure no broken imports, missing props, or undefined variables.
7. **Update** `development_phases.md` — mark completed items `✅`.

---

## 11. What NOT to Do

- ❌ Do not create new utility files unless clearly needed and reusable.
- ❌ Do not refactor working code unless the task explicitly asks for it.
- ❌ Do not add dependencies to `package.json` without being asked.
- ❌ Do not create summary `.md` files after completing a task (unless asked).
- ❌ Do not change `firebase.js`, `vite.config.js`, `tailwind.config.js`, or `eslint.config.js` without being explicitly asked.
- ❌ Do not invent placeholder content — leave a `// TODO:` comment with a clear description instead.
- ❌ Do not use `console.log` in production code — use it only inside `AnalyticsDashboard.jsx` or guarded by `import.meta.env.DEV`.
- ❌ Do not use inline styles when Tailwind classes achieve the same result.
- ❌ Do not remove existing analytics tracking calls when editing a component.
