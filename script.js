/* ============================================================
   HKB PORTFOLIO — STYLE.CSS
   Design: Monochromatic dark, editorial, typographic-forward
   Accent: Electric amber / gold
   Fonts: Syne (display) + Instrument Sans (body) + DM Mono (code)
   ============================================================ */

/* ── RESET & VARIABLES ────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #080a0c;
  --bg2: #0e1114;
  --bg3: #13171c;
  --surface: #161b21;
  --surface2: #1c232b;
  --border: rgba(255,255,255,0.07);
  --border-hover: rgba(255,255,255,0.16);
  --text: #e8eaed;
  --text-muted: #7a8694;
  --text-dim: #4a5568;
  --accent: #f0b429;
  --accent2: #ffd166;
  --accent-glow: rgba(240,180,41,0.15);
  --accent-glow2: rgba(240,180,41,0.05);
  --red: #ff6b6b;
  --green: #51cf66;
  --font-display: 'Syne', sans-serif;
  --font-body: 'Instrument Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --radius: 12px;
  --radius-lg: 20px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 48px rgba(0,0,0,0.6);
  --transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  --nav-h: 70px;
}

[data-theme="light"] {
  --bg: #f5f4f0;
  --bg2: #eeede9;
  --bg3: #e8e7e2;
  --surface: #ffffff;
  --surface2: #f0efe9;
  --border: rgba(0,0,0,0.08);
  --border-hover: rgba(0,0,0,0.18);
  --text: #111418;
  --text-muted: #5a6270;
  --text-dim: #9aa0ac;
  --accent: #c98a00;
  --accent2: #e6a200;
  --accent-glow: rgba(201,138,0,0.12);
  --accent-glow2: rgba(201,138,0,0.04);
  --shadow: 0 4px 24px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 48px rgba(0,0,0,0.18);
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none;
  transition: background 0.4s, color 0.4s;
}

/* ── CUSTOM CURSOR ───────────────────────────────────────── */
.cursor-dot {
  position: fixed; top: 0; left: 0; width: 6px; height: 6px;
  background: var(--accent); border-radius: 50%; pointer-events: none;
  z-index: 10000; transform: translate(-50%,-50%);
  transition: width 0.2s, height 0.2s, opacity 0.2s;
}
.cursor-ring {
  position: fixed; top: 0; left: 0; width: 32px; height: 32px;
  border: 1.5px solid var(--accent); border-radius: 50%; pointer-events: none;
  z-index: 9999; transform: translate(-50%,-50%);
  transition: transform 0.12s ease, width 0.3s, height 0.3s, border-color 0.3s;
  opacity: 0.6;
}
.cursor-ring.hover { width: 48px; height: 48px; opacity: 1; border-color: var(--accent2); }
.cursor-dot.hover { width: 4px; height: 4px; }

@media (hover: none) { .cursor-dot, .cursor-ring { display: none; } body { cursor: auto; } }

/* ── LOADER ──────────────────────────────────────────────── */
#loader {
  position: fixed; inset: 0; z-index: 99999;
  background: var(--bg); display: flex; align-items: center; justify-content: center;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
#loader.hidden { opacity: 0; visibility: hidden; }
.loader-inner { text-align: center; }
.loader-bar {
  width: 120px; height: 2px; background: var(--border); border-radius: 99px;
  position: relative; margin: 0 auto 20px;
  overflow: hidden;
}
.loader-bar::after {
  content: ''; position: absolute; top: 0; left: -100%;
  width: 100%; height: 100%; background: var(--accent);
  animation: loaderSlide 1.2s ease forwards;
}
@keyframes loaderSlide { to { left: 0; } }
.loader-text {
  font-family: var(--font-display); font-size: 1.1rem;
  font-weight: 700; letter-spacing: 0.3em; color: var(--text-muted);
}

