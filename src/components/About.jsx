import { useState, useEffect, useCallback } from "react";

const PROFILE_PHOTOS = [
  { src: "/images/about/profile-1.png", alt: "Profile — professional" },
  { src: "/images/about/profile-2.png", alt: "Profile" },
];

const ROTATE_INTERVAL_MS = 4000;

function About() {
  const [showingIndex, setShowingIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [nextIndex, setNextIndex] = useState(0);
  const [resetting, setResetting] = useState(false);

  const goToNext = useCallback(() => {
    if (isFlipping) return;
    const n = PROFILE_PHOTOS.length;
    setNextIndex((showingIndex + 1) % n);
    setIsFlipping(true);
  }, [showingIndex, isFlipping]);

  const goTo = useCallback(
    (index) => {
      if (isFlipping || index === showingIndex) return;
      setNextIndex(index);
      setIsFlipping(true);
    },
    [showingIndex, isFlipping],
  );

  const handleFlipEnd = useCallback(() => {
    if (!isFlipping) return;
    setResetting(true);
    setShowingIndex(nextIndex);
    setIsFlipping(false);
  }, [isFlipping, nextIndex]);

  useEffect(() => {
    if (!resetting) return;
    const id = requestAnimationFrame(() => setResetting(false));
    return () => cancelAnimationFrame(id);
  }, [resetting]);

  const flipInnerClass = [
    "about__profile-flip-inner",
    isFlipping && "about__profile-flip-inner--flipped",
    resetting && "about__profile-flip-inner--resetting",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const id = setInterval(goToNext, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [goToNext]);

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">01</span>
          About
        </h2>
        <div className="about__grid">
          <div className="about__content">
            <p className="about__lead">
              I'm a <strong>Senior Software Developer</strong> with{" "}
              <strong>more than 9 years</strong> of experience building
              reliable, performant systems that scale. I thrive in complex
              domains — distributed systems, APIs, event-driven architecture,
              and cloud-native services.
            </p>
            <p className="about__text">
              I turn business requirements into maintainable code, robust APIs,
              and well-documented technical solutions. I value documentation,
              testing, code reviews, and cross-team collaboration as much as
              shipping features — and I've seen how that mindset pays off over
              the long run.
            </p>
            <div className="about__meta">
              <div className="about__meta-item">
                <span className="about__meta-label">Focus</span>
                <span className="about__meta-value">
                  Full-stack and backend development: REST and event-driven
                  APIs, SQL/NoSQL data stores, message queues (e.g. Kafka), and
                  cloud-native architecture. I design for scale, observability,
                  and long-term maintainability, and I'm comfortable leading
                  technical decisions and mentoring engineers.
                </span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Mindset</span>
                <span className="about__meta-value">
                  Quality-first engineering, clear documentation, and inclusive
                  collaboration. I prioritize scalability, automated testing,
                  and iterative delivery so we ship reliable software without
                  cutting corners — and leave systems easier to evolve for
                  whoever comes next.
                </span>
              </div>
            </div>
          </div>
          <div className="about__visual">
            <div
              className="about__profile-wrap"
              onClick={goToNext}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToNext();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Cycle through photos (next)">
              <div className="about__profile-carousel about__profile-carousel--flip">
                <div className={flipInnerClass} onTransitionEnd={handleFlipEnd}>
                  <div className="about__profile-flip-front">
                    <img
                      src={PROFILE_PHOTOS[showingIndex].src}
                      alt={PROFILE_PHOTOS[showingIndex].alt}
                      className="about__profile-img"
                    />
                  </div>
                  <div className="about__profile-flip-back">
                    <img
                      src={PROFILE_PHOTOS[nextIndex].src}
                      alt={PROFILE_PHOTOS[nextIndex].alt}
                      className="about__profile-img"
                    />
                  </div>
                </div>
              </div>
              <div className="about__profile-frame" aria-hidden="true" />
              <div className="about__profile-hint" aria-hidden="true">
                Click or wait
              </div>
              <div className="about__profile-dots">
                {PROFILE_PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`about__profile-dot ${i === showingIndex ? "about__profile-dot--active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(i);
                    }}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="about__card about__card--code">
              <div className="about__card-glow" />
              <div className="about__card-inner">
                <pre className="about__code">
                  <code>
                    <span className="code-keyword">const</span> developer ={" "}
                    {"{"}
                    {"\n"} level: <span className="code-string">"Senior"</span>,
                    {"\n"} passion:{" "}
                    <span className="code-string">"Clean Code"</span>,{"\n"}{" "}
                    drive: <span className="code-string">"Ship It"</span>
                    {"\n"}
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
