/* ============================================================
   HKB PORTFOLIO — SCRIPT.JS
   Vanilla JS | Fully modular | Well-commented
   ============================================================ */

'use strict';

/* ── DATA ──────────────────────────────────────────────────── */

const SKILLS = [
  'Generative AI', 'LLMs', 'RAG Pipelines', 'NLP', 'Deep Learning',
  'GANs', 'Computer Vision', 'PyTorch', 'TensorFlow', 'LangChain',
  'Hugging Face', 'Scikit-learn', 'Streamlit', 'Flask', 'AWS',
  'Python', 'SQL', 'REST APIs', 'OpenCV', 'Pandas / NumPy',
  'BeautifulSoup', 'TextBlob', 'Git', 'Java'
];

const PROJECTS = [
  {
    id: 1,
    title: 'Market Mood AI (Sentinel V2)',
    category: 'nlp',
    categoryLabel: 'NLP · Sentiment',
    desc: 'Real-time financial sentiment analysis engine that processes 200+ articles per session and generates actionable trading signals via NLP-based scoring.',
    stack: ['Python', 'NLP', 'TextBlob', 'BeautifulSoup', 'Streamlit'],
    metrics: ['200+ articles/session', '80% effort reduced', 'Real-time signals'],
    liveUrl: 'https://ai-market-sentinel-v2-hv58xxeqde9lngqjwxs9ed.streamlit.app/',
    details: {
      overview: 'Sentinel V2 is an end-to-end NLP pipeline that scrapes financial news in real time, runs multi-model sentiment analysis, aggregates scores, and emits bullish/bearish/neutral signals — all within a sleek Streamlit dashboard.',
      highlights: [
        'Automated scraping of 200+ financial articles per session via BeautifulSoup',
        '80% reduction in manual analysis effort through full pipeline automation',
        'Dual-model sentiment scoring with TextBlob and custom lexicons',
        'Interactive charts, ticker search, and signal history dashboard',
        'One-click deployment on Streamlit Cloud with live data refresh',
      ]
    }
  },
  {
    id: 2,
    title: 'Smart Mirror: Virtual Try-On',
    category: 'vision',
    categoryLabel: 'Computer Vision',
    desc: 'GAN-based real-time virtual clothing try-on system with multi-angle rendering, achieving a 35% visual realism improvement over prior baselines.',
    stack: ['PyTorch', 'GANs', 'OpenCV', 'Computer Vision', 'Python'],
    metrics: ['35% realism ↑', 'Multi-angle render', 'Published research'],
    liveUrl: 'https://ai-virtual-try-on-engine.streamlit.app/',
    details: {
      overview: 'Smart Mirror combines body pose estimation, cloth warping networks, and appearance blending GANs to produce photorealistic virtual try-on results. The work was published in IJARSCT (Impact Factor 7.53).',
      highlights: [
        'Custom GAN architecture for multi-pose cloth warping and blending',
        '35% visual realism improvement over VITON-HD baseline (FID metric)',
        'Real-time rendering at interactive frame rates using optimized OpenCV pipelines',
        'Multi-angle view synthesis from single front-facing image',
        'Published in IJARSCT — peer reviewed, Impact Factor 7.53',
      ]
    }
  },
  {
    id: 3,
    title: 'Data Preprocessing Tool',
    category: 'tool',
    categoryLabel: 'ML Tooling',
    desc: 'Clean-with-Hari: an automated dataset cleaning tool that slashes preprocessing time by 60% — handles nulls, duplicates, encoding, and feature engineering.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'NumPy'],
    metrics: ['60% time saved', 'Multi-format support', 'One-click export'],
    liveUrl: 'https://clean-with-hari.streamlit.app/',
    details: {
      overview: 'A drag-and-drop data preprocessing web app that automates the most repetitive ML data preparation tasks, letting practitioners focus on modeling instead of cleaning.',
      highlights: [
        'Automated null imputation (mean, median, mode, KNN) with one click',
        'Smart duplicate detection and deduplication across all data types',
        'Label encoding, one-hot encoding, and ordinal encoding pipelines',
        'Feature correlation analysis and outlier visualization',
        '60% reduction in average dataset preparation time vs manual workflows',
      ]
    }
  },
  {
    id: 4,
    title: 'Dog vs Cat Classifier',
    category: 'ai',
    categoryLabel: 'AI · Classification',
    desc: 'CNN-powered image classification model achieving 94% accuracy, deployed as a REST API and an interactive Streamlit app.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'REST API', 'Streamlit'],
    metrics: ['94% accuracy', 'REST API', 'Real-time inference'],
    liveUrl: 'https://dogvscat-cx.streamlit.app/',
    details: {
      overview: 'End-to-end image classification project — from data augmentation and model training through REST API deployment and an interactive Streamlit frontend. Demonstrates full MLOps lifecycle.',
      highlights: [
        '94% test-set accuracy on binary image classification benchmark',
        'Convolutional feature extraction with transfer learning fine-tuning',
        'Flask REST API backend with JSON inference endpoint',
        'Interactive Streamlit app with image upload and confidence display',
        'Full MLOps pipeline: training → serving → monitoring',
      ]
    }
  }
];

