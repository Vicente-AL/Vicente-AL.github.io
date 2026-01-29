const EXPERIENCE = [
  {
    date: 'Present',
    role: 'Senior Software Developer',
    company: 'Your Company / Product',
    desc: 'Leading technical design, mentoring, and delivery of core services. Replace with your real experience.',
  },
  {
    date: '2022 – 2024',
    role: 'Software Developer',
    company: 'Previous Role',
    desc: 'Backend development, API design, and database optimization. Customize with your history.',
  },
  {
    date: '2020 – 2022',
    role: 'Junior → Mid Developer',
    company: 'Earlier Experience',
    desc: 'Full-stack features, bug fixes, and learning best practices. Add your own milestones.',
  },
]

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
            <div key={item.role + item.date} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content">
                <span className="timeline__date">{item.date}</span>
                <h3 className="timeline__role">{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <p className="timeline__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
