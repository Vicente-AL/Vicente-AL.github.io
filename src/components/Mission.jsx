import { useMouseTilt } from "../hooks/useMouseTilt";

const GOALS = [
  {
    title: "Build systems that scale",
    desc: "Design and deliver reliable, performant systems that grow with the product and the team.",
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
    desc: "Prioritize clarity, tests, and documentation so that the next developer can move fast.",
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
    desc: "Mentor, review code, and share knowledge so the whole team raises the bar together.",
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
    desc: "Keep learning new tools and patterns so we choose the right solution, not just the familiar one.",
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
];

function Mission() {
  return (
    <section id="mission" className="section mission">
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">05</span>
          Mission & Goals
        </h2>
        <p className="mission__lead">
          I aim to build software that lasts — through clear architecture,
          strong collaboration, and a focus on quality over speed. Here’s what
          drives me:
        </p>
        <div className="mission__grid">
          {GOALS.map((goal) => (
            <GoalCard key={goal.title} goal={goal} />
          ))}
        </div>
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
