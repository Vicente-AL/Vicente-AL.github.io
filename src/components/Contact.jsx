function IconLinkedIn({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconWhatsApp({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    label: "vicenteayala.emmanuel@gmail.com",
    href: "mailto:vicenteayala.emmanuel@gmail.com",
    icon: "✉",
    short: "Email",
    iconColor: "#ea4335",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vicente-ayala-3a8b583a8",
    short: "LinkedIn",
    iconSvg: "linkedin",
    iconColor: "#0a66c2",
  },
  {
    label: "+52 614 980 5411",
    href: "tel:+526149805411",
    icon: "☎",
    short: "Phone",
    iconColor: "#34a853",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/13075787393",
    short: "WhatsApp",
    iconSvg: "whatsapp",
    iconColor: "#25d366",
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__deco contact__deco--1" aria-hidden="true" />
      <div className="contact__deco contact__deco--2" aria-hidden="true" />
      <div className="contact__deco contact__deco--3" aria-hidden="true" />
      <div className="contact__nodes" aria-hidden="true">
        <svg
          className="contact__nodes-svg"
          viewBox="0 0 400 200"
          preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient
              id="contact-line-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%">
              <stop offset="0%" stopColor="rgba(0,212,255,0)" />
              <stop offset="50%" stopColor="rgba(0,212,255,0.35)" />
              <stop offset="100%" stopColor="rgba(0,212,255,0)" />
            </linearGradient>
          </defs>
          <line
            x1="50"
            y1="100"
            x2="200"
            y2="100"
            className="contact__node-line"
          />
          <line
            x1="200"
            y1="100"
            x2="350"
            y2="100"
            className="contact__node-line contact__node-line--2"
          />
          <line
            x1="200"
            y1="100"
            x2="200"
            y2="50"
            className="contact__node-line contact__node-line--3"
          />
          <circle cx="50" cy="100" r="3" className="contact__node-dot" />
          <circle
            cx="200"
            cy="100"
            r="4"
            className="contact__node-dot contact__node-dot--center"
          />
          <circle cx="350" cy="100" r="3" className="contact__node-dot" />
          <circle cx="200" cy="50" r="3" className="contact__node-dot" />
        </svg>
      </div>
      <div className="container">
        <h2 className="section__title">
          <span className="section__title-num">07</span>
          Contact
        </h2>
        <div className="contact__wrap">
          <div className="contact__box">
            <div className="contact__box-glow" />
            <div className="contact__box-ring" aria-hidden="true" />
            <div className="contact__badge" aria-hidden="true">
              <span className="contact__badge-dot" />
              Let's connect
            </div>
            <p className="contact__lead">Let's build something that matters.</p>
            <p className="contact__text">
              I'm a senior software developer who cares about clean
              architecture, scalable systems, and teams that ship. If you're
              looking for someone who can own complex problems, mentor others,
              and deliver reliably — let's talk.
            </p>
            <p className="contact__text contact__text--cta">
              Whether it's a senior role, a consulting gig, or an ambitious
              project — I'm open to opportunities where I can add real value.
              Reach out via email, LinkedIn, or WhatsApp. I typically reply
              within a day.
            </p>
            <div className="contact__links">
              {CONTACT_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact__link"
                  title={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  style={{
                    animationDelay: `${i * 0.08}s`,
                    "--link-accent": link.iconColor,
                  }}>
                  <span
                    className="contact__link-icon"
                    style={{ color: link.iconColor }}>
                    {link.iconSvg === "linkedin" && (
                      <IconLinkedIn className="contact__link-svg" />
                    )}
                    {link.iconSvg === "whatsapp" && (
                      <IconWhatsApp className="contact__link-svg" />
                    )}
                    {!link.iconSvg && link.icon}
                  </span>
                  <span className="contact__link-label">{link.short}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