const CERTIFICATIONS = [
  {
    icon: '🤖',
    issuer: 'IBM / Coursera',
    title: 'IBM AI Developer Professional Certificate',
    date: 'Apr 2026',
    url: 'https://github.com/harikrishna376/portfolio_new__/blob/main/public/ibm%20ai%20developer.pdf'
  },
  {
    icon: '🧠',
    issuer: 'University of Washington / Coursera',
    title: 'Machine Learning Specialization',
    date: 'Apr 2026',
    url: 'https://github.com/harikrishna376/portfolio_new__/blob/main/public/PYTHON%20COURSERA.pdf'
  },
  {
    icon: '☁️',
    issuer: 'Amazon Web Services',
    title: 'AWS Academy Graduate — Cloud Foundations',
    date: 'Sept 2024',
    url: 'https://github.com/harikrishna376/portfolio_new__/blob/main/public/aws%20cloud%20partitioner%20essentials.pdf'
  }
];

/* ── INIT ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initTheme();
  initNav();
  initTyping();
  initSkills();
  initProjects();
  initCerts();
  initFilters();
  initModal();
  initScrollReveal();
  initCounters();
  initContactForm();
  initScrollSpy();
});

/* ── LOADER ────────────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  // Wait for loader bar animation to finish (~1.4s) then fade out
  setTimeout(() => {
    loader.classList.add('hidden');
    // Start reveal animations after loader
    setTimeout(() => triggerVisibleReveals(), 200);
  }, 1500);
}

/* ── CURSOR ────────────────────────────────────────────────── */
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let raf;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    // Smooth lag for ring
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    raf = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const hoverEls = document.querySelectorAll('a, button, .project-card, .cert-card, .filter-btn, .research-highlight');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
  });
}

/* ── THEME ─────────────────────────────────────────────────── */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('hkb-theme') || 'dark';
  applyTheme(stored);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('hkb-theme', next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '◑' : '◐';
}

/* ── NAV ───────────────────────────────────────────────────── */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ── SCROLL SPY ─────────────────────────────────────────────── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

/* ── TYPING ANIMATION ───────────────────────────────────────── */
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const roles = ['ML Engineer', 'AI Developer', 'GAN Researcher', 'LLM Builder'];
  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = roles[roleIdx];
    if (deleting) {
      el.textContent = current.substring(0, --charIdx);
    } else {
      el.textContent = current.substring(0, ++charIdx);
    }

    let delay = deleting ? 60 : 110;
    if (!deleting && charIdx === current.length) {
      delay = 2000; deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }
    setTimeout(type, delay);
  }
  // Start after loader
  setTimeout(type, 1600);
}

/* ── SKILLS ─────────────────────────────────────────────────── */
function initSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  SKILLS.forEach((skill, i) => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag reveal';
    tag.textContent = skill;
    tag.style.transitionDelay = `${i * 30}ms`;
    grid.appendChild(tag);
  });
}

