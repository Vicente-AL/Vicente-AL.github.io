const CONTACT_LINKS = [
  { label: "your@email.com", href: "mailto:your@email.com", icon: "→" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: "→" },
  { label: "GitHub", href: "https://github.com/yourusername", icon: "→" },
];

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">07</span>
          Contact
        </h2>
        <div className="contact__box">
          <div className="contact__box-glow" />
          <p className="contact__lead">Let's build something solid.</p>
          <p className="contact__text">
            Open to senior roles, architecture discussions, and impactful
            projects.
          </p>
          <div className="contact__links">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact__link"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener" : undefined}>
                <span className="contact__link-icon">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
