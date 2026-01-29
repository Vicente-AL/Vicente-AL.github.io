function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#hero" className="nav__logo" onClick={handleNavClick}>
          <span className="nav__logo-bracket">&lt;</span>
          <span className="nav__logo-text">Dev</span>
          <span className="nav__logo-bracket">/&gt;</span>
        </a>
        <ul
          className={`nav__links ${mobileMenuOpen ? "nav__links--open" : ""}`}>
          <li>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleNavClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#mission" onClick={handleNavClick}>
              Mission
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleNavClick}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

export default Header;
