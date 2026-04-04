/* =============================================
   SUHITH PORTFOLIO — script.js
   
   TOOLS USED (all vanilla, zero npm needed):
   - Canvas API     → all animated visuals / 3D floating cards
   - requestAnimationFrame → smooth 60fps render loops 
   - IntersectionObserver  → scroll-triggered reveal
   - CSS custom properties → design tokens read from :root
   - Web Animations API    → subtle entrance transitions
    
   WHAT THIS FILE DOES: 
   1.  Custom cursor  (dot + lagging ring, hides OS cursor)
   2.  Hero pill canvases (3 inline animated icons in heading)
   3.  Hero 3D floating project cards (canvas, mouse-parallax)
   4.  Testimonial background canvases (animated glow orbs)
   5.  Work slide canvases (data-viz gradient animations)
   6.  Service panel canvases (animated bar charts)
   7.  Meet section canvas (painted portrait bg)
   8.  Contact background canvas (blurred project grid)
   9.  Carousel (works + testimonials, touch-swipe too)
   10. Service tab switcher
   11. FAQ accordion
   12. Contact form send feedback
   13. Live IST clock in footer
   14. Scroll reveal (IntersectionObserver)
   15. 3D mouse-tilt on cards (vanilla CSS transforms)
   ============================================= */

'use strict';

/* ─────────────────────────────────────────────
   1. CUSTOM CURSOR
   Replaces OS cursor with dot + lagging ring.
   cursor:none in CSS hides the OS arrow.
   We lerp (linearly interpolate) the ring
   position each frame for the "lag" feel.
───────────────────────────────────────────── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

let mouseX = window.innerWidth  / 2;
let mouseY = window.innerHeight / 2;
let ringX  = mouseX;
let ringY  = mouseY;
const LERP = 0.1;   /* 0 = no lag, 1 = instant; 0.1 feels good */

/* Update raw mouse position on every move */
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