/* ── NAV ─────────────────────────────────────────────────── */
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: var(--nav-h); transition: var(--transition);
}
#navbar.scrolled {
  background: rgba(8,10,12,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
[data-theme="light"] #navbar.scrolled {
  background: rgba(245,244,240,0.85);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 32px;
  height: 100%; display: flex; align-items: center; gap: 32px;
}
.nav-logo {
  font-family: var(--font-display); font-size: 1.3rem; font-weight: 800;
  color: var(--text); text-decoration: none; letter-spacing: -0.02em; margin-right: auto;
}
.nav-logo span { color: var(--accent); }
.nav-links { display: flex; gap: 4px; list-style: none; }
.nav-link {
  font-size: 0.875rem; font-weight: 500; color: var(--text-muted);
  text-decoration: none; padding: 8px 14px; border-radius: 8px;
  transition: var(--transition); letter-spacing: 0.01em;
}
.nav-link:hover, .nav-link.active { color: var(--text); background: var(--surface2); }
.nav-actions { display: flex; align-items: center; gap: 12px; }
#theme-toggle {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 8px; padding: 8px 10px; cursor: none;
  color: var(--text-muted); font-size: 1rem;
  transition: var(--transition);
}
#theme-toggle:hover { color: var(--accent); border-color: var(--accent); }
.btn-resume {
  font-size: 0.8rem; font-weight: 600; letter-spacing: 0.04em;
  padding: 8px 18px; border-radius: 8px;
  background: var(--accent); color: #000;
  text-decoration: none; transition: var(--transition);
}
.btn-resume:hover { background: var(--accent2); transform: translateY(-1px); }
.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: none; padding: 4px;
}
.nav-hamburger span {
  display: block; width: 22px; height: 1.5px;
  background: var(--text); border-radius: 2px; transition: var(--transition);
}
.nav-mobile {
  display: none; flex-direction: column; gap: 0;
  padding: 12px 24px 20px;
  background: rgba(8,10,12,0.96);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav-mobile.open { display: flex; }
.nav-link-m {
  font-size: 1rem; color: var(--text-muted); text-decoration: none;
  padding: 12px 0; border-bottom: 1px solid var(--border);
  transition: var(--transition);
}
.nav-link-m.accent { color: var(--accent); border-bottom: none; margin-top: 8px; }
.nav-link-m:hover { color: var(--text); }

@media (max-width: 768px) {
  .nav-links, .nav-actions { display: none; }
  .nav-hamburger { display: flex; }
}

/* ── SHARED / UTILS ──────────────────────────────────────── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
.section-label {
  font-family: var(--font-mono); font-size: 0.75rem;
  color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 20px;
}
.section-title {
  font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 800; line-height: 1.1; letter-spacing: -0.03em;
  color: var(--text); margin-bottom: 40px;
}
.section-title em { color: var(--accent); font-style: normal; }

/* reveal animation */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* buttons */
.btn-primary {
  display: inline-block; font-family: var(--font-body);
  font-size: 0.875rem; font-weight: 600; letter-spacing: 0.02em;
  padding: 12px 28px; border-radius: 10px;
  background: var(--accent); color: #000;
  text-decoration: none; transition: var(--transition); border: none; cursor: none;
}
.btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 24px var(--accent-glow); }
.btn-primary.sm { padding: 8px 18px; font-size: 0.8rem; }
.btn-primary.full { width: 100%; text-align: center; }
.btn-ghost {
  display: inline-block; font-family: var(--font-body);
  font-size: 0.875rem; font-weight: 600; letter-spacing: 0.02em;
  padding: 12px 28px; border-radius: 10px;
  border: 1px solid var(--border); color: var(--text);
  text-decoration: none; transition: var(--transition); background: none; cursor: none;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
.btn-ghost.sm { padding: 8px 18px; font-size: 0.8rem; }

/* ── HERO ─────────────────────────────────────────────────── */
#hero {
  min-height: 100vh; padding-top: var(--nav-h);
  display: flex; align-items: center;
  position: relative; overflow: hidden;
}
.hero-bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
  opacity: 0.5;
}
.hero-orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px); pointer-events: none;
}
.orb1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(240,180,41,0.12), transparent 70%);
  top: -100px; right: -100px;
}
.orb2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(81,207,102,0.06), transparent 70%);
  bottom: 0; left: -100px;
}
.hero-inner {
  position: relative; z-index: 2;
  max-width: 1200px; margin: 0 auto; padding: 80px 32px;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono); font-size: 0.75rem;
  color: var(--text-muted); letter-spacing: 0.06em;
  background: var(--surface); border: 1px solid var(--border);
  padding: 6px 14px; border-radius: 99px; margin-bottom: 32px;
}
.badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green); box-shadow: 0 0 8px var(--green);
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
.hero-name {
  font-family: var(--font-display); font-size: clamp(3.5rem, 9vw, 7.5rem);
  font-weight: 800; line-height: 0.95; letter-spacing: -0.04em;
  color: var(--text); margin-bottom: 28px;
}
.hero-name em { color: var(--accent); font-style: normal; }
.hero-role {
  font-family: var(--font-mono); font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: var(--text-muted); margin-bottom: 28px;
  display: flex; align-items: center; gap: 12px;
}
.role-prefix { color: var(--accent); }
.cursor-blink { animation: blink 1s step-end infinite; color: var(--accent); }
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
.hero-summary {
  max-width: 580px; color: var(--text-muted); font-size: 1.05rem;
  line-height: 1.7; margin-bottom: 36px;
}
.hero-summary strong { color: var(--text); }
.hero-cta { display: flex; gap: 16px; margin-bottom: 64px; flex-wrap: wrap; }
.hero-stats {
  display: flex; gap: 32px; flex-wrap: wrap; align-items: center;
  padding-top: 40px; border-top: 1px solid var(--border);
}
.stat { text-align: left; }
.stat-num {
  font-family: var(--font-display); font-size: 2.4rem;
  font-weight: 800; color: var(--accent); line-height: 1;
}
.stat span { font-size: 1.6rem; color: var(--accent); }
.stat p { font-size: 0.75rem; color: var(--text-dim); font-family: var(--font-mono); margin-top: 4px; letter-spacing: 0.04em; }
.stat-divider { width: 1px; height: 48px; background: var(--border); }
.hero-scroll-hint {
  position: absolute; bottom: 40px; right: 40px;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--text-dim);
  writing-mode: vertical-rl;
}
.scroll-line {
  width: 1px; height: 60px; background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollLine 2s ease infinite;
}
@keyframes scrollLine { 0%{transform:scaleY(0);transform-origin:top;} 50%{transform:scaleY(1);transform-origin:top;} 51%{transform:scaleY(1);transform-origin:bottom;} 100%{transform:scaleY(0);transform-origin:bottom;} }

