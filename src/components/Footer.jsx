function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          Built with focus. <span className="footer__year">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
