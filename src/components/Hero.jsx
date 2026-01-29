import { useMouse } from "../contexts/MouseContext";

const HERO_STRENGTH = 12;
const HEX_STRENGTH = 20;

const FLOATING_TAGS = [
  { label: "React", left: 8, top: 12, delay: 0, duration: 18 },
  { label: "Node.js", left: 76, top: 8, delay: 1.2, duration: 22 },
  { label: "TypeScript", left: 45, top: 72, delay: 0.4, duration: 20 },
  { label: "Python", left: 92, top: 35, delay: 2.1, duration: 16 },
  { label: "Go", left: 18, top: 58, delay: 0.8, duration: 24 },
  { label: "GraphQL", left: 62, top: 85, delay: 1.5, duration: 19 },
  { label: "REST API", left: 5, top: 42, delay: 2.8, duration: 21 },
  { label: "System Design", left: 88, top: 68, delay: 0.2, duration: 17 },
  { label: "Architecture", left: 32, top: 22, delay: 1.8, duration: 23 },
  { label: "Kafka", left: 55, top: 5, delay: 3.2, duration: 20 },
  { label: "PostgreSQL", left: 12, top: 78, delay: 0.6, duration: 25 },
  { label: "Docker", left: 78, top: 52, delay: 2.4, duration: 18 },
  { label: "AWS", left: 38, top: 45, delay: 1.1, duration: 22 },
  { label: "Microservices", left: 95, top: 18, delay: 0.9, duration: 19 },
  { label: "CI/CD", left: 25, top: 88, delay: 2.6, duration: 21 },
  { label: "DDD", left: 70, top: 38, delay: 1.4, duration: 17 },
  { label: "Event-Driven", left: 48, top: 15, delay: 3.0, duration: 24 },
  { label: "Clean Code", left: 85, top: 82, delay: 0.3, duration: 20 },
];

function Hero() {
  const { x, y } = useMouse();

  return (
    <section id="hero" className="hero">
      {/* Decorative: floating tech tags */}
      <div className="hero__float-wrap" aria-hidden="true">
        {FLOATING_TAGS.map((tag, i) => (
          <span
            key={`${tag.label}-${i}`}
            className="hero__float-tag"
            style={{
              left: `${tag.left}%`,
              top: `${tag.top}%`,
              animationDelay: `${tag.delay}s`,
              animationDuration: `${tag.duration}s`,
            }}>
            {tag.label}
          </span>
        ))}
      </div>
      {/* Decorative: node network lines */}
      <div className="hero__nodes" aria-hidden="true">
        <svg
          className="hero__nodes-svg"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient
              id="hero-line-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%">
              <stop offset="0%" stopColor="rgba(0,212,255,0)" />
              <stop offset="50%" stopColor="rgba(0,212,255,0.4)" />
              <stop offset="100%" stopColor="rgba(0,212,255,0)" />
            </linearGradient>
          </defs>
          <line x1="50" y1="80" x2="200" y2="150" className="hero__node-line" />
          <line
            x1="200"
            y1="150"
            x2="350"
            y2="80"
            className="hero__node-line hero__node-line--2"
          />
          <line
            x1="200"
            y1="150"
            x2="200"
            y2="220"
            className="hero__node-line hero__node-line--3"
          />
          <line
            x1="100"
            y1="220"
            x2="200"
            y2="150"
            className="hero__node-line hero__node-line--4"
          />
          <circle cx="50" cy="80" r="3" className="hero__node-dot" />
          <circle
            cx="200"
            cy="150"
            r="4"
            className="hero__node-dot hero__node-dot--center"
          />
          <circle cx="350" cy="80" r="3" className="hero__node-dot" />
          <circle cx="200" cy="220" r="3" className="hero__node-dot" />
          <circle cx="100" cy="220" r="3" className="hero__node-dot" />
        </svg>
      </div>
      {/* Rotating glow ring behind content */}
      <div className="hero__ring" aria-hidden="true" />
      <div className="container hero__wrap">
        <div
          className="hero__inner"
          style={{
            transform: `translate(${x * HERO_STRENGTH}px, ${y * HERO_STRENGTH}px)`,
          }}>
          <div className="hero__ring-inner" aria-hidden="true" />
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Senior Software Developer
          </div>
          <p className="hero__name">Vicente Emmanuel Ayala Lozano</p>
          <h1 className="hero__title">
            <span className="hero__title-line">Building</span>
            <span className="hero__title-line hero__title-line--accent">
              Digital Foundations
            </span>
          </h1>
          <p className="hero__subtitle">
            Crafting scalable systems, clean architecture, and robust code. From
            backend services to distributed systems — code that lasts.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View Work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
      <div
        className="hero__hex hero__hex--left"
        aria-hidden="true"
        style={{
          transform: `translate(${-x * HEX_STRENGTH}px, ${-y * HEX_STRENGTH}px)`,
        }}
      />
      <div
        className="hero__hex hero__hex--right"
        aria-hidden="true"
        style={{
          transform: `translate(${x * HEX_STRENGTH}px, ${y * HEX_STRENGTH}px)`,
        }}
      />
      {/* Subtle scan line sweep */}
      <div className="hero__scanline" aria-hidden="true" />
    </section>
  );
}

export default Hero;