/* ── ABOUT ───────────────────────────────────────────────── */
#about { padding: 120px 0; }
.about-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
}
.about-bio { color: var(--text-muted); font-size: 1rem; line-height: 1.8; margin-bottom: 20px; }
.about-bio strong { color: var(--text); }
.about-links { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
.social-chip {
  font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.06em;
  padding: 8px 16px; border: 1px solid var(--border); border-radius: 8px;
  color: var(--text-muted); text-decoration: none; transition: var(--transition);
}
.social-chip:hover { border-color: var(--accent); color: var(--accent); }
.skills-heading {
  font-family: var(--font-mono); font-size: 0.7rem;
  color: var(--text-dim); letter-spacing: 0.1em; text-transform: uppercase;
  margin-bottom: 20px;
}
.skills-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.skill-tag {
  font-family: var(--font-mono); font-size: 0.78rem;
  padding: 8px 14px; border-radius: 8px;
  background: var(--surface); border: 1px solid var(--border);
  color: var(--text-muted); transition: var(--transition);
  cursor: default;
}
.skill-tag:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow2); }

/* ── PROJECTS ────────────────────────────────────────────── */
#projects { padding: 120px 0; background: var(--bg2); }
.filter-bar { display: flex; gap: 8px; margin-bottom: 48px; flex-wrap: wrap; }
.filter-btn {
  font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.06em;
  padding: 8px 18px; border-radius: 8px;
  border: 1px solid var(--border); background: none;
  color: var(--text-muted); cursor: none; transition: var(--transition);
}
.filter-btn.active, .filter-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-glow2); }
.projects-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;
}
.project-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px;
  transition: var(--transition); cursor: none;
  display: flex; flex-direction: column;
  position: relative; overflow: hidden;
}
.project-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0; transition: var(--transition);
}
.project-card:hover { border-color: var(--border-hover); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.project-card:hover::before { opacity: 1; }
.project-card.hidden { display: none; }
.project-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
.project-num { font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim); }
.project-category {
  font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.08em;
  padding: 4px 10px; border-radius: 6px;
  border: 1px solid var(--border); color: var(--text-dim);
}
.project-title {
  font-family: var(--font-display); font-size: 1.35rem; font-weight: 700;
  letter-spacing: -0.02em; color: var(--text); margin-bottom: 10px;
}
.project-desc { color: var(--text-muted); font-size: 0.9rem; line-height: 1.65; margin-bottom: 16px; flex-grow: 1; }
.project-metrics { display: flex; gap: 16px; margin-bottom: 20px; flex-wrap: wrap; }
.metric {
  font-family: var(--font-mono); font-size: 0.75rem;
  color: var(--accent); display: flex; align-items: center; gap: 4px;
}
.project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
.stack-tag {
  font-family: var(--font-mono); font-size: 0.68rem;
  padding: 4px 8px; border-radius: 5px;
  background: var(--bg3); color: var(--text-dim); border: 1px solid var(--border);
}
.project-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.btn-demo {
  font-size: 0.78rem; font-weight: 600; padding: 8px 16px; border-radius: 8px;
  background: var(--accent); color: #000; text-decoration: none; transition: var(--transition);
  display: inline-flex; align-items: center; gap: 6px;
}
.btn-demo:hover { background: var(--accent2); transform: translateY(-1px); }
.btn-details {
  font-size: 0.78rem; font-weight: 600; padding: 8px 16px; border-radius: 8px;
  border: 1px solid var(--border); color: var(--text-muted); background: none;
  cursor: none; transition: var(--transition);
}
.btn-details:hover { border-color: var(--accent); color: var(--accent); }

