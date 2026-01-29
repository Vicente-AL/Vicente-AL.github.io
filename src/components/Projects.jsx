import { useState } from "react";
import { useMouseTilt } from "../hooks/useMouseTilt";

const PROJECTS_PER_PAGE = 6;

const PROJECTS = [
  {
    tag: "Backend · API",
    title: "High-Throughput Service",
    desc: "Scalable API and event pipeline. Tech: Node/Go, Kafka, PostgreSQL.",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    imageAlt: "Code editor",
  },
  {
    tag: "Systems",
    title: "Distributed Worker System",
    desc: "Queue-based workers, retries, monitoring. Replace with your project.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Code", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    imageAlt: "Server infrastructure",
  },
  {
    tag: "Full-Stack",
    title: "Internal Tooling",
    desc: "Admin dashboards, reporting, integrations. Add your real projects here.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Code", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    imageAlt: "Dashboard UI",
  },
  {
    tag: "Software Engineering",
    title: "Platform SDK & CLI",
    desc: "Developer tools, SDK, and CLI for internal platform. Documentation and examples.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    imageAlt: "Laptop development",
  },
  {
    tag: "API · Event-Driven",
    title: "Real-Time Notification Hub",
    desc: "WebSocket + event pipeline for live alerts. Tech: Node, Redis, Socket.io.",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "Analytics dashboard",
  },
  {
    tag: "DevOps · Cloud",
    title: "CI/CD Pipeline & IaC",
    desc: "GitHub Actions, Terraform, and deployment automation for multi-env.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    imageAlt: "Cloud infrastructure",
  },
  {
    tag: "Full-Stack",
    title: "Customer Portal",
    desc: "B2B portal with SSO, billing, and reporting. React, Node, Stripe.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Code", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    imageAlt: "Team collaboration",
  },
  {
    tag: "Data · ML",
    title: "Recommendation Engine",
    desc: "Internal recommendation service. Python, FastAPI, vector DB.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    imageAlt: "Data pipeline",
  },
  {
    tag: "Backend",
    title: "Payment Gateway Integration",
    desc: "Stripe, webhooks, idempotency. Node.js, PostgreSQL.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Code", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    imageAlt: "Payment flow",
  },
  {
    tag: "Full-Stack",
    title: "Design System & Docs",
    desc: "Component library, Storybook, and documentation site.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d31cc5b5?w=600&q=80",
    imageAlt: "Design system",
  },
  {
    tag: "Systems",
    title: "Observability Stack",
    desc: "Metrics, tracing, dashboards. Prometheus, Grafana, OpenTelemetry.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "Observability",
  },
  {
    tag: "API",
    title: "Public API & Developer Portal",
    desc: "REST API, rate limiting, API keys, docs. OpenAPI, Swagger.",
    links: [
      { label: "Portal", href: "#" },
      { label: "Docs", href: "#" },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    imageAlt: "API docs",
  },
];

function ProjectCard({ project }) {
  const tilt = useMouseTilt();
  return (
    <article
      className="project-card"
      data-project
      ref={tilt.ref}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}>
      <div className="project-card__glow" />
      {project.image && (
        <div className="project-card__image-wrap">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="project-card__image"
          />
        </div>
      )}
      <div className="project-card__inner">
        <span className="project-card__tag">{project.tag}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <div className="project-card__links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} className="project-card__link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);
  const start = page * PROJECTS_PER_PAGE;
  const pageProjects = PROJECTS.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">04</span>
          Projects
        </h2>
        <div className="projects__grid-wrap">
          <div key={page} className="projects__grid projects__grid--animate">
            {pageProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
        {totalPages > 1 && (
          <div className="projects__pagination">
            <button
              type="button"
              className="projects__pagination-btn"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous page">
              ← Prev
            </button>
            <div className="projects__pagination-dots">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`projects__pagination-dot ${i === page ? "projects__pagination-dot--active" : ""}`}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="projects__pagination-btn"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next page">
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