/* Lerp ring position in rAF loop */
(function animateRing() {
  ringX += (mouseX - ringX) * LERP;
  ringY += (mouseY - ringY) * LERP;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

/* Grow dot + hide ring when hovering interactive elements */
document.querySelectorAll('a, button, .nav-btn, .svc-tab, .faq-item__btn').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ─────────────────────────────────────────────
   UTILITY: draw rounded rect on canvas
───────────────────────────────────────────── */
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}
function rrectTop(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/* Resize canvas to its CSS display size (fixes blurry rendering) */
function fitCanvas(c) {
  const w = c.offsetWidth;
  const h = c.offsetHeight;
  if (c.width !== w || c.height !== h) {
    c.width  = w;
    c.height = h;
  }
  return { w, h };
}

/* ─────────────────────────────────────────────
   2. HERO PILL CANVASES
   Three small rounded canvases embedded inside
   the hero heading between words.
───────────────────────────────────────────── */
function startHeroPill(id, type) {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = c.getContext('2d');
  const W = 92, H = 70;
  c.width = W; c.height = H;
  let t = 0;

  const RED = '#E8441A';

  function tick() {
    ctx.clearRect(0, 0, W, H);

    if (type === 1) {
      /* Neural-net spinning spokes */
      ctx.fillStyle = '#0d0d0d';
      ctx.fillRect(0, 0, W, H);
      const CX = 46, CY = 35;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 + t;
        const nx = CX + 22 * Math.cos(a);
        const ny = CY + 16 * Math.sin(a);
        ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(nx, ny);
        ctx.strokeStyle = 'rgba(232,68,26,.3)'; ctx.lineWidth = 1; ctx.stroke();
        ctx.beginPath(); ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = RED; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(CX, CY, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = RED; ctx.fill();

    } else if (type === 2) {
      /* Dual sine waveform */
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, W, H);
      ctx.beginPath();
      for (let x = 0; x < W; x++) {
        const y = H / 2 + Math.sin(x * 0.13 + t) * 13 + Math.sin(x * 0.28 + t * 1.4) * 6;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = RED; ctx.lineWidth = 2.5; ctx.stroke();

    } else {
      /* Animated bar chart */
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 4; i++) {
        const bh = 16 + Math.sin(t + i) * 13;
        ctx.fillStyle = `rgba(232,68,26,${0.3 + i * 0.18})`;
        ctx.fillRect(10 + i * 20, H - bh, 14, bh);
      }
    }

    t += 0.030;
    requestAnimationFrame(tick);
  }
  tick();
}

startHeroPill('hc1', 1);
startHeroPill('hc2', 2);
startHeroPill('hc3', 3);

/* ─────────────────────────────────────────────
   3. HERO 3D FLOATING PROJECT CARDS
   Canvas fills the bottom of the hero section.
   Cards float, bounce off edges, and parallax
   slightly based on mouse position.
───────────────────────────────────────────── */
(function heroFloatingCards() {
  const c = document.getElementById('hero3d');
  if (!c) return;
  const ctx = c.getContext('2d');

  const CARDS = [
    { rx:.10, ry:.25, rw:.24, rh:.52, vx: .00035, vy: .00025, label:'ClinicalMind',    sub:'Healthcare AI',  clr:'#E8441A' },
    { rx:.36, ry:.08, rw:.28, rh:.56, vx:-.00028, vy: .00032, label:'AI Risk Predictor',sub:'ML Dashboard',  clr:'#ff6b3d' },
    { rx:.66, ry:.20, rw:.22, rh:.50, vx: .00032, vy:-.00028, label:'LLM Pipeline',    sub:'Fine-tuning',    clr:'#333' },
    { rx:.14, ry:.66, rw:.20, rh:.28, vx:-.00038, vy: .00020, label:'AI Interviewer',  sub:'LangChain',      clr:'#555' },
    { rx:.64, ry:.62, rw:.18, rh:.30, vx: .00022, vy: .00038, label:'Traffic AI',      sub:'YOLOv8',         clr:'#444' },
  ];

  let t = 0;
  let mx = 0.5, my = 0.5;   /* normalised mouse 0–1 */

  window.addEventListener('resize', () => {
    c.width  = c.offsetWidth;
    c.height = c.offsetHeight;
  });
  c.width  = c.offsetWidth;
  c.height = c.offsetHeight;

  document.addEventListener('mousemove', e => {
    mx = e.clientX / window.innerWidth;
    my = e.clientY / window.innerHeight;
  });

  function draw() {
    const W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H);

    const tiltX = (mx - 0.5) * 0.04;
    const tiltY = (my - 0.5) * 0.04;

    CARDS.forEach((card, i) => {
      /* Float movement */
      card.rx += card.vx * Math.sin(t * 0.5 + i);
      card.ry += card.vy * Math.cos(t * 0.5 + i);
      if (card.rx < 0 || card.rx + card.rw > 1) card.vx *= -1;
      if (card.ry < 0 || card.ry + card.rh > 1) card.vy *= -1;
      card.rx = Math.max(0, Math.min(1 - card.rw, card.rx));
      card.ry = Math.max(0, Math.min(1 - card.rh, card.ry));

      const cx = card.rx * W, cy = card.ry * H;
      const cw = card.rw * W, ch = card.rh * H;
      /* Parallax offset */
      const px = cx + (cx - W / 2) * tiltX;
      const py = cy + (cy - H / 2) * tiltY;

      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,.20)';
      ctx.shadowBlur   = 30;
      ctx.shadowOffsetY = 8;

      ctx.fillStyle = '#fff';
      rrect(ctx, px, py, cw, ch, 14); ctx.fill();
      ctx.shadowColor = 'transparent';

      ctx.fillStyle = card.clr;
      rrectTop(ctx, px, py, cw, 34, 14); ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.font = 'bold 13px Poppins,sans-serif';
      ctx.fillText(card.label, px + 14, py + 23);

      ctx.fillStyle = 'rgba(0,0,0,.35)';
      ctx.font = '11px Poppins,sans-serif';
      ctx.fillText(card.sub, px + 14, py + 52);

      /* Animated mini bars at card bottom */
      for (let b = 0; b < 4; b++) {
        const bh = 9 + Math.sin(t * 1.5 + b + i) * 7;
        ctx.fillStyle = card.clr + '40';
        ctx.fillRect(px + 14 + b * 18, py + ch - bh - 16, 12, bh);
      }
      ctx.restore();
    });

    t += 0.008;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─────────────────────────────────────────────
   4. TESTIMONIAL BG CANVASES
───────────────────────────────────────────── */
function makeTestiCanvas(id, accent) {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = c.getContext('2d');
  let t = 0;
  function draw() {
    const { w, h } = fitCanvas(c);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 3; i++) {
      const gx = w * (0.2 + i * 0.3) + Math.sin(t + i * 1.2) * 55;
      const gy = h * 0.5 + Math.cos(t * 0.7 + i) * 65;
      const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, 190);
      gr.addColorStop(0, accent + '38'); gr.addColorStop(1, 'transparent');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, w, h);
    }
    ctx.strokeStyle = 'rgba(255,255,255,.04)'; ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    t += 0.016; requestAnimationFrame(draw);
  }
  draw();
}