/* ── RESEARCH ────────────────────────────────────────────── */
#research { padding: 120px 0; }
.research-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 32px; align-items: start; }
.research-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 40px;
  position: relative; overflow: hidden;
}
.research-card::after {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
}
.research-card-top { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 20px; }
.research-badge {
  font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.08em;
  padding: 5px 12px; border-radius: 6px;
  background: var(--accent); color: #000; font-weight: 600;
}
.research-impact {
  font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent);
  border: 1px solid var(--accent); padding: 5px 12px; border-radius: 6px;
}
.research-title {
  font-family: var(--font-display); font-size: 1.6rem; font-weight: 700;
  letter-spacing: -0.025em; color: var(--text); line-height: 1.25; margin-bottom: 18px;
}
.research-abstract { color: var(--text-muted); font-size: 0.95rem; line-height: 1.75; margin-bottom: 22px; }
.research-abstract strong { color: var(--text); }
.research-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.research-tags span {
  font-family: var(--font-mono); font-size: 0.7rem;
  padding: 5px 11px; border-radius: 6px;
  background: var(--bg3); border: 1px solid var(--border); color: var(--text-dim);
}
.research-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.research-side { display: flex; flex-direction: column; gap: 16px; }
.research-highlight {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px;
  display: flex; gap: 16px; align-items: flex-start;
  transition: var(--transition);
}
.research-highlight:hover { border-color: var(--border-hover); }
.rh-icon { font-size: 1.4rem; }
.rh-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px; }
.rh-val { font-size: 0.9rem; color: var(--text); font-weight: 500; line-height: 1.4; }

/* ── CERTIFICATIONS ──────────────────────────────────────── */
#certifications { padding: 120px 0; background: var(--bg2); }
.certs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
.cert-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 28px;
  text-decoration: none; display: flex; gap: 20px; align-items: flex-start;
  transition: var(--transition); cursor: none; position: relative; overflow: hidden;
}
.cert-card:hover { border-color: var(--border-hover); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.cert-icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; flex-shrink: 0;
  background: var(--accent-glow2); border: 1px solid var(--border);
}
.cert-body { flex: 1; }
.cert-issuer { font-family: var(--font-mono); font-size: 0.68rem; color: var(--accent); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 6px; }
.cert-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--text); line-height: 1.3; margin-bottom: 8px; }
.cert-date { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); }
.cert-arrow {
  position: absolute; top: 28px; right: 28px;
  color: var(--text-dim); font-size: 1rem; transition: var(--transition);
}
.cert-card:hover .cert-arrow { color: var(--accent); transform: translate(3px, -3px); }

