import { useMouseTilt } from "../hooks/useMouseTilt";

const GOALS = [
  {
    title: "Build systems that scale",
    desc: "Design and deliver reliable, performant systems that grow with the product and the team. Think APIs, data pipelines, and infrastructure that handle 10x load without rewrites.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Ship clean, maintainable code",
    desc: "Prioritize clarity, tests, and documentation so that the next developer can move fast. Reduce bus factor and technical debt so we keep shipping without slowing down.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Lead by example",
    desc: "Mentor, review code, and share knowledge so the whole team raises the bar together. I care about inclusive, feedback-driven cultures where people grow.",
    icon: (
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
  },
  {
    title: "Stay curious",
    desc: "Keep learning new tools and patterns so we choose the right solution, not just the familiar one. Experiment, read, and stay close to the broader tech ecosystem.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
  },
  {
    title: "Collaborate across teams",
    desc: "Work closely with product, design, and other engineering teams. Clear communication and shared ownership make better products and fewer surprises in production.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Reduce complexity",
    desc: "Simplify systems and avoid over-engineering. Favor boring technology and clear abstractions so we spend less time debugging and more time delivering value.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5">
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="2" />
        <path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
      </svg>
    ),
  },
];

function Mission() {
  return (
    <section id="mission" className="section mission">
      <div className="mission__bg" aria-hidden="true">
        <svg
          className="mission__constellation"
          viewBox="0 0 400 320"
          preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient
              id="mission-line-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 0)" />
              <stop offset="50%" stopColor="rgba(0, 212, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
            </linearGradient>
          </defs>
          <g className="mission__nodes">
            <line
              x1="80"
              y1="80"
              x2="200"
              y2="120"
              className="mission__edge mission__edge--1"
            />
            <line
              x1="200"
              y1="120"
              x2="320"
              y2="80"
              className="mission__edge mission__edge--2"
            />
            <line
              x1="80"
              y1="160"
              x2="200"
              y2="160"
              className="mission__edge mission__edge--3"
            />
            <line
              x1="200"
              y1="160"
              x2="320"
              y2="160"
              className="mission__edge mission__edge--4"
            />
            <line
              x1="80"
              y1="240"
              x2="200"
              y2="200"
              className="mission__edge mission__edge--5"
            />
            <line
              x1="200"
              y1="200"
              x2="320"
              y2="240"
              className="mission__edge mission__edge--6"
            />
            <line
              x1="200"
              y1="120"
              x2="200"
              y2="200"
              className="mission__edge mission__edge--7"
            />
            <line
              x1="80"
              y1="80"
              x2="80"
              y2="240"
              className="mission__edge mission__edge--8"
            />
            <line
              x1="320"
              y1="80"
              x2="320"
              y2="240"
              className="mission__edge mission__edge--9"
            />
            <circle cx="80" cy="80" r="2" className="mission__node" />
            <circle
              cx="200"
              cy="120"
              r="2.5"
              className="mission__node mission__node--hub"
            />
            <circle cx="320" cy="80" r="2" className="mission__node" />
            <circle cx="80" cy="160" r="2" className="mission__node" />
            <circle
              cx="200"
              cy="160"
              r="2.5"
              className="mission__node mission__node--hub"
            />
            <circle cx="320" cy="160" r="2" className="mission__node" />
            <circle cx="80" cy="240" r="2" className="mission__node" />
            <circle
              cx="200"
              cy="200"
              r="2.5"
              className="mission__node mission__node--hub"
            />
            <circle cx="320" cy="240" r="2" className="mission__node" />
          </g>
        </svg>
        <div className="mission__float mission__float--1" />
        <div className="mission__float mission__float--2" />
        <div className="mission__float mission__float--3" />
        <div className="mission__float mission__float--4" />
      </div>
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">05</span>
          Mission & Goals
        </h2>
        <p className="mission__lead">
          I aim to build software that lasts — through clear architecture,
          strong collaboration, and a focus on quality over speed. That means
          systems that scale, code that’s maintainable, and teams that keep
          learning and shipping. Here’s what drives me:
        </p>
        <div className="mission__grid">
          {GOALS.map((goal) => (
            <GoalCard key={goal.title} goal={goal} />
          ))}
        </div>
        <p className="mission__close">
          Together, these guide how I work, what I look for in teams, and where
          I want to invest my energy — building things that matter and helping
          others do the same.
        </p>
      </div>
    </section>
  );
}

function GoalCard({ goal }) {
  const tilt = useMouseTilt();
  return (
    <div
      className="mission__card"
      ref={tilt.ref}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}>
      <div className="mission__card-glow" />
      <div className="mission__card-icon">{goal.icon}</div>
      <h3 className="mission__card-title">{goal.title}</h3>
      <p className="mission__card-desc">{goal.desc}</p>
    </div>
  );
}

export default Mission;