/* ── PROJECTS ────────────────────────────────────────────────── */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.setAttribute('data-category', p.category);
    card.style.transitionDelay = `${(i % 3) * 80}ms`;

    const metricsHTML = p.metrics.map(m => `<span class="metric">▲ ${m}</span>`).join('');
    const stackHTML = p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('');

    card.innerHTML = `
      <div class="project-top">
        <span class="project-num">0${i + 1}</span>
        <span class="project-category">${p.categoryLabel}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-metrics">${metricsHTML}</div>
      <div class="project-stack">${stackHTML}</div>
      <div class="project-actions">
        <a href="${p.liveUrl}" target="_blank" class="btn-demo">↗ Live Demo</a>
        <button class="btn-details" data-id="${p.id}">Details</button>
      </div>
    `;

    // Details button
    card.querySelector('.btn-details').addEventListener('click', () => openModal(p));

    grid.appendChild(card);
  });
}

/* ── FILTERS ─────────────────────────────────────────────────── */
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      document.querySelectorAll('.project-card').forEach(card => {
        const cat = card.getAttribute('data-category');
        const show = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

/* ── CERTIFICATIONS ──────────────────────────────────────────── */
function initCerts() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;

  CERTIFICATIONS.forEach((c, i) => {
    const card = document.createElement('a');
    card.className = 'cert-card reveal';
    card.href = c.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.transitionDelay = `${i * 100}ms`;

    card.innerHTML = `
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-body">
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-date">${c.date}</div>
      </div>
      <span class="cert-arrow">↗</span>
    `;

    grid.appendChild(card);
  });
}

/* ── MODAL ───────────────────────────────────────────────────── */
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(project) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  const bulletsHTML = project.details.highlights
    .map(h => `<li>${h}</li>`).join('');

  const stackHTML = project.stack.map(s => `<span>${s}</span>`).join('');

  content.innerHTML = `
    <div class="modal-category">${project.categoryLabel}</div>
    <h2 class="modal-title">${project.title}</h2>
    <div class="modal-section-label">Overview</div>
    <p class="modal-desc">${project.details.overview}</p>
    <div class="modal-section-label">Key Highlights</div>
    <ul class="modal-bullets">${bulletsHTML}</ul>
    <div class="modal-section-label">Tech Stack</div>
    <div class="modal-stack">${stackHTML}</div>
    <a href="${project.liveUrl}" target="_blank" class="modal-link">↗ Open Live Demo</a>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe all .reveal elements (excluding hero which triggers after loader)
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// For hero section: trigger immediately after loader
function triggerVisibleReveals() {
  const heroReveals = document.querySelectorAll('#hero .reveal');
  heroReveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 120);
  });
}

/* ── ANIMATED COUNTERS ───────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let started = false;

  const heroSection = document.getElementById('hero');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      counters.forEach(counter => animateCounter(counter));
    }
  }, { threshold: 0.5 });

  if (heroSection) observer.observe(heroSection);
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  // Delay slightly after loader
  setTimeout(() => requestAnimationFrame(update), 1800);
}

/* ── CONTACT FORM ────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) simulateSubmit();
  });

  // Live validation clear
  ['name', 'email', 'message'].forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', () => clearError(id));
    }
  });
}

function validateForm() {
  let valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value.trim()) {
    setError('name', 'Name is required.'); valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError('email', 'Enter a valid email address.'); valid = false;
  }
  if (!message.value.trim() || message.value.trim().length < 10) {
    setError('message', 'Message must be at least 10 characters.'); valid = false;
  }

  return valid;
}

function setError(id, msg) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + '-error');
  if (input) input.classList.add('error');
  if (error) error.textContent = msg;
}

function clearError(id) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + '-error');
  if (input) input.classList.remove('error');
  if (error) error.textContent = '';
}

function simulateSubmit() {
  const btn = document.querySelector('#contact-form .btn-primary');
  const success = document.getElementById('form-success');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Send Message ↗';
    btn.disabled = false;
    success.classList.add('show');
    document.getElementById('contact-form').reset();
    setTimeout(() => success.classList.remove('show'), 5000);
  }, 1200);
}

/* ── SMOOTH SCROLL ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
