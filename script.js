(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = [...document.querySelectorAll('.nav-menu a')];
  const toast = document.getElementById('toast');
  let toastTimer;

  const showToast = (message) => {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 4500);
  };

  const closeMenu = () => {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navMenu?.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const portrait = document.getElementById('portrait-stage');
  if (portrait && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    portrait.addEventListener('pointermove', (event) => {
      const bounds = portrait.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
      portrait.style.setProperty('--portrait-x', `${x.toFixed(2)}px`);
      portrait.style.setProperty('--portrait-y', `${y.toFixed(2)}px`);
    });
    portrait.addEventListener('pointerleave', () => {
      portrait.style.setProperty('--portrait-x', '0px');
      portrait.style.setProperty('--portrait-y', '0px');
    });
  }

  // Re-align deep links after local webfonts finish loading and the page height settles.
  if (window.location.hash) {
    const alignDeepLink = () => document.querySelector(window.location.hash)?.scrollIntoView();
    if (document.fonts?.ready) document.fonts.ready.then(alignDeepLink);
    else window.addEventListener('load', alignDeepLink, { once: true });
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((element) => revealObserver.observe(element));
  }

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  document.querySelectorAll('[data-resume]').forEach((link) => {
    link.addEventListener('click', async (event) => {
      if (window.location.protocol === 'file:') return;
      event.preventDefault();
      const resumeUrl = link.getAttribute('href');
      try {
        const response = await fetch(resumeUrl, { method: 'HEAD' });
        if (response.ok) {
          const download = document.createElement('a');
          download.href = resumeUrl;
          download.download = '';
          document.body.appendChild(download);
          download.click();
          download.remove();
          return;
        }
      } catch (_) {
        // The user-facing notice below handles missing or unreachable files.
      }
      showToast('The final resume PDF has not been added yet. Add it to the resumes folder and this download will activate automatically.');
    });
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitButton = form?.querySelector('button[type="submit"]');
  let lastSubmission = 0;

  const messages = {
    name: 'Please enter at least 2 characters.',
    email: 'Please enter a valid email address.',
    subject: 'Please enter a subject of at least 3 characters.',
    message: 'Please enter a message of at least 10 characters.'
  };

  const validateField = (field) => {
    const wrapper = field.closest('.field');
    const error = wrapper?.querySelector('.field-error');
    const valid = field.checkValidity();
    wrapper?.classList.toggle('invalid', !valid);
    field.setAttribute('aria-invalid', String(!valid));
    if (error) error.textContent = valid ? '' : messages[field.name];
    return valid;
  };

  form?.querySelectorAll('input:not(.honeypot), textarea').forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.field')?.classList.contains('invalid')) validateField(field);
    });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.elements.company.value) return;

    const fields = [...form.querySelectorAll('input:not(.honeypot), textarea')];
    const valid = fields.map(validateField).every(Boolean);
    if (!valid) {
      status.textContent = 'Please correct the highlighted fields.';
      status.className = 'form-status error';
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const now = Date.now();
    if (now - lastSubmission < 30000) {
      status.textContent = 'Please wait a moment before sending another message.';
      status.className = 'form-status error';
      return;
    }

    lastSubmission = now;
    submitButton.disabled = true;
    submitButton.textContent = 'Opening email…';
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:kocherlasravan@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Your email app has been opened with the message ready to send.';
    status.className = 'form-status success';
    window.setTimeout(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send Message <span aria-hidden="true">↗</span>';
    }, 2500);
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Particle Background Animation
  const canvas = document.getElementById('bg-canvas');
  if (canvas && !reducedMotion) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 65;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize, { passive: true });
    resize();
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r = Math.random() * 2 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(228, 70, 40, 0.16)';
        ctx.fill();
      }
    }
    
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(23, 21, 18, ${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    animate();
  }
})();