/* ─────────────────────────────────────────────
   5. WORK SLIDE CANVASES
───────────────────────────────────────────── */
const WC_PALETTES = [
  ['#E8441A','#ff9966'], ['#1a6e8e','#4db8d4'],
  ['#3a1a6e','#9966ff'], ['#1a6e3a','#66d49a'], ['#6e1a1a','#d46666'],
];
function makeWorkCanvas(id, pi) {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = c.getContext('2d');
  const [a, b] = WC_PALETTES[pi % WC_PALETTES.length];
  let t = 0;
  function draw() {
    const { w, h } = fitCanvas(c);
    ctx.clearRect(0, 0, w, h);
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, '#0a0a0a'); bg.addColorStop(1, '#181818');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 5; i++) {
      const ox = w / 2 + Math.sin(t * 0.5 + i * 1.3) * w * 0.32;
      const oy = h / 2 + Math.cos(t * 0.4 + i * 1.1) * h * 0.26;
      const gr = ctx.createRadialGradient(ox, oy, 0, ox, oy, w * 0.3);
      gr.addColorStop(0, (i % 2 === 0 ? a : b) + '2a'); gr.addColorStop(1, 'transparent');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, w, h);
    }
    ctx.strokeStyle = 'rgba(255,255,255,.04)'; ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 50) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += 50) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    ctx.beginPath();
    for (let x = 0; x <= w; x++) {
      const y = h * 0.55 + Math.sin(x * 0.05 + t) * h * 0.14 + Math.sin(x * 0.12 + t * 1.5) * h * 0.07;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = a + '66'; ctx.lineWidth = 2; ctx.stroke();
    for (let i = 0; i < 6; i++) {
      const nx = w * 0.08 + i * w * 0.16;
      const ny = h * 0.55 + Math.sin(nx * 0.05 + t) * h * 0.14 + Math.sin(nx * 0.12 + t * 1.5) * h * 0.07;
      ctx.beginPath(); ctx.arc(nx, ny, 5, 0, Math.PI * 2);
      ctx.fillStyle = a; ctx.fill();
    }
    t += 0.013; requestAnimationFrame(draw);
  }
  draw();
}

/* ─────────────────────────────────────────────
   6. SERVICE PANEL CANVASES
───────────────────────────────────────────── */
[
  { id:'sc1', clr:'#E8441A', lbl:'AI SYSTEM'   },
  { id:'sc2', clr:'#1a6e8e', lbl:'API SERVER'  },
  { id:'sc3', clr:'#3a1a6e', lbl:'ML PIPELINE' },
].forEach(({ id, clr, lbl }) => {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = c.getContext('2d');
  let t = 0;
  function draw() {
    const { w, h } = fitCanvas(c);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
    const BARS = 10;
    for (let i = 0; i < BARS; i++) {
      const bh    = (0.2 + Math.abs(Math.sin(t * 1.2 + i * 0.7))) * h * 0.65;
      const bx    = w * 0.08 + i * (w * 0.85 / BARS);
      const alpha = 0.15 + Math.abs(Math.sin(t + i * 0.4)) * 0.5;
      ctx.fillStyle = clr + Math.round(alpha * 255).toString(16).padStart(2, '0');
      ctx.fillRect(bx, h - bh - 28, w * 0.85 / BARS - 6, bh);
    }
    ctx.font = 'bold 12px Poppins,sans-serif'; ctx.fillStyle = clr + 'aa'; ctx.fillText(lbl, 18, 30);
    const pr = 16 + Math.sin(t * 2) * 5;
    ctx.beginPath(); ctx.arc(w - 36, 36, pr, 0, Math.PI * 2); ctx.strokeStyle = clr + '40'; ctx.lineWidth = 2; ctx.stroke();
    ctx.beginPath(); ctx.arc(w - 36, 36, 7, 0, Math.PI * 2); ctx.fillStyle = clr; ctx.fill();
    t += 0.022; requestAnimationFrame(draw);
  }
  draw();
});

/* ─────────────────────────────────────────────
   7. MEET SECTION CANVAS (painted bg portrait)
───────────────────────────────────────────── */
(function meetCanvas() {
  const c = document.getElementById('meetCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let t = 0;
  function draw() {
    const { w, h } = fitCanvas(c);
    ctx.clearRect(0, 0, w, h);
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, '#c8a090'); bg.addColorStop(1, '#3a1a0a');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    const gx = w * 0.4 + Math.sin(t * 0.3) * 50, gy = h * 0.35 + Math.cos(t * 0.22) * 40;
    const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, 300);
    gr.addColorStop(0, 'rgba(255,150,100,.5)'); gr.addColorStop(1, 'transparent');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(0,0,0,.42)';
    ctx.beginPath(); ctx.ellipse(w/2, h*.44, w*.17, h*.22, 0, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w/2, h*.70, w*.13, h*.27, 0, 0, Math.PI);   ctx.fill();
    ctx.save();
    ctx.font = `bold ${Math.round(w * 0.42)}px Georgia,serif`;
    ctx.fillStyle = 'rgba(255,255,255,.06)';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('S', w/2, h/2);
    ctx.restore();
    t += 0.009; requestAnimationFrame(draw);
  }
  draw();
})();

