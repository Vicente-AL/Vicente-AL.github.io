import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS_PER_VIEW = 3;

/* Leaders (not founders/CEOs) from Confiz, TrioSpace, Dell, Thomson Reuters.
 * Use real photos in public/images/testimonials/—see README there. */
const TESTIMONIALS = [
  {
    quote:
      "A rare combination of deep technical skill and clear communication. Delivered a critical system redesign on time and mentored the team throughout.",
    name: "Zaman",
    role: "Delivery Director",
    company: "Confiz",
    avatar:
      "https://ui-avatars.com/api/?name=Zaman&size=120&background=161f32&color=00d4ff",
  },
  {
    quote:
      "One of the best senior developers I've worked with. Consistently ships clean, well-tested code and is always willing to help others level up.",
    name: "Casey Clark",
    role: "Tech Lead",
    company: "TrioSpace",
    avatar:
      "https://ui-avatars.com/api/?name=Casey+Clark&size=120&background=161f32&color=00d4ff",
  },
  {
    quote:
      "Brought clarity and structure to our API platform. The architecture decisions made under their lead have held up as we've grown 10x.",
    name: "Arthur Lewis",
    role: "President, Infrastructure Solutions Group",
    company: "Dell Technologies",
    avatar:
      "https://ui-avatars.com/api/?name=Arthur+Lewis&size=120&background=161f32&color=00d4ff",
  },
  {
    quote:
      "Exceptional problem solver and strong communicator. The design docs and RFCs they wrote became the standard for our team.",
    name: "Laura",
    role: "Senior Director, Product",
    company: "Thomson Reuters",
    avatar:
      "https://ui-avatars.com/api/?name=Laura&size=120&background=161f32&color=00d4ff",
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
      </div>
      <div className="testimonials__carousel-wrap">
        <div className="testimonials__carousel-inner">
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
                              alt={t.name}
                              className="testimonial-card__avatar"
                              width={48}
                              height={48}
                              referrerPolicy="no-referrer"
                              loading="lazy"
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
      </div>
    </section>
  );
}

export default Testimonials;
