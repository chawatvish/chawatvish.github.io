# Development Phases & Pending Tasks

## Status Key

| Symbol | Meaning |
|---|---|
| ⬜ | Not started |
| 🔄 | In progress |
| ✅ | Completed |

---

## Phase 1 — Foundation ✅ (Done)

- ✅ Vite + React 19 project scaffolding
- ✅ Tailwind CSS v4 integration
- ✅ Dark / Light theme system with localStorage persistence
- ✅ Single-page anchor-scroll navigation
- ✅ Responsive Navigation component (desktop + mobile hamburger menu)
- ✅ Firebase project setup (Analytics + Firestore)
- ✅ Environment variable configuration for Firebase credentials
- ✅ Analytics utility module with full event tracking coverage
- ✅ Dev-only `AnalyticsDashboard` component for real-time event monitoring

---

## Phase 2 — Core Content Sections ✅ (Done)

- ✅ HeroSection with TypeAnimation and CTA button
- ✅ AboutSection bio paragraph
- ✅ PhilosophySection (3-card grid)
- ✅ WorkExperienceSection (KBTG, Samart, PWM Solutions)
- ✅ SkillsSection with categories and professional competencies
- ✅ ProjectsSection (4 featured projects with overlay)
- ✅ ContactSection (email + X, LinkedIn, GitHub, Medium)
- ✅ RequestResumeForm with Firestore submission and status states

---

## Phase 3 — CV Data Alignment & Corrections 🔴 (HIGH PRIORITY)

> **AI Agent Tasks** — fix all factually incorrect content by aligning with the official CV.  
> Source of truth: `Chawatvish_CV_2026.pdf`

---

### 3.1 — `WorkExperienceSection.jsx` Fixes

**KBTG Entry:**
- ⬜ Fix company name: `"KASIKORN Business-Technology Group [KBTG]"` → `"K-Soft Co., Ltd. (KBTG)"`
- ⬜ Rewrite job description to accurately reflect CV:
  - K Plus Thailand: supported Feed, Notification, Tracking Analysis, Deeplink features
  - K Plus Vietnam: addressed regional challenges (environment, user behavior, infrastructure)
  - K Plus Biz Vietnam: mobile banking for SMEs to facilitate seamless transactions
  - FMS Website (2025): contributed using React.js for internal tooling
  - AI-SDLC initiative (2025): pioneered AI Agentic coding to enhance software development life cycles

**Samart Entry:**
- ⬜ Fix job title: `"Mobile Developer (iOS & Android)"` → `"iOS Developer"`
- ⬜ Fix company name: `"Samart Corporation Public Co., Ltd."` → `"Samart Digital Media Co., Ltd."`
- ⬜ Rewrite job description to reflect CV:
  - EDT Guide: resolved defects and ensured app stability
  - TripPointz: led development from scratch; GPS-based app to locate sightseeing, restaurants, and shops
  - Implemented Fastlane pipeline to streamline App Store deployments

**PWM Solution Entry:**
- ⬜ Fix job title: `"Programmer (C# Backend Developer)"` → `"Back-end Developer (C#)"`
- ⬜ Fix company name: `"PWM Solutions Co.,Ltd."` → `"PWM Solution Co., Ltd."`

---

### 3.2 — `ProjectsSection.jsx` — Replace All Fake Projects with Real Work

All 4 current projects are 100% placeholder/fictional. Replace with actual projects from CV:

| # | Project | Description | Tech | Source |
|---|---|---|---|---|
| 1 | **K Plus** | Leading mobile banking app in Thailand with millions of users. Contributed to K Plus TH, K Plus Vietnam, and K Plus Biz Vietnam (SME). | `iOS`, `Swift`, `Jenkins`, `CI/CD` | KBTG (2018–Present) |
| 2 | **TripPointz** | GPS-based iOS app to discover sightseeing spots, restaurants, and shops. Built from scratch with App Store automation via Fastlane. | `iOS`, `Swift`, `GPS`, `Fastlane` | Samart Digital Media (2017–2018) |
| 3 | **FMS Website** | Internal financial management web application built with React.js to improve customer service workflows. | `React.js`, `JavaScript` | KBTG (2025) |
| 4 | **K Plus Review Classifier** | Multi-label text classification model to analyze and categorize K Plus app store customer feedback — Master's independent study. | `Python`, `Pandas`, `Scikit-learn`, `ML` | Chulalongkorn University (2019–2021) |

- ⬜ Replace the `projects` array in `ProjectsSection.jsx` with the 4 real projects above
- ⬜ Keep `link: '#'` for all (professional/proprietary projects — no public URLs)
- ⬜ Source or create appropriate cover images for each project (screenshots, app icons, or representative illustrations)

---

### 3.3 — `SkillsSection.jsx` — Correct Inaccurate Skills

**Mobile & Web Development category:**
- ⬜ iOS details: keep `"Swift, SwiftUI, UIKit"` — accurate frameworks, just note CV only says "Expert in iOS (Swift)"
- ⬜ Flutter details: update details from `"Dart"` → `"Dart — Intermediate"` to reflect actual proficiency level from CV
- ⬜ React entry: rename from `"React & Next.js"` → `"React.js"` — CV lists only React.js at Beginner level; Next.js is **not** on the CV
- ⬜ Backend entry: change from `"Node.js, .NET, SQL, REST APIs"` → `"C#, .NET, REST APIs, SQL"` — Node.js is not in CV; C#/.NET is from PWM role
- ⬜ Add `"Android"` skill entry: details `"Java/Kotlin — Beginner"`

