import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS_PER_VIEW = 3;

const TESTIMONIALS = [
  {
    quote:
      "A rare combination of deep technical skill and clear communication. Delivered a critical system redesign on time and mentored the team throughout.",
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face&q=80",
  },
  {
    quote:
      "One of the best senior developers I've worked with. Consistently ships clean, well-tested code and is always willing to help others level up.",
    name: "Marcus Webb",
    role: "Staff Engineer",
    company: "ScaleUp",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&q=80",
  },
  {
    quote:
      "Brought clarity and structure to our API platform. The architecture decisions made under their lead have held up as we've grown 10x.",
    name: "Jordan Lee",
    role: "VP of Engineering",
    company: "DataFlow",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&q=80",
  },
  {
    quote:
      "Exceptional problem solver. Turned a messy legacy codebase into a maintainable system with clear boundaries and tests.",
    name: "Alex Rivera",
    role: "Tech Lead",
    company: "BuildCo",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&q=80",
  },
  {
    quote:
      "Strong communicator and architect. The design docs and RFCs they wrote became the standard for our team.",
    name: "Sam Kim",
    role: "Senior Engineer",
    company: "FlowTech",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=120&h=120&fit=crop&crop=face&q=80",
  },
  {
    quote:
      "Reliable, thorough, and a great mentor. Helped onboard several juniors and improved our code review culture.",
    name: "Jordan Taylor",
    role: "Engineering Director",
    company: "ScaleUp",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face&q=80",
  },
];

const AUTO_ADVANCE_MS = 6000;

function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(0);
  const n = TESTIMONIALS.length;
  const totalSlides = Math.ceil(n / TESTIMONIALS_PER_VIEW);

  const goNext = useCallback(() => {
    setSlideIndex((i) => (i + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setSlideIndex((i) => (i - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const id = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [goNext]);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">06</span>
          Testimonials
        </h2>
        <p className="testimonials__subtitle">
          What colleagues and leaders say about working together.
        </p>
        <div className="testimonials__carousel">
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={goPrev}
            aria-label="Previous slide">
            ←
          </button>
          <div className="testimonials__viewport">
            <div
              className="testimonials__track"
              style={{
                width: `${totalSlides * 100}%`,
                transform: `translateX(-${(slideIndex / totalSlides) * 100}%)`,
              }}>
              {Array.from({ length: totalSlides }, (_, slide) => {
                const from = slide * TESTIMONIALS_PER_VIEW;
                const slice = TESTIMONIALS.slice(
                  from,
                  from + TESTIMONIALS_PER_VIEW,
                );
                return (
                  <div
                    key={slide}
                    className="testimonials__slide"
                    style={{ flex: `0 0 ${100 / totalSlides}%` }}
                    aria-hidden={slide !== slideIndex}>
                    {slice.map((t) => (
                      <article
                        key={t.name}
                        className="testimonial-card testimonial-card--active">
                        <div className="testimonial-card__glow" />
                        <blockquote className="testimonial-card__quote">
                          "{t.quote}"
                        </blockquote>
                        <div className="testimonial-card__author">
                          <img
                            src={t.avatar}
                            alt=""
                            className="testimonial-card__avatar"
                            width={48}
                            height={48}
                          />
                          <div>
                            <cite className="testimonial-card__name">
                              {t.name}
                            </cite>
                            <p className="testimonial-card__role">
                              {t.role} · {t.company}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            className="testimonials__arrow testimonials__arrow--next"
            onClick={goNext}
            aria-label="Next slide">
            →
          </button>
        </div>
        <div className="testimonials__dots">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`testimonials__dot ${i === slideIndex ? "testimonials__dot--active" : ""}`}
              onClick={() => setSlideIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
