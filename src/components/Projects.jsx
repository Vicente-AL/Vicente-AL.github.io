import { useState } from "react";
import { useMouseTilt } from "../hooks/useMouseTilt";

const PROJECTS_PER_PAGE = 6;

/* Replace Live/Demo/Portal hrefs with your deployed URLs.
 * Images are local SVGs in public/images/projects/ — always load. */
const PROJECTS = [
  {
    tag: "Backend · API",
    title: "High-Throughput Service",
    desc: "Scalable API and event pipeline. Tech: Node/Go, Kafka, PostgreSQL.",
    links: [
      { label: "Live", href: "https://jsonplaceholder.typicode.com" },
      { label: "Code", href: "#" },
    ],
    image: "/images/projects/high-throughput.svg",
    imageAlt: "API and event pipeline code",
  },
  {
    tag: "Systems",
    title: "Distributed Worker System",
    desc: "Queue-based workers, retries, monitoring. Replace with your project.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Code", href: "#" },
    ],
    image: "/images/projects/distributed-worker.svg",
    imageAlt: "Server and queue infrastructure",
  },
  {
    tag: "Full-Stack",
    title: "Internal Tooling",
    desc: "Admin dashboards, reporting, integrations. Add your real projects here.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Code", href: "#" },
    ],
    image: "/images/projects/internal-tooling.svg",
    imageAlt: "Admin dashboard and reporting",
  },
  {
    tag: "Software Engineering",
    title: "Platform SDK & CLI",
    desc: "Developer tools, SDK, and CLI for internal platform. Documentation and examples.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image: "/images/projects/platform-sdk-cli.svg",
    imageAlt: "Developer tools and CLI",
  },
  {
    tag: "API · Event-Driven",
    title: "Real-Time Notification Hub",
    desc: "WebSocket + event pipeline for live alerts. Tech: Node, Redis, Socket.io.",
    links: [
      { label: "Live", href: "#" },
      { label: "Code", href: "#" },
    ],
    image: "/images/projects/realtime-notification.svg",
    imageAlt: "Real-time analytics and live alerts",
  },
  {
    tag: "DevOps · Cloud",
    title: "CI/CD Pipeline & IaC",
    desc: "GitHub Actions, Terraform, and deployment automation for multi-env.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image: "/images/projects/cicd-iac.svg",
    imageAlt: "Cloud and deployment infrastructure",
  },
  {
    tag: "Full-Stack",
    title: "Customer Portal",
    desc: "B2B portal with SSO, billing, and reporting. React, Node, Stripe.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Code", href: "#" },
    ],
    image: "/images/projects/customer-portal.svg",
    imageAlt: "B2B customer portal",
  },
  {
    tag: "Data · ML",
    title: "Recommendation Engine",
    desc: "Internal recommendation service. Python, FastAPI, vector DB.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image: "/images/projects/recommendation-engine.svg",
    imageAlt: "Data and recommendation pipeline",
  },
  {
    tag: "Backend",
    title: "Payment Gateway Integration",
    desc: "Stripe, webhooks, idempotency. Node.js, PostgreSQL.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Code", href: "#" },
    ],
    image: "/images/projects/payment-gateway.svg",
    imageAlt: "Payment and transaction flow",
  },
  {
    tag: "Full-Stack",
    title: "Design System & Docs",
    desc: "Component library, Storybook, and documentation site.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image: "/images/projects/design-system.svg",
    imageAlt: "Design system and components",
  },
  {
    tag: "Systems",
    title: "Observability Stack",
    desc: "Metrics, tracing, dashboards. Prometheus, Grafana, OpenTelemetry.",
    links: [
      { label: "Docs", href: "#" },
      { label: "Repo", href: "#" },
    ],
    image: "/images/projects/observability.svg",
    imageAlt: "Monitoring and observability dashboards",
  },
  {
    tag: "API",
    title: "Public API & Developer Portal",
    desc: "REST API, rate limiting, API keys, docs. OpenAPI, Swagger.",
    links: [
      { label: "Portal", href: "#" },
      { label: "Docs", href: "#" },
    ],
    image: "/images/projects/public-api-portal.svg",
    imageAlt: "API documentation and developer portal",
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