/* ── CONTACT ─────────────────────────────────────────────── */
#contact { padding: 120px 0; }
.contact-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: start; }
.contact-sub { color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 40px; margin-top: -16px; }
.contact-social { display: flex; flex-direction: column; gap: 12px; }
.social-link {
  display: inline-flex; align-items: center; gap: 12px;
  color: var(--text-muted); text-decoration: none; font-size: 0.9rem;
  font-weight: 500; transition: var(--transition); padding: 4px 0;
}
.social-link:hover { color: var(--accent); }
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); letter-spacing: 0.06em; text-transform: uppercase; }
.form-group input, .form-group textarea {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 14px 18px;
  color: var(--text); font-family: var(--font-body); font-size: 0.95rem;
  transition: var(--transition); resize: none; outline: none;
}
.form-group input:focus, .form-group textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); }
.form-group input.error, .form-group textarea.error { border-color: var(--red); }
.form-error { font-family: var(--font-mono); font-size: 0.7rem; color: var(--red); }
.form-success {
  display: none; text-align: center; padding: 12px; border-radius: var(--radius);
  background: rgba(81,207,102,0.1); border: 1px solid rgba(81,207,102,0.3);
  color: var(--green); font-size: 0.875rem;
}
.form-success.show { display: block; }

/* ── FOOTER ──────────────────────────────────────────────── */
footer {
  padding: 32px 0; border-top: 1px solid var(--border);
  background: var(--bg);
}
.footer-inner {
  display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
}
.footer-name { font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; }
.footer-copy { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); }
.footer-links { display: flex; gap: 16px; }
.footer-links a { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); text-decoration: none; letter-spacing: 0.04em; transition: var(--transition); }
.footer-links a:hover { color: var(--accent); }

/* ── MODAL ───────────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 5000;
  background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center; padding: 24px;
  opacity: 0; visibility: hidden; transition: var(--transition);
}
.modal-overlay.open { opacity: 1; visibility: visible; }
.modal {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius-lg); max-width: 680px; width: 100%;
  max-height: 90vh; overflow-y: auto; padding: 40px;
  position: relative; transform: translateY(24px) scale(0.97);
  transition: var(--transition);
}
.modal-overlay.open .modal { transform: translateY(0) scale(1); }
.modal-close {
  position: absolute; top: 20px; right: 20px;
  background: var(--surface2); border: 1px solid var(--border);
  color: var(--text-muted); width: 36px; height: 36px;
  border-radius: 50%; cursor: none; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}
.modal-close:hover { color: var(--accent); border-color: var(--accent); }
.modal-title {
  font-family: var(--font-display); font-size: 1.7rem; font-weight: 700;
  letter-spacing: -0.025em; color: var(--text); margin-bottom: 8px;
}
.modal-category { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); letter-spacing: 0.06em; margin-bottom: 20px; }
.modal-section-label { font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; margin: 20px 0 8px; }
.modal-desc { color: var(--text-muted); font-size: 0.95rem; line-height: 1.75; }
.modal-bullets { list-style: none; }
.modal-bullets li { color: var(--text-muted); font-size: 0.9rem; padding: 6px 0; border-bottom: 1px solid var(--border); display: flex; align-items: flex-start; gap: 8px; }
.modal-bullets li::before { content: '→'; color: var(--accent); flex-shrink: 0; font-family: var(--font-mono); }
.modal-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
.modal-stack span { font-family: var(--font-mono); font-size: 0.72rem; padding: 5px 10px; border-radius: 6px; background: var(--bg3); border: 1px solid var(--border); color: var(--text-dim); }
.modal-link {
  display: inline-flex; align-items: center; gap: 6px; margin-top: 24px;
  font-size: 0.875rem; font-weight: 600; padding: 12px 24px;
  border-radius: 10px; background: var(--accent); color: #000;
  text-decoration: none; transition: var(--transition);
}
.modal-link:hover { background: var(--accent2); }

/* ── RESPONSIVE ──────────────────────────────────────────── */
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
  .research-grid { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .hero-stats { gap: 20px; }
  .stat-divider { display: none; }
}
@media (max-width: 600px) {
  .container { padding: 0 20px; }
  .hero-inner { padding: 60px 20px; }
  .hero-scroll-hint { display: none; }
  #projects, #about, #research, #certifications, #contact { padding: 80px 0; }
  .projects-grid { grid-template-columns: 1fr; }
  .certs-grid { grid-template-columns: 1fr; }
  .modal { padding: 28px 20px; }
  .research-card { padding: 24px; }
  .hero-cta { flex-direction: column; }
  .hero-cta a { text-align: center; }
}

/* scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border-hover); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }
