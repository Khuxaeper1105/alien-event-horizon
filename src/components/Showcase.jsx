import React from 'react';

const projects = [
  { name: 'Nebula Commerce', phase: 'Luxury e-commerce', accent: 'violet', index: 1 },
  { name: 'Signal Atelier', phase: 'Creative systems', accent: 'cyan', index: 2 },
  { name: 'Afterglow Labs', phase: 'Brand strategy', accent: 'gold', index: 3 },
];

export default function Showcase() {
  return (
    <section className="showcase wrap" id="work">
      <div className="section-label">
        <span className="section-label-line" aria-hidden="true" />
        <span>Selected work</span>
      </div>
      <div className="showcase-grid">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`project-card ${project.accent}`}
            style={{ animationDelay: `${project.index * 100}ms` }}
          >
            <div className="project-glow" />
            <div className="project-backdrop" aria-hidden="true" />
            <div className="project-meta">
              <span>{project.phase}</span>
              <span className="arrow">↗</span>
            </div>
            <h4>{project.name}</h4>
            <div className="project-shine" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
