<div align="center">

<img src="./public/images/sciencinnov_logo_white.png" alt="Sciencinnov logo" width="140" />

# Sciencinnov

**A fast, responsive, right-to-left landing page for Sciencinnov Academy — a skill-based science & technology academy for kids and teenagers.**

![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

## Overview

Sciencinnov is a single-page marketing site built from a Figma design. It is **RTL-first** (Persian), fully responsive from phones to wide desktops, and focused on smooth, lightweight motion rather than heavy animation libraries.

## Features

**Sections**

- Responsive navbar with a slide-in sidebar on small screens and smooth-scroll anchors
- Hero with a consultation call-to-action that opens a modal request form
- "Our goals" panel, "Our courses" ribbon cards, and an instructors carousel
- Experience section with count-up statistics and a photo mosaic gallery
- Auto-scrolling marquee of partner and university logos
- Footer with contact details, social links, and an inline consultation form

**Interactions & motion**

- Scroll-triggered `Reveal` animations built on `IntersectionObserver`
- Count-up numbers with Persian digits, started when scrolled into view
- Infinite logo marquee driven by the Web Animations API (pauses on hover)
- Carousel that cycles through its items regardless of how many fit on screen

**Engineering**

- RTL layout (`lang="fa"`, `dir="rtl"`) with a self-hosted Persian font
- Brand palette defined once as CSS variables and exposed to Tailwind v4 via `@theme`
- Content kept separate from markup in `src/items`
- Accessible primitives (Dialog, Sheet, Button) built on Base UI following shadcn/ui conventions
- Optimized images with `next/image`

## Tech stack

| Area       | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Framework  | Next.js (App Router)                                      |
| UI         | React 19, TypeScript                                      |
| Styling    | Tailwind CSS v4, `tw-animate-css`                         |
| Components | shadcn/ui conventions on top of Base UI                   |
| Icons      | `lucide-react` + custom PNG/SVG assets                    |
| Utilities  | `class-variance-authority`, `react-intersection-observer` |

## Getting started

**Prerequisites:** Node.js 20 or newer and npm.

```bash
# 1. Clone the repository
git clone https://github.com/sobhanJM27/Sciencinnov.git
cd Sciencinnov

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

| Command         | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm start`     | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Project structure

```text
.
├── public/
│   ├── fonts/          # Persian font files (.ttf)
│   └── images/         # logos, illustrations, gallery and partner photos
└── src/
    ├── app/            # layout, page, and globals.css (theme tokens)
    ├── components/     # page sections and UI primitives
    ├── items/          # static content: nav tabs, courses, instructors, stats, partners, footer…
    └── lib/            # helpers and shared Tailwind class constants (style.ts)
```

## Customization

- **Content:** edit the data files in `src/items/` (courses, instructors, stats, partners, footer links…).
- **Colors:** change the `--brand-*` variables in `src/app/globals.css`.
- **Font:** the `@font-face` rule lives in `globals.css`; point it at your font file in `public/fonts`.

## License

Released under the [MIT License](./LICENSE).
