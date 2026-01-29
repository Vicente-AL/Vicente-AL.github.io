const EXPERIENCE = [
  {
    date: "03/2024 – 01/2026",
    role: "Senior Software Engineer",
    company: "Confiz",
    stacks:
      "React, TypeScript, Node.js, Go, PostgreSQL, Kafka, REST APIs, event-driven systems, internal tooling, observability.",
    bullets: [
      "Full-stack ownership: frontend (React, TypeScript), backend APIs (Node.js, Go), and data layers (PostgreSQL, Kafka, event pipelines).",
      "Led design and delivery of scalable services; mentored engineers and drove technical decisions.",
      "Shipped internal tooling, dashboards, and integrations; improved reliability and observability.",
    ],
  },
  {
    date: "01/2022 – 03/2024",
    role: "Senior Software Engineer",
    company: "TrioSpace",
    stacks:
      "React, Vue, Node.js, Python, REST APIs, SSO, Stripe, CI/CD, cloud (AWS/GCP), SQL, NoSQL.",
    bullets: [
      "Full-stack development: React/Vue frontends, Node.js/Python backends, REST and event-driven APIs.",
      "Built and maintained B2B portals, admin dashboards, and reporting; integrated payment and auth (SSO).",
      "Backend focus on API design, database modeling, and deployment (CI/CD, cloud).",
    ],
  },
  {
    date: "08/2019 – 12/2021",
    role: "Software Engineer",
    company: "Thomson Reuters",
    stacks:
      "Java, Spring, Node.js, React, SQL, NoSQL, REST APIs, high-throughput services, platform tooling, testing.",
    bullets: [
      "Full-stack and backend: Java/Spring and Node.js services, React UIs, and SQL/NoSQL data stores.",
      "Delivered high-throughput APIs, real-time features, and platform tooling for internal products.",
      "Collaborated with product and platform teams; contributed to architecture, testing, and ops.",
    ],
  },
  {
    date: "2017 – 07/2019",
    role: "Junior Software Engineer",
    company: "Dell",
    stacks:
      "Java, C#, .NET, JavaScript, React, SQL Server, REST APIs, microservices, Azure, DevOps.",
    bullets: [
      "Full-stack features and bug fixes: Java/C# backend, React and .NET frontends, SQL Server, REST APIs.",
      "Supported internal platforms, integrations, and tooling; learned DevOps and cloud (Azure) practices.",
      "Worked with senior engineers on design and delivery; grew in testing, code review, and best practices.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">03</span>
          Experience
        </h2>
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <div key={item.company + item.date} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content">
                <span className="timeline__date">{item.date}</span>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                {item.stacks && (
                  <p className="timeline__stacks">
                    <strong>Tech:</strong> {item.stacks}
                  </p>
                )}
                {item.bullets && (
                  <ul className="timeline__bullets">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
