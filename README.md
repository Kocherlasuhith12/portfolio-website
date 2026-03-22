<div align="center">

<br/>

```
 ___  _   _ _   _ ___ _____ _   _
/ __|| | | | | | |_ _|_   _| | | |
\__ \| |_| | |_| || |  | | | |_| |
|___/ \___/ \___/|___| |_|  \___/
```

# Suhith — AI Engineer Portfolio

**Production-grade personal portfolio · Inspired by [agero.framer.website](https://agero.framer.website/)**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Canvas API](https://img.shields.io/badge/Canvas_API-FF6B35?style=flat-square&logo=html5&logoColor=white)](#)
[![No Build Step](https://img.shields.io/badge/No_Build_Step-✓-4CAF50?style=flat-square)](#)
[![Offline Ready](https://img.shields.io/badge/Offline_Ready-✓-4CAF50?style=flat-square)](#)
[![Zero Dependencies](https://img.shields.io/badge/Zero_Dependencies-✓-4CAF50?style=flat-square)](#)

<br/>

> *"Ship fast, build clean, iterate relentlessly."*

<br/>

[**Quick Start**](#-quick-start) · [**Project Structure**](#-project-structure) · [**Design System**](#-design-system) · [**Customise**](#-customisation-guide) · [**Deploy**](#-deployment)

<br/>

</div>

---

## 📸 What's Inside

A fully hand-coded, zero-framework portfolio website matching the exact design language of the Agero Framer template — rebuilt from scratch in vanilla HTML, CSS, and JavaScript.

| Section | Description |
|---|---|
| **Hero** | Full-viewport editorial heading with 3 inline animated Canvas pills + 3D floating project cards with mouse parallax |
| **Tech Marquee** | Auto-scrolling infinite strip of 12-tool stack |
| **Diagonal Ribbons** | Two crossing banners (red + black) at −4°, scrolling opposite directions |
| **Hello / Intro** | Large centred editorial text + icon pill buttons |
| **Testimonials** | Stats card + image carousel with animated glow-orb Canvas backgrounds |
| **Recent Works** | 5-slide carousel — 3-column dark card (description / animated visual / metadata) |
| **Services / Skills** | 3-tab switcher with scrolling background text + animated bar-chart Canvas |
| **Meet Suhith** | Ghost watermark heading + painted portrait Canvas + career timeline |
| **Awards** | Table rows with animated red circle pill on hover |
| **Collaboration** | Stacked cards — light card + dark gradient premium card |
| **FAQ** | Two-column accordion grid with icon rotation animation |
| **Contact** | Blurred canvas background (project grid) + contact form |
| **Email Ticker** | Infinite scrolling email marquee |
| **Footer** | Red radial gradient + giant outlined wordmark + live IST clock |

---

## 🗂 Project Structure

```
suhith-portfolio/
│
├── index.html              ← All HTML (semantic, BEM class names, 26 canvas IDs)
├── style.css               ← Complete design system (22 documented sections, ~1400 lines)
├── script.js               ← All interactivity (15 features, fully commented, ~560 lines)
├── README.md               ← You are here
│
└── fonts/                  ← Local font files — 100% offline, zero CDN
    ├── fonts.css           ← @font-face declarations
    ├── Poppins-Regular.ttf ← Body weight (400)
    ├── Poppins-Medium.ttf  ← Medium weight (500)
    ├── Poppins-Bold.ttf    ← Headings (700)
    └── Lora-Variable.ttf   ← Italic serif accent — the (hello) label only
```

> **Why separate files?** `index.html` for content, `style.css` for presentation, `script.js` for behaviour. Clean separation of concerns — easy to read, edit, and maintain independently.

---

## ⚡ Quick Start

### Option 1 — Live Server in VS Code (Recommended)

Fonts load correctly via `http://` and you get hot reload on save.

```
1. Open VS Code

2. Install "Live Server" by Ritwick Dey
   → Extensions panel (Ctrl+Shift+X / Cmd+Shift+X)
   → Search: Live Server → Install

3. Open the project folder
   → File → Open Folder → select suhith-portfolio/

4. Right-click index.html → "Open with Live Server"

5. Browser opens at http://127.0.0.1:5500  ✅
```

> **Shortcut:** With the file open, click **Go Live** in the VS Code status bar (bottom-right corner).

---

### Option 2 — Just Double-Click

```
Double-click index.html → opens in your default browser
```

> ⚠️ Some browsers block local `@font-face` over `file://`. If text looks wrong or unstyled, use Live Server or Option 3 below.

---

### Option 3 — Python Server (No installs)

```bash
cd suhith-portfolio
python3 -m http.server 8080
# Open → http://localhost:8080
```

---

### Option 4 — Node Server (No installs if Node is present)

```bash
cd suhith-portfolio
npx serve .
# Follow the URL printed in terminal
```

---

## 🛠 Tools & Technologies

Everything is **100% vanilla** — zero npm, zero Webpack, zero React, zero build pipeline.

| Tool / API | What It Does in This Project |
|---|---|
| **HTML5** | Semantic structure, BEM class naming, 26 canvas element IDs |
| **CSS3 Custom Properties** | Full design token system — colours, fonts, spacing, radius |
| **CSS Grid** | All major section layouts (hero, works, meet, footer, contact) |
| **CSS Flexbox** | Component-level layouts (nav, cards, pills, testimonial grid) |
| **CSS `@keyframes`** | `marqueeLeft` + `marqueeRight` for all infinite scroll strips |
| **CSS `perspective` + `rotateX/Y`** | 3D mouse-tilt on testimonial slides and pricing cards |
| **CSS `transition`** | Hover states, FAQ accordion expand, scroll reveal fade-in |
| **CSS `@font-face`** | Poppins (3 weights) + Lora (variable) loaded from local `/fonts/` |
| **Canvas 2D API** | Every animated visual: floating cards, glow orbs, bar charts, waveforms, portrait bg, contact bg |
| **`requestAnimationFrame`** | 60fps render loops powering all Canvas animations |
| **`IntersectionObserver` API** | Scroll-triggered `.reveal` fade-up entrance animations |
| **`mousemove` event** | Custom cursor dot position + 3D card mouse parallax offset |
| **Linear Interpolation (lerp)** | Cursor ring lag — `rx += (mouseX - rx) * 0.1` per frame |
| **`toLocaleString` + IANA timezone** | Live IST clock in footer — `timeZone: 'Asia/Kolkata'` |
| **`touchstart` / `touchend` events** | Swipe left/right support on work and testimonial carousels |

---

## 🎨 Design System

### Colour Palette

```css
:root {
  --c-bg:       #f0eeea;   /* Cream/off-white — main page background  */
  --c-bg-alt:   #e9e7e3;   /* Slightly darker for ribbon section bg   */
  --c-white:    #ffffff;   /* Pure white — marquee, card backgrounds  */
  --c-black:    #111111;   /* Primary text — near-black editorial     */
  --c-dark:     #1a1a1a;   /* Dark cards, footer, canvas backgrounds  */
  --c-accent:   #E8441A;   /* ← THE brand colour — Agero red-orange  */
  --c-accent-lt:#ff6b3d;   /* Lighter accent for Canvas glow variants */
  --c-muted:    #666660;   /* Secondary body text                     */
  --c-dim:      #999990;   /* Labels, timestamps, eyebrow text        */
  --c-border:   #d8d6d2;   /* Subtle dividers and card borders        */
}
```

> **One change to `--c-accent` updates:** nav CTA hover, ribbon fill, awards hover pill, tab active indicator, FAQ icon, form input focus ring, footer clock, cursor hover — all at once.

---

### Typography

| Font | Weight | Used For |
|---|---|---|
| **Poppins** | 400 | Body text, descriptions, metadata |
| **Poppins** | 500 | Pills, tab buttons, badge text |
| **Poppins** | 700 | All headings, card names, nav logo |
| **Lora** | Variable (italic) | `(hello)` section label only |

Both fonts are **bundled locally** in `/fonts/`. No Google Fonts CDN. No internet required.

---

### Custom Cursor Architecture

The OS arrow cursor is hidden globally with `cursor: none` on `body`. Two `<div>` elements replace it:

```
#cursor-dot    → small filled circle, snaps instantly to mouse
#cursor-ring   → hollow circle, lags behind using lerp interpolation
```

```js
// Dot — instant snap
dot.style.left = mouseX + 'px';
dot.style.top  = mouseY + 'px';

// Ring — linear interpolation creates the organic lag
ringX += (mouseX - ringX) * 0.10;  // closes 10% of gap each frame
ringY += (mouseY - ringY) * 0.10;
```

On hover over `a`, `button`, `.nav-btn`, `.svc-tab`, `.faq-item__btn`:
- Dot **grows** from 10px → 24px
- Dot **turns red** (`--c-accent`)
- Ring **disappears** (`opacity: 0`)

---

## ✏️ Customisation Guide

### Your Personal Details

| What to update | File | Search for |
|---|---|---|
| Name in nav & footer | `index.html` | `Suhith<span class="dot">` |
| Email in ticker | `index.html` | `suhith@email.com` |
| LinkedIn link | `index.html` | `social-icon` with `href="#"` |
| GitHub link | `index.html` | `social-icon` with `href="#"` |
| Twitter/X link | `index.html` | `social-icon` with `href="#"` |
| About / bio paragraph | `index.html` | `class="meet__bio"` |
| Career timeline rows | `index.html` | `class="timeline__row"` |

---

### Projects (Works Carousel)

Each project slide follows this structure:

```html
<div class="work-card">

  <div class="work-card__left">
    <p class="work-card__desc">One-line description</p>
    <div>
      <div class="work-card__num">01 / 05</div>
      <div class="work-card__name">Project Name</div>
    </div>
  </div>

  <div class="work-card__visual">
    <canvas id="wc1"></canvas>   ← animated automatically
  </div>

  <div class="work-card__meta">
    <div class="meta-group"><label>YEAR</label><div class="big">2025</div></div>
    <div class="meta-group"><label>ROLE</label><div class="sm">Your Role</div></div>
    <div class="meta-group">
      <label>TECH STACK</label>
      <ul>
        <li>Tool 1</li>
        <li>Tool 2</li>
      </ul>
    </div>
  </div>

</div>
```

To add a 6th project: copy a `work-card` block, give its canvas `id="wc6"`, update content, then add this line to `script.js`:

```js
// Inside the window.addEventListener('load') block
makeWorkCanvas('wc6', 5);  // 5 = palette index 0-4, wraps automatically
```

---

### Accent Colour

```css
/* style.css → :root block */
--c-accent: #E8441A;   /* Change to any hex */
```

---

### FAQ Items

```html
<div class="faq-item">
  <button class="faq-item__btn" onclick="toggleFaq(this)">
    Your question here?
    <span class="faq-item__icon">+</span>
  </button>
  <div class="faq-item__answer">
    <p>Your answer here.</p>
  </div>
</div>
```

Add `.open` class to any item to have it expanded by default.

---

## 🚀 Deployment

### Netlify Drop — 30 seconds, free

```
1. Go to netlify.com/drop
2. Drag the suhith-portfolio/ folder onto the page
3. Done — you get a live https:// URL instantly
```

---

### Vercel — 1 minute, free

```bash
npm i -g vercel       # install once
cd suhith-portfolio
vercel                # follow the prompts
```

---

### GitHub Pages — free, supports custom domains

```bash
# In the suhith-portfolio/ folder:
git init
git add .
git commit -m "feat: portfolio launch"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Then: GitHub repo → Settings → Pages
# Source: Deploy from branch → main → / (root) → Save
# Live at: https://YOUR_USERNAME.github.io/portfolio
```

> **Custom domain:** Add a `CNAME` file with your domain name to the repo root, then configure DNS.

---

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
cd suhith-portfolio
firebase init hosting
# Public directory: .  (dot = current folder)
# Configure as SPA: No
firebase deploy
```

---

## 🔍 How Key Features Work

### 3D Floating Hero Cards

Five project cards float around the hero canvas, bouncing off edges. Each `requestAnimationFrame` tick:

```
1. Position updated: card.rx += card.vx × sin(t + index)
2. Bounce check: if out of bounds, reverse velocity
3. Parallax offset: px = cx + (cx - W/2) × tiltX   where tiltX = (mouseX/W - 0.5) × 0.04
4. Render: shadow → white body → coloured header bar → title text → animated mini bars
```

### Diagonal Ribbon Tickers

Pure CSS. Two `div`s inside a clipping container:

```css
.ribbon--red   { top: 22px;  transform: rotate(-4deg); background: #E8441A; }
.ribbon--black { top: 100px; transform: rotate(-4deg); background: #111111; }

.ribbon__inner             { animation: marqueeLeft  17s linear infinite; }
.ribbon--black .ribbon__inner { animation: marqueeLeft  22s linear infinite reverse; }
```

Content duplicated so the seamless loop never shows a gap.

### Scroll Reveal

```js
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);  // fire once, then stop watching
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
```

CSS does the actual animation:

```css
.reveal         { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
.reveal.visible { opacity: 1; transform: none; }
.reveal.d1      { transition-delay: .1s; }   /* stagger siblings */
.reveal.d2      { transition-delay: .2s; }
```

---

## 📋 Browser Support

| Browser | Version | Status |
|---|---|---|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| Mobile Chrome / Safari | Latest | ✅ Touch + responsive |

> **Custom cursor** hides itself on touch devices — no stray elements left on screen.

---

## 👤 About the Builder

**KKS Suhith Sravan Babu**
B.Tech Computer Science & Engineering · SRM Institute of Science and Technology, Trichy · Class of 2027

Building production-grade AI systems, GenAI pipelines, and Python-first backend infrastructure. Open to AI/ML and Backend engineering internships — 2025 / 2026.

**Core Stack**

```
Python · FastAPI · PyTorch · TensorFlow · LangChain · LlamaIndex
Pinecone · PostgreSQL · MongoDB · Docker · AWS · MLflow · React
```

**Connect**

| Platform | Link |
|---|---|
| 📧 Email | suhith@email.com |
| 💼 LinkedIn | linkedin.com/in/suhith |
| 🐙 GitHub | github.com/suhith-sravan |
| 🐦 Twitter/X | x.com/suhith |

---

## 📄 License

```
MIT License

Copyright (c) 2025 KKS Suhith Sravan Babu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, distribute, or sell
copies — subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

<div align="center">

<br/>

**Built with 🔥 by Suhith**

*Vanilla HTML · CSS · JavaScript · Canvas API · Zero frameworks · Zero excuses*

<br/>

*If this helped you — drop a ⭐ on the repo.*

<br/>

</div>
