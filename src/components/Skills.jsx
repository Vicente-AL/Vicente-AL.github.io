import { useMouseTilt } from "../hooks/useMouseTilt";

const ICONS = {
  frontend: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  ),
  backend: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  ),
  fullstack: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <path d="M4 4h6v6H4z" />
      <path d="M14 4h6v6h-6z" />
      <path d="M4 14h6v6H4z" />
      <path d="M14 14h6v6h-6z" />
    </svg>
  ),
  languages: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <path d="M4 6h16M4 12h10M4 18h7" />
    </svg>
  ),
  data: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  cloud: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  devops: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  practices: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const SKILLS = [
  {
    title: "Frontend & UI",
    list: "React · Next.js · Vue · Svelte · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind · Sass · Redux · Zustand · React Query · Storybook · Vite · Webpack · Responsive · A11y",
    icon: ICONS.frontend,
  },
  {
    title: "Backend",
    list: "Node.js · Python · Go · Java · C# · .NET Core · FastAPI · Express · Nest · REST · GraphQL · gRPC · WebSockets · Auth · Stripe · Webhooks · Message queues",
    icon: ICONS.backend,
  },
  {
    title: "Full-Stack & APIs",
    list: "Full-stack apps · API design · BFF · Serverless · Edge · Monorepos · Nx · Turborepo · tRPC · OpenAPI · Swagger · API gateways · Rate limiting",
    icon: ICONS.fullstack,
  },
  {
    title: "Languages & Core",
    list: "JavaScript/TS · Python · Go · Java · C# · SQL · Bash · OOP · DDD · Clean Code · Design Patterns · SOLID · Data structures · Algorithms",
    icon: ICONS.languages,
  },
  {
    title: "Data & Systems",
    list: "PostgreSQL · MongoDB · Redis · Kafka · RabbitMQ · Elasticsearch · Caching · Microservices · Event sourcing · CDC · Vector DBs · Time-series",
    icon: ICONS.data,
  },
  {
    title: "Architecture & Cloud",
    list: "AWS · GCP · Azure · Docker · Kubernetes · Event-Driven · DDD · System Design · High availability · Scalability · IaC · Serverless",
    icon: ICONS.cloud,
  },
  {
    title: "DevOps & Tools",
    list: "Git · GitHub Actions · Jenkins · Terraform · Linux · Nginx · Observability · Logging · Monitoring · Prometheus · Grafana · Datadog · Debugging",
    icon: ICONS.devops,
  },
  {
    title: "Software Engineering",
    list: "TDD · CI/CD · Code Review · Agile · Scrum · Documentation · Mentoring · Technical Leadership · RFCs · Incident response · On-call",
    icon: ICONS.practices,
  },
];

function SkillCard({ skill }) {
  const tilt = useMouseTilt();
  return (
    <div
      className="skill-card"
      data-skill
      ref={tilt.ref}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}>
      <div className="skill-card__icon">{skill.icon}</div>
      <h3 className="skill-card__title">{skill.title}</h3>
      <p className="skill-card__list">
        {skill.list}
        <span className="skill-card__ellipsis" aria-hidden="true">
          ⋯
        </span>
      </p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">02</span>
          Skills & Tech
        </h2>
        <div className="skills__grid">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