**AI/ML & Emerging Tech category:**
- ⬜ Python details: change from `"TensorFlow, ML"` → `"Pandas, Scikit-learn, Data Preparation"` — TensorFlow is **not** in CV
- ⬜ Add `"Google Platform Services"` skill entry — listed in CV under AI/ML
- ⬜ Keep LLM Integration and Agentic AI entries (supported by AI-SDLC initiative at KBTG)

---

### 3.4 — `AboutSection.jsx` — Rewrite Bio from CV

Current bio is a generic single sentence. Replace with content aligned to the CV's About Me:

> *"I am an experienced Software Engineer with deep expertise in mobile and back-end development, currently expanding into modern web technologies and AI-driven solutions. At K-Soft Co., Ltd. (KBTG), I have developed and maintained K Plus applications, integrated complex systems, and supported incident investigations. Most recently, I contributed to the FMS Website using React.js and supported the AI-SDLC initiative by exploring AI Agentic coding to optimize development workflows."*

- ⬜ Update `AboutSection.jsx` paragraph text with the corrected bio above

---

### 3.5 — `HeroSection.jsx` — Align Tagline with Actual Skill Set

- ⬜ Update subtitle from `"Engineering Intelligent Mobile Experiences"` — consider `"Building Mobile & AI-Driven Software"` to better reflect the CV's positioning
- ⬜ Update description: the phrase `"iOS & Flutter applications"` overstates Flutter (Intermediate); adjust to emphasize iOS as primary with Flutter as secondary

---

### 3.6 — Add Missing Sections

- ⬜ **Education Section** — create `EducationSection.jsx` with:
  - Master of Software Engineering, Chulalongkorn University (2019–2021) — specialized in data analytics & ML; K Plus review classification thesis
  - Bachelor of Computer Engineering, King Mongkut's University of Technology North Bangkok (2010–2015) — final project: document submission mobile app
- ⬜ **Awards / Recognition** — add award entry to the site:
  - 2022 KBTG Shining Star Award — K+ Innovation: Best Innovation
  - Can be added as a subsection inside `AboutSection.jsx` or as a dedicated badge/card

---

## Phase 4 — Content & Assets Quality ⬜ (Pending)

> After Phase 3 is complete, refine remaining content quality.

- ⬜ **Replace placeholder images** — source real screenshots or representative images for all 4 corrected projects.
- ⬜ **Add profile/meta image** for Open Graph / social sharing preview.

---

## Phase 5 — SEO & Metadata ⬜ (Pending)

- ⬜ Update `index.html` `<title>` tag to `Chawatvish Worrapoj | iOS & Mobile Engineer`.
- ⬜ Add `<meta name="description">` with keyword-rich summary.
- ⬜ Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
- ⬜ Add Twitter Card meta tags.
- ⬜ Add `<link rel="canonical">` pointing to `https://chawatvish.github.io`.
- ⬜ Create `public/robots.txt`.
- ⬜ Create `public/sitemap.xml` (single-page, anchor sections).
- ⬜ Add `<html lang="en">` attribute to `index.html`.

---

## Phase 6 — Performance & UX Polish ⬜ (Pending)

- ⬜ **Lazy-load images** — convert project images and hero photo to use lazy loading (`loading="lazy"`).
- ⬜ **Add scroll-reveal animations** — fade-in sections as they enter the viewport (Intersection Observer).
- ⬜ **Active nav highlight** — highlight the current section's nav item while scrolling.
- ⬜ **Back-to-top button** — show a floating button after scrolling past the hero.
- ⬜ **Page load performance audit** — run Lighthouse and address any critical issues (image sizing, render-blocking resources).
- ⬜ **Keyboard accessibility** — ensure all interactive elements are reachable and operable via keyboard.

---

## Phase 7 — Resume Request Feature Enhancement ⬜ (Pending)

- ⬜ **Email notification on submission** — trigger a Firebase Cloud Function (or use a service like EmailJS / Resend) to notify Chawatvish when a new resume request is submitted to Firestore.
- ⬜ **Admin view for resume requests** — simple password-protected page or Firebase Console query to review submissions.
- ⬜ **Form validation UX** — add inline field-level error messages for better feedback (currently only server-side status).
- ⬜ **Rate limiting / spam protection** — add honeypot field or reCAPTCHA to the resume request form.

---

## Phase 8 — Analytics & Insights ⬜ (Pending)

- ⬜ **Firebase Analytics dashboard review** — set up a custom Firebase Analytics report or Looker Studio dashboard for key KPIs (resume requests, contact clicks, section engagement).
- ⬜ **Conversion funnel tracking** — define and track the funnel: `page_view` → `navigation_click` → `button_click (Request Resume)` → `form_submit`.
- ⬜ **UTM parameter support** — capture UTM params on page load for tracking traffic sources from LinkedIn, job posts, etc.

---

## Phase 9 — GitHub Actions CI/CD ⬜ (Pending)

- ⬜ **Create `.github/workflows/deploy.yml`** — automate production build and deploy to GitHub Pages on push to `main`.
- ⬜ **Environment secrets** — configure all `VITE_FIREBASE_*` variables as GitHub Actions secrets.
- ⬜ **PR preview deployments** (optional) — deploy PR branches to a staging URL for review before merging.

---

## Phase 10 — Future Features (Backlog) ⬜

- ⬜ **Blog / writing section** — pull and display latest Medium articles via the Medium RSS feed or API.
- ⬜ **Testimonials / recommendations** section sourced from LinkedIn recommendations.
- ⬜ **Multi-language support** — Thai language toggle for local Thai audience (i18n).
- ⬜ **Interactive skill proficiency indicators** — show proficiency level (Expert / Intermediate / Beginner) visually per skill card, aligned with CV levels.
- ⬜ **GitHub contribution graph embed** — show real-time GitHub activity stats.
- ⬜ **EDT Guide app details** — if app is still live on App Store, link to it from the TripPointz/Samart project card.