/* ─────────────────────────────────────────────
   8. CONTACT BG CANVAS (blurred project cards)
───────────────────────────────────────────── */
(function contactCanvas() {
  const c = document.getElementById('contactBgCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const NAMES = ['ClinicalMind','Risk Predictor','LLM Pipeline','AI Interviewer','Traffic AI','GenAI'];
  let t = 0;
  function draw() {
    const { w, h } = fitCanvas(c);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0d0d0d'; ctx.fillRect(0, 0, w, h);
    const COLS=2, ROWS=3, GAP=12;
    const cw = (w - GAP * 3) / COLS;
    const ch = (h - GAP * 4) / ROWS;
    NAMES.forEach((name, i) => {
      const col = i % COLS, row = Math.floor(i / COLS);
      const x = GAP + (cw + GAP) * col, y = GAP + (ch + GAP) * row;
      const hue = i * 42;
      ctx.save();
      ctx.filter = 'blur(5px)';
      ctx.fillStyle = `hsla(${hue},60%,25%,.8)`;
      rrect(ctx, x, y, cw, ch, 10); ctx.fill();
      ctx.filter = 'none';
      ctx.fillStyle = `hsla(${hue},70%,58%,1)`;
      ctx.font = 'bold 12px Poppins,sans-serif';
      ctx.fillText(name, x + 12, y + 24);
      const bw = (0.4 + Math.sin(t + i) * 0.3) * cw * 0.6;
      ctx.fillStyle = `hsla(${hue},70%,58%,.5)`;
      ctx.fillRect(x + 12, y + ch - 22, bw, 6);
      ctx.restore();
    });
    t += 0.016; requestAnimationFrame(draw);
  }
  draw();
})();

/* ─────────────────────────────────────────────
   Kick off all canvases after DOM is ready
───────────────────────────────────────────── */
window.addEventListener('load', () => {
  makeTestiCanvas('tc1', '#E8441A');
  makeTestiCanvas('tc2', '#ff6b3d');
  makeTestiCanvas('tc3', '#888888');
  for (let i = 1; i <= 5; i++) makeWorkCanvas('wc' + i, i - 1);
});

/* ─────────────────────────────────────────────
   9. CAROUSEL FACTORY
   Works for both Works and Testimonials.
   Also supports touch swipe.
───────────────────────────────────────────── */
function makeCarousel(trackId, prevId, nextId) {
  const track = document.getElementById(trackId);
  const btnPrev = document.getElementById(prevId);
  const btnNext = document.getElementById(nextId);
  if (!track || !btnPrev || !btnNext) return;
  let cur = 0;
  const items = track.children;

  function goTo(n) {
    cur = ((n % items.length) + items.length) % items.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
  }
  btnPrev.addEventListener('click', () => goTo(cur - 1));
  btnNext.addEventListener('click', () => goTo(cur + 1));

  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? cur + 1 : cur - 1);
  });
}

makeCarousel('worksTrack',  'wPrev', 'wNext');
makeCarousel('testiTrack',  'tPrev', 'tNext');

/* ─────────────────────────────────────────────
   10. SERVICE TABS
───────────────────────────────────────────── */
window.switchTab = function (btn, panelId) {
  document.querySelectorAll('.svc-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.svc-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
};

/* ─────────────────────────────────────────────
   11. FAQ ACCORDION
───────────────────────────────────────────── */
window.toggleFaq = function (btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
};

/* ─────────────────────────────────────────────
   12. CONTACT FORM
───────────────────────────────────────────── */
window.submitForm = function (btn) {
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓  Message sent! Talk soon.';
    btn.style.background = '#3dbc7a';
    btn.style.color = '#fff';
  }, 1400);
};

/* ─────────────────────────────────────────────
   13. LIVE CLOCK (IST / Chennai)
───────────────────────────────────────────── */
function tickClock() {
  const el = document.getElementById('footerClock');
  if (!el) return;
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  el.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
    .map(n => String(n).padStart(2, '0')).join(':');
}
setInterval(tickClock, 1000);
tickClock();

/* ─────────────────────────────────────────────
   14. SCROLL REVEAL (IntersectionObserver)
───────────────────────────────────────────── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ─────────────────────────────────────────────
   15. MOUSE-TILT 3D ON CARDS
   Uses CSS perspective + rotateX/Y from mouse.
───────────────────────────────────────────── */
document.querySelectorAll('.testi-slide, .price-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(1.015)`;
    card.style.transition = 'transform 0s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform .4s ease';
    card.style.transform  = '';
  });
});
