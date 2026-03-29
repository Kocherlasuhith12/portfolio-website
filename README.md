<div align="center">

```
 _____ _   _ _   _ ___ _____ _   _
/  ___| | | | | | |_ _|_   _| | | |
\ `--.| | | | |_| || |  | | | |_| |
 `--. \ |_| |  _  || |  | | |  _  |
/\__/ /\___/|_| |_|___| |_| |_| |_|
\____/
```

# Suhith — AI Engineer Portfolio

**A production-grade personal portfolio website**
*Inspired by [agero.framer.website](https://agero.framer.website/) · Built with pure HTML, CSS & JavaScript*

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Canvas API](https://img.shields.io/badge/Canvas_API-E8441A?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen?style=for-the-badge)](.)
[![Offline Ready](https://img.shields.io/badge/Offline-Ready-success?style=for-the-badge)](.)

<br/>

> *"Ship fast. Build clean. Iterate relentlessly."*

</div>

---

## 📋 Table of Contents

- [Preview](#-preview)
- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Design System](#-design-system)
- [Features](#-features)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)
- [Customisation Guide](#-customisation-guide)
- [Sections Breakdown](#-sections-breakdown)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 🖼 Preview

```
┌─────────────────────────────────────────────────────────────────┐
│  ● Available for AI/ML Internships & Collaborations — 2025      │
├─────────────────────────────────────────────────────────────────┤
│  Suhith.      Works  Skills  About  Recognition  Blog  [Contact]│
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              Building  [●neural]  Intelligent                   │
│                AI  [≈wave]  Systems                             │
│           based in  Chennai,  [▌▌▌]  India                      │
│                                                                 │
│     I build production-grade AI systems, GenAI pipelines,       │
│     and backend infrastructure — fast, clean, built to scale.   │
│                                                                 │
│                    [ View Projects → ]                          │
│                                                                 │
│  ┌──────────┐  ┌─────────────────┐  ┌───────────┐  ┌────────┐   │
│  │ClinicalMi│  │  AI Risk        │  │LLM        │  │Traffic │   │
│  │nd        │  │  Predictor      │  │Pipeline   │  │AI      │   │
│  └──────────┘  └─────────────────┘  └───────────┘  └────────┘   │
├─────────────────────────────────────────────────────────────────┤
│ Python / PyTorch / TensorFlow / FastAPI / LangChain / MLflow... │
├─────────────────────────────────────────────────────────────────┤
│ ████ AI Engineering × RAG Pipelines × LLM Fine-tuning × MLOps  │
│ ████ B.Tech CSE @ SRM Trichy × Graduating 2027 × Open to Work  │
└─────────────────────────────────────────────────────────────────┘
```

> **Live theme:** Light cream `#f0eeea` background · `#E8441A` red-orange accent · Dark footer with red radial gradient

---

## 🧠 About

This is the personal portfolio of **KKS Suhith Babu** — a B.Tech CSE student at SRM Institute of Science and Technology, Trichy (graduating 2027), building a career as an AI Engineer with strong backend engineering skills.

The site is a pixel-accurate recreation of the aesthetic from [agero.framer.website](https://agero.framer.website/) — adapted as a personal AI engineer portfolio with:

- All original Agero design patterns (diagonal ribbons, ghost watermarks, floating 3D cards, dark work slides on light page, red-to-dark footer gradient)
- Fully personalised content — projects, skills, bio, timeline
- Zero frameworks — pure HTML/CSS/JS, works fully offline

---

## 🛠 Tech Stack

> No npm. No build step. No frameworks. Open `index.html` and it runs.

| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | HTML5 (Semantic) | Page markup, BEM class naming |
| **Styling** | CSS3 | Full design system, layout, animations |
| **Design Tokens** | CSS Custom Properties | Colours, fonts, spacing — all in `:root` |
| **Layout** | CSS Grid + Flexbox | All section and component layouts |
| **Animations** | CSS `@keyframes` | Marquee scrolling, pulse dot, fade-in |
| **Transitions** | CSS `transition` | Hover states, card tilt recovery, FAQ open/close |
| **3D Effects** | CSS `perspective` + `rotateX/Y` | Mouse-tilt on cards |
| **Interactivity** | Vanilla JavaScript (ES6+) | Carousels, tabs, accordion, form, clock |
| **Animated Visuals** | Canvas API | All animated canvases — 3D cards, charts, orbs, portraits |
| **Render Loop** | `requestAnimationFrame` | 60fps smooth animation everywhere |
| **Scroll Animations** | `IntersectionObserver` API | Reveal-on-scroll for all sections |
| **Custom Cursor** | JS + CSS `cursor:none` | Dot + lagging ring replaces OS cursor |
| **Typography** | Local `.ttf` Fonts | Poppins (sans) + Lora (serif) — fully offline |

---

## 🎨 Design System

### Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--c-bg` | `#f0eeea` | Main page background (cream/off-white) |
| `--c-bg-alt` | `#e9e7e3` | Alternate section background |
| `--c-white` | `#ffffff` | FAQ cards, pricing cards |
| `--c-black` | `#111111` | Primary text, nav, headings |
| `--c-dark` | `#1a1a1a` | Dark cards, footer |
| `--c-accent` | `#E8441A` | **THE brand colour** — Agero red-orange |
| `--c-accent-lt` | `#ff6b3d` | Lighter accent for secondary elements |
| `--c-muted` | `#666660` | Secondary text, nav links |
| `--c-dim` | `#999990` | Labels, timestamps, metadata |
| `--c-border` | `#d8d6d2` | Subtle dividers and card borders |

### Typography

| Font | Weight | Usage |
|---|---|---|
| **Poppins** | 400 / 500 / 700 | All body text, headings, nav, buttons |
| **Lora** | Variable (italic) | `(hello)` label — serif italic accent only |

Both fonts are **bundled locally** inside `fonts/` — no Google Fonts, no CDN, no internet required.

### Cursor System

The OS cursor is **completely hidden** via `cursor: none` on `body` and `button`.

Two custom HTML elements replace it:

```
#cursor-dot   → 10px filled black circle  → snaps instantly to mouse position
#cursor-ring  → 36px hollow circle        → lags behind (lerp factor: 0.1 per frame)
```

On hover over any link or button:
- Dot **grows to 24px** and turns **`#E8441A` accent red**
- Ring **disappears** (`opacity: 0`)

This is implemented by toggling `.cursor-hover` on `<body>` via JS event listeners.

---

## ✨ Features

### Animations & Motion

| Feature | How It Works |
|---|---|
| **Custom cursor** | JS lerp loop: `rx += (mx - rx) * 0.1` each frame |
| **Hero pill canvases** | 3 inline `<canvas>` elements inside the `<h1>` — spinning neural net, dual sine wave, animated bars |
| **3D floating cards** | Canvas API — 5 cards bounce off boundaries, parallax with mouse position |
| **Diagonal ribbon tickers** | Two absolute-positioned `<div>` elements rotated `-4deg`, scrolling in opposite directions |
| **Tech stack marquee** | CSS `@keyframes marqueeLeft` on a doubled list — seamless infinite loop |
| **Ghost watermarks** | Large text at `rgba(0,0,0,.055)`, `z-index: 0`, `pointer-events: none` — sits behind content |
| **Scroll reveals** | `IntersectionObserver` adds `.visible` class on enter, triggering `opacity` + `translateY` transition |
| **3D card tilt** | `mousemove` listener applies `perspective(900px) rotateX/Y` · `mouseleave` resets with `.4s ease` |
| **Testimonial backgrounds** | Canvas radial gradient orbs + dot-grid, animated per slide |
| **Work slide visuals** | Canvas — flowing sine line, node dots, glowing orbs, per-project colour palette |
| **Service panel bg text** | Giant text element `width: 300%` with `marqueeLeft` animation, `rgba` near-transparent |
| **Meet section portrait** | Canvas warm gradient + light orb + silhouette ellipses + giant `"S"` watermark |
| **Contact background** | Canvas grid of blurred coloured project cards with animated progress bars |
| **Footer red gradient** | CSS `radial-gradient(ellipse 80% 65% at 50% 100%, rgba(175,45,8,.50))` — exact Agero footer |
| **Live IST clock** | `new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })` updating every second |
| **Awards hover pill** | CSS `transform: scale(0)` → `scale(1)` on `.award-row:hover` with spring-like cubic-bezier |
| **FAQ accordion** | `max-height: 0` → `max-height: 220px` transition + icon `rotate(45deg)` |
| **Pulse dot** | CSS `@keyframes` box-shadow expanding then fading |

### Interactive Components

| Component | Details |
|---|---|
| **Works carousel** | 5 project slides · prev/next arrow buttons · touch swipe (`touchstart` / `touchend`) |
| **Testimonials carousel** | 3 quote slides · animated canvas backgrounds · prev/next |
| **Services tabs** | 3 tabs — AI Engineering / Backend / MLOps · active red underline indicator · animated bg text per panel |
| **FAQ accordion** | 6 items in a 2-column grid · only one open at a time · `+` rotates to `×` |
| **Contact form** | Name / Email / Message fields · button shows "Sending…" then "✓ Sent!" state |
| **Smooth scroll nav** | All `<a href="#section">` links scroll smoothly via `scroll-behavior: smooth` |

---

## 📁 File Structure

```
suhith-portfolio/
│
├── index.html              ← All HTML (838 lines, semantic BEM markup)
├── style.css               ← Design system (1361 lines, 22 documented sections)
├── script.js               ← All JavaScript (560 lines, 15 documented features)
├── README.md               ← You are here
│
└── fonts/
    ├── fonts.css           ← @font-face declarations (local, offline)
    ├── Poppins-Regular.ttf ← Weight 400
    ├── Poppins-Medium.ttf  ← Weight 500
    ├── Poppins-Bold.ttf    ← Weight 700
    └── Lora-Variable.ttf   ← Variable weight (italic serif accent)
```

### style.css — Section Map

```
 1. CSS Variables (Design Tokens)    ← All colours, fonts, spacing
 2. Reset & Base                     ← Box-sizing, body, canvas
 3. Custom Cursor                    ← #cursor-dot, #cursor-ring, .cursor-hover
 4. Availability Badge               ← Top bar + pulse dot animation
 5. Navigation                       ← Sticky nav, logo, links, CTA
 6. Hero Section                     ← Heading, pills, 3D wrap, CTA button
 7. Tech Stack Marquee               ← Infinite scroll track
 8. Diagonal Ribbon Tickers          ← ribbon--red, ribbon--black
 9. Hello / Intro Section            ← Lora italic label, skill pills
10. Testimonials                     ← Ghost title, stats card, carousel
11. Recent Works                     ← Ghost title, dark carousel cards
12. Services / Skills                ← Tabs, panels, animated bg text
13. Meet Suhith                      ← Ghost title, photo, timeline
14. Awards                           ← Table rows, hover pill
15. Pricing / Collaboration          ← Stacked cards (light + dark)
16. FAQ                              ← 2-col grid, accordion items
17. Contact                          ← Ghost title, split card, form
18. Email Ticker                     ← Marquee of email address
19. Footer                           ← Red gradient, grid, wordmark
20. Scroll Reveal Animation          ← .reveal, .visible, delay classes
21. Shared Keyframes                 ← marqueeLeft, marqueeRight
22. Responsive Breakpoints           ← 1100px, 900px, 640px
```

### script.js — Feature Map

```
 1.  Custom cursor          → Dot snap + ring lerp (requestAnimationFrame)
 2.  Hero pill canvases     → 3 inline Canvas animations in <h1>
 3.  Hero 3D floating cards → Canvas API, card bounce physics, mouse parallax
 4.  Testimonial canvases   → Animated glow orbs + grid per slide
 5.  Work slide canvases    → Data-viz line + nodes + orbs per project
 6.  Service panel canvases → Animated bar charts per tab
 7.  Meet section canvas    → Painted portrait background
 8.  Contact bg canvas      → Blurred project card grid
 9.  Carousel factory       → Generic maker — works + testimonials + touch swipe
10.  Service tab switcher   → switchTab() — panel show/hide
11.  FAQ accordion          → toggleFaq() — max-height transition
12.  Contact form           → submitForm() — button state feedback
13.  Live IST clock         → tickClock() — Asia/Kolkata timezone
14.  Scroll reveal          → IntersectionObserver on all .reveal elements
15.  Mouse-tilt 3D          → perspective rotateX/Y on mousemove, reset on leave
```

---

## 🚀 Getting Started

### Prerequisites

**Nothing.** Just a web browser.

### Option 1 — Live Server in VS Code *(Recommended)*

Fonts load correctly over `http://` — best experience.

```
1. Download and install VS Code
   → https://code.visualstudio.com/

2. Install the "Live Server" extension
   → Extensions panel (Ctrl+Shift+X) → search "Live Server" → Install

3. Open this folder in VS Code
   → File → Open Folder → select suhith-portfolio/

4. Right-click index.html in the Explorer panel
   → "Open with Live Server"

5. Browser opens at http://127.0.0.1:5500
```

### Option 2 — Direct Browser

```
Double-click index.html
Opens in your default browser instantly.

⚠ Note: Some browsers block local font loading over file://
   If fonts appear wrong, use Live Server or Option 3.
```

### Option 3 — Python Server

```bash
cd suhith-portfolio
python3 -m http.server 3000
# Visit http://localhost:3000
```

### Option 4 — Node.js Server

```bash
cd suhith-portfolio
npx serve .
# Visit the URL shown in your terminal
```

---

## ✏️ Customisation Guide

### Personal Information

| What to change | File | Where to find it |
|---|---|---|
| Your name | `index.html` | Search `Suhith` — nav logo, hero heading, meet section, footer |
| Your email | `index.html` | Search `suhith@email.com` in `.email-ticker__item` spans |
| LinkedIn URL | `index.html` | `.social-icon` elements with `href="#"` |
| GitHub URL | `index.html` | `.social-icon` elements with `href="#"` |
| Twitter URL | `index.html` | `.social-icon` elements with `href="#"` |
| Footer social links | `index.html` | `.footer__col` second column `<a>` tags |
| Your location | `index.html` | Search `Chennai` in hero + footer clock label |
| Your bio | `index.html` | `.meet__bio` paragraph block |
| Timeline entries | `index.html` | `.timeline__row` divs in Meet section |

### Colours

All colours are CSS variables — one edit changes the entire site:

```css
/* style.css — :root block at the top */

:root {
  --c-accent:  #E8441A;   /* Main brand colour → buttons, dots, ribbons, hovers */
  --c-bg:      #f0eeea;   /* Page background → try #f5f5f0 for cooler tone */
  --c-black:   #111111;   /* All text → try #0a0a0a for deeper black */
  --c-dark:    #1a1a1a;   /* Dark cards & footer → try #0f0f0f */
}
```

### Projects

Find the `<!-- WORK 1 -->` through `<!-- WORK 5 -->` comments in `index.html`:

```html
<div class="work-card">
  <div class="work-card__left">
    <p class="work-card__desc">Short description of the project.</p>
    <div>
      <div class="work-card__num">01 / 05</div>
      <div class="work-card__name">Your Project Name</div>
    </div>
  </div>
  <div class="work-card__visual"><canvas id="wc1"></canvas></div>
  <div class="work-card__meta">
    <div class="meta-group"><label>YEAR</label><div class="big">2025</div></div>
    <div class="meta-group"><label>ROLE</label><div class="sm">Your Role</div></div>
    <div class="meta-group">
      <label>TECH STACK</label>
      <ul>
        <li>Technology 1</li>
        <li>Technology 2</li>
      </ul>
    </div>
  </div>
</div>
```

### Canvas Colours Per Project

Each work slide has its own colour palette in `script.js`:

```js
const WC_PALETTES = [
  ['#E8441A', '#ff9966'],   // wc1 — red / orange
  ['#1a6e8e', '#4db8d4'],   // wc2 — teal / blue
  ['#3a1a6e', '#9966ff'],   // wc3 — purple / violet
  ['#1a6e3a', '#66d49a'],   // wc4 — green / mint
  ['#6e1a1a', '#d46666'],   // wc5 — maroon / salmon
];
```

### Fonts

Replace files in `fonts/` and update `fonts/fonts.css`:

```css
@font-face {
  font-family: 'YourFont';
  font-weight: 700;
  font-display: swap;
  src: url('YourFont-Bold.ttf') format('truetype');
}
```

Update `style.css`:

```css
:root {
  --f-display: 'YourFont', sans-serif;
}
```

---

## 📐 Sections Breakdown

| # | Section | Visual Reference |
|---|---|---|
| 1 | **Availability Badge** | Black bar, pulsing green dot, letter-spaced text |
| 2 | **Navigation** | Sticky, cream bg, `Suhith.` logo with red dot, right-side pill CTA |
| 3 | **Hero** | Giant heading with 3 inline canvas pills, 5 floating 3D cards below |
| 4 | **Tech Marquee** | White strip, 12 tech items scrolling left endlessly |
| 5 | **Diagonal Ribbons** | Two banners crossing at -4°: red (skills) + black (bio stats) |
| 6 | **Hello / Intro** | Lora italic `(hello)`, large heading, 6 dark skill pills |
| 7 | **Testimonials** | Faded `Testimonials` ghost title, stats card + 3-slide carousel |
| 8 | **Recent Works** | Faded `Recent Works` ghost title, 5-slide dark carousel with canvases |
| 9 | **Services** | `What I do` title, 3-tab switcher, canvas + scrolling bg text per tab |
| 10 | **Meet Suhith** | Faded `Meet Suhith` ghost title, painted canvas portrait, career timeline |
| 11 | **Awards** | `Awards Winning` title, table rows, red circle pill appears on hover |
| 12 | **Pricing** | Stacked cards — white standard card + dark gradient premium card |
| 13 | **FAQ** | 2-column accordion grid, `+` icon rotates to `×` on open |
| 14 | **Contact** | Faded `Let's Connect` ghost, blurred canvas bg + form split card |
| 15 | **Email Ticker** | Dark strip, email scrolling infinitely |
| 16 | **Footer** | Red radial glow, 4-column nav, live IST clock, giant outlined `Suhith` wordmark |

---

## 🌐 Deployment

### Netlify Drop *(30 seconds, free)*

```
1. Go to https://app.netlify.com/drop
2. Drag the entire suhith-portfolio/ folder onto the page
3. You get a live URL instantly — no signup required
```

### Vercel *(free)*

```
1. Go to https://vercel.com/new
2. Import from GitHub or drag-and-drop the folder
3. Click Deploy
4. Live in ~10 seconds
```

### GitHub Pages *(free)*

```bash
# Step 1 — Create repo at github.com/new

# Step 2 — Push files
git init
git add .
git commit -m "feat: portfolio v1.0"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Step 3 — Enable Pages
# GitHub repo → Settings → Pages
# Source: Deploy from a branch → Branch: main → / (root) → Save

# Live at: https://YOUR_USERNAME.github.io/portfolio/
```

### Custom Domain *(optional)*

Add a `CNAME` file to the repo root:

```
yourdomain.com
```

Then add a DNS `CNAME` record pointing to `YOUR_USERNAME.github.io`.

---

## 👤 Author

<div align="center">

**KKS Suhith Babu**

*AI Engineer · Backend Builder · SRM Trichy · India*

B.Tech Computer Science & Engineering · Graduating 2027 · CGPA ~8.0

<br/>

| Platform | Link |
|---|---|
| 🌐 Portfolio | This site |
| 💼 LinkedIn | [linkedin.com/in/suhith](https://linkedin.com) |
| 🐙 GitHub | [github.com/suhith](https://github.com) |
| 🐦 Twitter(X) | [@suhith](https://twitter.com) |
| 📧 Email | suhith@email.com |

</div>

---

##  Reference & Inspiration

Design inspired by **[agero.framer.website](https://agero.framer.website/)** — a Framer portfolio template.

Key design patterns taken from the reference and adapted:

| Pattern | Description |
|---|---|
| Light cream background | `#f0eeea` — warm off-white, not stark white |
| Heavy editorial typography | `Poppins 700` at large `clamp()` sizes |
| Single dominant accent | `#E8441A` red-orange — used sparingly for maximum impact |
| Diagonal ribbon tickers | Two `-4deg` rotated scrolling bands crossing each other |
| Ghost watermarks | Large near-transparent text sitting behind section content |
| 3D hero floating cards | Canvas-drawn project cards with parallax mouse response |
| Dark work slides | High-contrast dark carousel against the light page |
| Dark footer + red glow | `radial-gradient` at 50% 100% creates the warm red bloom |
| Giant footer wordmark | `-webkit-text-stroke` outlined text — decorative bottom anchor |

---

<div align="center">

**Built with 0 dependencies · Works offline · Opens in any browser**

*© 2025 KKS Suhith Babu. All rights reserved.*

</div>
