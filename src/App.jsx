import React from 'react';

const navItems = ['Work', 'Services', 'Process', 'Contact'];

const stats = [
  { label: 'Projects launched', value: '24+' },
  { label: 'Brand systems built', value: '11' },
  { label: 'Avg. launch speed', value: '3x' },
];

const features = [
  {
    title: 'AI-first product design',
    description:
      'Translating complex technologies into tactile, high-converting experiences that look premium and feel immediate.',
  },
  {
    title: 'Architected brand systems',
    description:
      'From identity to interface motion, I shape visual languages that hold across product, campaign, and culture.',
  },
  {
    title: 'Launch-ready execution',
    description:
      'Fast-moving strategy, engineering alignment, and narrative-led design that turns intention into momentum.',
  },
];

const projects = [
  { name: 'Nebula Commerce', phase: 'Luxury e-commerce', accent: 'violet' },
  { name: 'Signal Atelier', phase: 'Creative systems', accent: 'cyan' },
  { name: 'Afterglow Labs', phase: 'Brand strategy', accent: 'gold' },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Orbitron:wght@500;700;800;900&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --bg: #04080e;
    --bg-2: #0a1020;
    --panel: rgba(10, 17, 30, 0.72);
    --panel-strong: rgba(11, 17, 28, 0.92);
    --line: rgba(145, 181, 255, 0.18);
    --text: #eff6ff;
    --muted: #a8bddc;
    --soft: #6c7ea0;
    --cyan: #53f0ff;
    --violet: #9a7cff;
    --gold: #ffd166;
    --pink: #ff5dcf;
    --green: #69ffb7;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Archivo', sans-serif;
    background:
      radial-gradient(circle at 15% 10%, rgba(154, 124, 255, 0.28), transparent 23%),
      radial-gradient(circle at 82% 12%, rgba(83, 240, 255, 0.18), transparent 20%),
      radial-gradient(circle at 50% 90%, rgba(255, 93, 207, 0.08), transparent 18%),
      linear-gradient(135deg, #03070d 0%, #0a0e18 38%, #050910 100%);
    color: var(--text);
  }
  a { color: inherit; }

  .app-shell {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    isolation: isolate;
  }

  .app-shell::before,
  .app-shell::after {
    content: '';
    position: absolute;
    inset: auto;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(30px);
    opacity: 0.5;
  }

  .app-shell::before {
    width: 550px;
    height: 550px;
    right: -120px;
    top: -80px;
    background: radial-gradient(circle, rgba(83, 240, 255, 0.22), transparent 60%);
  }

  .app-shell::after {
    width: 600px;
    height: 600px;
    left: -180px;
    top: 260px;
    background: radial-gradient(circle, rgba(154, 124, 255, 0.18), transparent 60%);
  }

  .bg-grid,
  .bg-noise,
  .scanlines {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  .bg-grid {
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: radial-gradient(circle at center, black 50%, transparent 100%);
  }

  .bg-noise {
    background: radial-gradient(rgba(255,255,255,0.07) 0.8px, transparent 0.8px);
    background-size: 12px 12px;
    opacity: 0.2;
  }

  .scanlines {
    background: repeating-linear-gradient(
      180deg,
      rgba(255,255,255,0.03),
      rgba(255,255,255,0.03) 1px,
      transparent 1px,
      transparent 3px
    );
    mix-blend-mode: screen;
    opacity: 0.4;
    animation: scan 7s linear infinite;
  }

  .wrap {
    width: min(1200px, calc(100% - 32px));
    margin: 0 auto;
  }

  .topbar {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0 18px;
  }

  .brand-mark {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.76rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--text);
  }

  .brand-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--cyan), var(--pink));
    box-shadow: 0 0 18px rgba(83, 240, 255, 0.9);
  }

  .nav {
    display: inline-flex;
    align-items: center;
    gap: 28px;
    padding: 12px 20px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(11, 17, 28, 0.45);
    backdrop-filter: blur(12px);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
  }

  .nav a {
    position: relative;
    color: var(--muted);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.7rem;
    font-weight: 600;
    transition: color 200ms ease;
  }

  .nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--cyan), var(--violet));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms ease;
  }

  .nav a:hover {
    color: var(--text);
  }

  .nav a:hover::after {
    transform: scaleX(1);
  }

  .primary-btn,
  .secondary-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 22px;
    border-radius: 999px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.68rem;
    font-weight: 800;
    transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
    overflow: hidden;
  }

  .primary-btn {
    background: linear-gradient(135deg, #9a7cff 0%, #53f0ff 50%, #ff5dcf 100%);
    color: #071019;
    box-shadow: 0 0 40px rgba(154, 124, 255, 0.45);
  }

  .primary-btn::before,
  .secondary-btn::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02));
    opacity: 0.5;
  }

  .primary-btn:hover,
  .secondary-btn:hover {
    transform: translateY(-2px);
  }

  .secondary-btn {
    border: 1px solid rgba(126, 158, 255, 0.24);
    background: rgba(9, 15, 28, 0.45);
    color: var(--text);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
  }

  .hero {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1.12fr 0.88fr;
    align-items: center;
    gap: 46px;
    padding: 76px 0 50px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: var(--cyan);
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .eyebrow::before {
    content: '';
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan));
  }

  .hero-title {
    margin: 22px 0 18px;
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(3.2rem, 7vw, 7.8rem);
    line-height: 0.93;
    letter-spacing: -0.06em;
    text-transform: uppercase;
  }

  .line {
    display: block;
    opacity: 0;
    transform: translateY(22px);
    animation: reveal 900ms cubic-bezier(0.2,0.8,0.2,1) forwards;
  }

  .line:nth-child(2) { animation-delay: 140ms; }
  .line:nth-child(3) { animation-delay: 280ms; }

  .accent {
    background: linear-gradient(135deg, #f7fbff 0%, #53f0ff 18%, #9a7cff 45%, #ff5dcf 72%, #ffd166 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shift 8s ease infinite;
    filter: drop-shadow(0 0 24px rgba(154, 124, 255, 0.55));
  }

  .lede {
    max-width: 640px;
    margin: 0;
    color: var(--muted);
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 30px;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(130px, 1fr));
    gap: 18px;
    margin-top: 38px;
    max-width: 540px;
  }

  .stat-box {
    position: relative;
    padding: 20px 16px 18px;
    border: 1px solid rgba(167, 188, 255, 0.14);
    border-radius: 18px;
    background: rgba(10, 16, 26, 0.52);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    overflow: hidden;
  }

  .stat-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(83,240,255,0.12), rgba(154,124,255,0.08), transparent);
  }

  .stat-box strong,
  .stat-box span {
    position: relative;
    z-index: 1;
  }

  .stat-box strong {
    display: block;
    font-size: clamp(1.4rem, 2vw, 2.2rem);
    font-weight: 800;
  }

  .stat-box span {
    display: block;
    margin-top: 8px;
    color: var(--muted);
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-family: 'Space Mono', monospace;
  }

  .hero-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 650px;
  }

  .orbit,
  .orb {
    position: absolute;
    border-radius: 50%;
  }

  .orbit {
    border: 1px solid rgba(177, 194, 250, 0.15);
    animation: spin 22s linear infinite;
  }

  .orbit-one {
    width: 480px;
    height: 480px;
  }

  .orbit-two {
    width: 600px;
    height: 600px;
    animation-direction: reverse;
    animation-duration: 28s;
    border-color: rgba(154, 124, 255, 0.18);
  }

  .orb-core {
    width: 320px;
    height: 320px;
    background: radial-gradient(circle at 30% 28%, rgba(83,240,255,0.95) 0%, rgba(154,124,255,0.75) 32%, rgba(255,93,207,0.32) 60%, rgba(10,16,26,0.1) 75%);
    box-shadow: 0 0 80px rgba(83,240,255,0.5), 0 0 130px rgba(154,124,255,0.3);
    animation: floatCore 4s ease-in-out infinite;
  }

  .glass-card {
    position: relative;
    z-index: 2;
    width: min(440px, 86%);
    padding: 26px 24px 22px;
    border-radius: 28px;
    background: linear-gradient(180deg, rgba(13,18,31,0.78), rgba(10,14,25,0.95));
    border: 1px solid rgba(145,181,255,0.16);
    backdrop-filter: blur(14px);
    box-shadow: 0 34px 90px rgba(2, 6, 12, 0.75), inset 0 1px 0 rgba(255,255,255,0.08);
    animation: cardFloat 7s ease-in-out infinite;
  }

  .card-topline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.66rem;
  }

  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 16px rgba(105,255,183,0.8);
  }

  .glass-card h2 {
    margin: 18px 0 20px;
    font-size: clamp(2rem, 3vw, 2.9rem);
    font-family: 'Orbitron', sans-serif;
    line-height: 1.05;
    letter-spacing: -0.08em;
  }

  .signal-bar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 20px;
  }

  .signal-bar span {
    display: block;
    height: 68px;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(83,240,255,0.22), rgba(154,124,255,0.95));
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.14), 0 0 24px rgba(83,240,255,0.18);
  }

  .signal-bar span:nth-child(2) { opacity: 0.8; }
  .signal-bar span:nth-child(3) { opacity: 0.9; }
  .signal-bar span:nth-child(4) { opacity: 0.72; }

  .mini-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .mini-grid div {
    padding-top: 12px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }

  .mini-grid small {
    display: block;
    color: var(--soft);
    font-size: 0.62rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-family: 'Space Mono', monospace;
  }

  .mini-grid strong {
    display: block;
    margin-top: 6px;
    font-size: 0.96rem;
  }

  .floating-tag {
    position: absolute;
    z-index: 3;
    padding: 12px 16px;
    border-radius: 999px;
    border: 1px solid rgba(145,181,255,0.18);
    background: rgba(8,13,22,0.7);
    box-shadow: 0 18px 40px rgba(0,0,0,0.32);
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-family: 'Space Mono', monospace;
    backdrop-filter: blur(8px);
    animation: drift 10s ease-in-out infinite;
  }

  .tag-one { top: 12%; right: 6%; }
  .tag-two { bottom: 18%; left: 4%; animation-delay: 2s; }

  .services,
  .showcase {
    position: relative;
    z-index: 2;
    padding: 30px 0 46px;
  }

  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: var(--cyan);
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.68rem;
    font-weight: 700;
  }

  .section-label::before {
    content: '';
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cyan));
  }

  .section-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
  }

  .section-head h3 {
    margin: 0;
    font-size: clamp(2.4rem, 4vw, 3.7rem);
    line-height: 1.04;
    letter-spacing: -0.08em;
    font-family: 'Orbitron', sans-serif;
  }

  .section-head p {
    max-width: 480px;
    margin: 0;
    color: var(--muted);
    line-height: 1.9;
  }

  .feature-grid,
  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
    margin-top: 32px;
  }

  .feature-item,
  .project-card {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(145,181,255,0.14);
    border-radius: 26px;
    background: linear-gradient(180deg, rgba(12,17,29,0.7), rgba(11,16,26,0.88));
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
  }

  .feature-item {
    padding: 26px 22px;
    min-height: 220px;
    transition: transform 220ms ease, border-color 220ms ease;
  }

  .feature-item:hover,
  .project-card:hover {
    transform: translateY(-4px);
    border-color: rgba(83,240,255,0.28);
  }

  .feature-item::before,
  .project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(83,240,255,0.06), transparent 55%, rgba(154,124,255,0.06));
    pointer-events: none;
  }

  .feature-index {
    position: relative;
    z-index: 1;
    color: var(--cyan);
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .feature-item h4 {
    position: relative;
    z-index: 1;
    margin: 18px 0 14px;
    font-size: 1.5rem;
    letter-spacing: -0.05em;
  }

  .feature-item p {
    position: relative;
    z-index: 1;
    margin: 0;
    color: var(--muted);
    line-height: 1.8;
  }

  .project-card {
    min-height: 290px;
    padding: 22px 22px 28px;
  }

  .project-glow {
    position: absolute;
    left: -20%;
    top: -28%;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    filter: blur(24px);
    opacity: 0.8;
  }

  .violet .project-glow { background: radial-gradient(circle, rgba(154,124,255,0.95), transparent 60%); }
  .cyan .project-glow { background: radial-gradient(circle, rgba(83,240,255,0.9), transparent 60%); }
  .gold .project-glow { background: radial-gradient(circle, rgba(255,209,102,0.8), transparent 60%); }

  .project-meta {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: 1px solid rgba(145,181,255,0.18);
    border-radius: 50%;
    font-size: 1rem;
    background: rgba(255,255,255,0.02);
  }

  .project-card h4 {
    position: absolute;
    left: 22px;
    bottom: 24px;
    z-index: 1;
    margin: 0;
    font-size: clamp(1.9rem, 3vw, 2.8rem);
    letter-spacing: -0.07em;
    font-family: 'Orbitron', sans-serif;
  }

  @keyframes reveal {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes floatCore {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.04); }
  }

  @keyframes cardFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-18px); }
  }

  @keyframes drift {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50% { transform: translate3d(10px, -14px, 0); }
  }

  @keyframes scan {
    from { transform: translateY(0); }
    to { transform: translateY(12px); }
  }

  @media (max-width: 980px) {
    .topbar {
      flex-wrap: wrap;
      gap: 18px;
    }

    .nav {
      order: 3;
      width: 100%;
      justify-content: center;
    }

    .hero {
      grid-template-columns: 1fr;
      padding-top: 54px;
    }

    .section-head {
      display: block;
    }

    .feature-grid,
    .showcase-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .wrap { width: min(100% - 20px, 1200px); }

    .nav {
      justify-content: space-between;
      gap: 14px;
      overflow-x: auto;
      padding: 10px 12px;
    }

    .nav a {
      white-space: nowrap;
    }

    .stats {
      grid-template-columns: 1fr;
    }

    .hero-visual {
      min-height: 500px;
    }

    .orb-core {
      width: 230px;
      height: 230px;
    }

    .orbit-one { width: 370px; height: 370px; }
    .orbit-two { width: 470px; height: 470px; }
  }
