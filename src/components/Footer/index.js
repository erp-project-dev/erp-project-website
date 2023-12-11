import "./index.scss";

function Footer() {
  return (
    <footer id="footer" className="hero-foot has-text-centered section">
      <p>
        <strong>{new Date().getFullYear()} ERP Project</strong>
      </p>
      <p className="has-text-weight-light">
        Página personal del guitarrista Eduardo Rodríguez
      </p>
    </footer>
  );
}

export default Footer;
