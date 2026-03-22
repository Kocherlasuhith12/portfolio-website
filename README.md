# Suhith — AI Engineer Portfolio
### Reference: agero.framer.website

---

## ✅ What's Implemented (Full Audit)

| Feature | Status | How |
|---|---|---|
| **Custom cursor** | ✅ Dot + lagging ring | `#cursor-dot` + `#cursor-ring` in JS, `cursor:none` on body |
| **OS cursor hidden** | ✅ Completely gone | `cursor: none` on `body` and `button` in CSS |
| **Cursor hover state** | ✅ Grows red on links | `.cursor-hover` class toggled by JS |
| **Theme: Light cream bg** | ✅ `#f0eeea` | Exact match to Agero screenshots |
| **Accent colour** | ✅ `#E8441A` | Exact Agero red-orange, used everywhere |
| **Black text** | ✅ `#111111` | Heavy editorial weight |
| **Fonts (offline)** | ✅ Poppins + Lora | Bundled in `/fonts/` folder, no internet needed |
| **Top badge** | ✅ Pulsing green dot | CSS keyframe animation |
| **Sticky nav** | ✅ | `position:sticky`, backdrop blur |
| **Hero heading** | ✅ Giant editorial type | `clamp(60px, 8.5vw, 112px)` |
| **Hero inline pills** | ✅ 3 animated canvases | Neural net, waveform, bar chart — Canvas API |
| **Hero 3D floating cards** | ✅ Mouse parallax | Canvas API, requestAnimationFrame |
| **Tech marquee** | ✅ Scrolling left | CSS `@keyframes marqueeLeft` |
| **Diagonal ribbons** | ✅ Red + black, crossing | CSS `rotate(-4deg)`, opposite scroll directions |
| **(hello) label** | ✅ Lora italic, accent red | Font-family serif, color var(--c-accent) |
| **Ghost watermarks** | ✅ Behind sections | Large faded text, `z-index:0`, `pointer-events:none` |
| **Testimonial stats card** | ✅ Dark card, big numbers | |
| **Testimonial carousel** | ✅ Animated bg + quotes | Canvas glow orbs, prev/next, touch swipe |
| **Works carousel** | ✅ 3-column dark cards | Canvas animated visuals per slide |
| **Services tabs** | ✅ 3 tabs, active indicator | JS `switchTab()`, scrolling bg text |
| **Meet section** | ✅ Photo + timeline | Painted canvas portrait, badge, social icons |
| **Awards table** | ✅ Hover pill appears | CSS scale transform on `.award-row__pill` |
| **Pricing cards** | ✅ Light + dark stacked | Gradient dark card, feature lists |
| **FAQ accordion** | ✅ Two-column grid | `max-height` transition, JS toggle |
| **Contact form** | ✅ Blurred bg canvas | Canvas project grid behind form |
| **Email ticker** | ✅ Scrolling marquee | CSS animation |
| **Footer gradient** | ✅ Red radial behind footer | `radial-gradient` at bottom |
| **Footer wordmark** | ✅ Giant outlined "Suhith" | `-webkit-text-stroke` |
| **Live clock (IST)** | ✅ Chennai timezone | `toLocaleString` with `Asia/Kolkata` |
| **Scroll reveal** | ✅ Fade + slide up | `IntersectionObserver` |
| **3D card tilt** | ✅ Mouse perspective | `rotateX/Y` CSS transforms |

---

## 🗂 File Structure

```
suhith-portfolio/
├── index.html       ← All HTML (semantic, BEM class names)
├── style.css        ← Complete design system (22 sections, documented)
├── script.js        ← All JS (15 features, documented)
├── README.md        ← This file
└── fonts/
    ├── fonts.css          ← @font-face (local, offline)
    ├── Poppins-Regular.ttf
    ├── Poppins-Medium.ttf
    ├── Poppins-Bold.ttf
    └── Lora-Variable.ttf
```

---

## 🛠 Tools Used

All **vanilla** — zero npm, zero frameworks, zero build step.

| Tool | What it does |
|---|---|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Full design system, grid, flexbox |
| **CSS Custom Properties** | Design tokens (`--c-accent`, `--c-bg`, etc.) |
| **CSS @keyframes** | Marquee scroll animations |
| **CSS Grid** | All section layouts |
| **CSS Flexbox** | Component layouts |
| **CSS perspective** | 3D card tilt effect |
| **Vanilla JavaScript (ES6+)** | All interactivity |
| **Canvas API** | Every animated visual (3D cards, charts, orbs, portraits) |
| **requestAnimationFrame** | 60fps render loops |
| **IntersectionObserver API** | Scroll-triggered reveal animations |
| **Local Fonts (.ttf)** | Poppins + Lora — fully offline, no Google Fonts CDN |

---

## 🚀 Run in VS Code

1. Install **Live Server** extension (Ritwick Dey)
2. `File → Open Folder` → select `suhith-portfolio`
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://127.0.0.1:5500`

**Or just double-click `index.html`** — works in any browser with no server.

> ⚠️ If double-clicking and fonts look wrong, use Live Server instead
> (browsers block local file:// font loading; Live Server uses http://)

---

## 🎨 Customise

| What | Where in index.html | Where in style.css |
|---|---|---|
| Your email | `.email-ticker__item` text | — |
| Social links | `.social-icon` hrefs + meet section | — |
| Accent colour | — | `--c-accent: #E8441A` |
| Background | — | `--c-bg: #f0eeea` |
| Project content | `work-card` blocks | — |
| Name/logo | `.nav__logo`, `.footer__brand-name` | — |

---

## 🌐 Deploy Free

- **Netlify Drop** → drag folder to [netlify.com/drop](https://netlify.com/drop)
- **Vercel** → drag folder at [vercel.com](https://vercel.com)
- **GitHub Pages** → push to repo → Settings → Pages → Deploy from root