`;

export default function App() {
  return (
    <>
      <style>{styles}</style>

      <div className="app-shell">
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-noise" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />

        <header className="topbar wrap">
          <div className="brand-mark" aria-label="Alien Event Horizon home">
            <span className="brand-dot" /><span>AEH</span>
          </div>

          <nav className="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <a className="primary-btn" href="#contact">
            Book a call
          </a>
        </header>

        <main className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">Human + machine / signal design</div>

            <h1 className="hero-title">
              <span className="line">Build the</span>
              <span className="line accent">future</span>
              <span className="line">in motion.</span>
            </h1>

            <p className="lede">
              I design luxury digital experiences for founders, brands, and institutions who
              want to feel unmistakably premium — with the speed of a startup and the presence of a
              world-class studio.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#work">View projects</a>
              <a className="secondary-btn" href="#services">Explore services</a>
            </div>

            <div className="stats" aria-label="Key metrics">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured studio visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orb orb-core" />

            <div className="glass-card feature-card">
              <div className="card-topline">
                <span className="status-dot" />
                Live studio signal
              </div>
              <h2>Alien Event Horizon</h2>
              <div className="signal-bar">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="mini-grid">
                <div>
                  <small>Identity</small>
                  <strong>High-end</strong>
                </div>
                <div>
                  <small>Motion</small>
                  <strong>Driven</strong>
                </div>
                <div>
                  <small>Vibe</small>
                  <strong>Cyberpunk</strong>
                </div>
              </div>
            </div>

            <div className="floating-tag tag-one">Brand</div>
            <div className="floating-tag tag-two">Experience</div>
          </div>
        </main>

        <section className="services wrap" id="services">
          <div className="section-label">Capabilities</div>
          <div className="section-head">
            <h3>Luxury execution for ambitious brands.</h3>
            <p>
              I combine strategic clarity with cinematic visuals to shape memorable digital identities.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article key={feature.title} className="feature-item">
                <span className="feature-index">0{index + 1}</span>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase wrap" id="work">
          <div className="section-label">Selected work</div>
          <div className="showcase-grid">
            {projects.map((project) => (
              <article key={project.name} className={`project-card ${project.accent}`}>
                <div className="project-glow" />
                <div className="project-meta">
                  <span>{project.phase}</span>
                  <span className="arrow">↗</span>
                </div>
                <h4>{project.name}</h4>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
