# Business Context — chawatvish.github.io

## Website Purpose

A personal portfolio website for **Chawatvish Worrapoj** — a Senior iOS & Flutter developer with 9+ years of experience. The site functions as a professional digital identity and lead-generation tool, targeting employers, recruiters, and potential collaborators.

---

## Primary Objectives

### 1. Personal Branding
Establish Chawatvish as an expert in mobile development (iOS / Flutter) and AI engineering. The site communicates a clear professional identity: *"Bridging the gap between human creativity and AI efficiency."*

### 2. Career Opportunity Generation
- Attract inbound interest from recruiters, hiring managers, and startup founders.
- Provide an easy path for visitors to initiate contact via email or social platforms.
- Gate resume access behind a request form to qualify inbound leads and capture contact details.

### 3. Portfolio Showcase
Display featured projects that demonstrate technical breadth — mobile apps, AI chatbots, and web tools — helping visitors quickly assess capabilities.

### 4. Thought Leadership & Community
Link out to writing on Medium and active presence on X (Twitter), LinkedIn, and GitHub to reinforce credibility and ongoing public contribution.

### 5. Behavioral Intelligence
Track visitor interactions through Firebase Analytics to understand what content resonates, which contact channels convert, and how users navigate the site — enabling data-driven improvements.

---

## Target Audience

| Audience | Goal on Site |
|---|---|
| Recruiters / HR | Quickly assess fit, download or request resume |
| Engineering Managers | Validate technical depth via skills & work history |
| Startup Founders | Evaluate collaboration potential, initiate contact |
| Fellow Developers | Connect on GitHub / Medium, explore projects |

---

## Key User Journeys

1. **Recruiter flow**: Land on Hero → scroll to Work Experience → scroll to Skills → request Resume → contact via email or LinkedIn.
2. **Collaboration flow**: Land on Hero → read Philosophy → view Projects → reach out via Contact section.
3. **Peer / community flow**: Browse projects → check GitHub or Medium links.

---

## Content Sections & Business Value

| Section | Business Value |
|---|---|
| **Hero** | First impression; CTA drives visitors toward contact |
| **About** | Quick credibility summary (9 years, Master's degree, banking sector) |
| **Philosophy** | Differentiates from generic portfolios; shows values & thinking |
| **Work Experience** | Primary trust signal; KBTG / KASIKORN is a recognizable brand |
| **Skills** | Confirms technical fit for a role or project |
| **Projects** | Social proof of execution ability |
| **Request Resume** | Lead capture form — stores submissions in Firestore |
| **Contact** | Conversion endpoint — email + 4 social platforms |

---

## Success Metrics

| Metric | Tracked Via |
|---|---|
| Page views | `trackPageView` → Firebase Analytics |
| Resume requests submitted | Firestore `resume_requests` collection |
| Contact channel clicks (email, LinkedIn, X, GitHub, Medium) | `trackContactClick` |
| Navigation engagement by section | `trackNavigation` |
| Project card interactions | `trackProjectClick` |
| CTA button conversions | `trackButtonClick` |
| Skill section engagement | `trackSkillInteraction` |

---

## Positioning Statement

> **Chawatvish Worrapoj** is an Advanced Software Engineer specializing in iOS, Flutter, and Agentic AI workflows with a career built inside one of Thailand's leading fintech organizations (KBTG / KASIKORN Bank). This portfolio positions him for senior individual-contributor roles, technical leadership positions, and selective freelance/consulting engagements in mobile and AI product development.
