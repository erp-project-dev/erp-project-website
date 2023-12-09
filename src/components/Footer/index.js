import "./index.scss";

function Footer() {
  return (
    <footer id="footer" className="hero-foot has-text-centered is-size-6">
      <p>
        <strong>{new Date().getFullYear()} ERP Project</strong>
      </p>
      <p className="has-text-weight-light">
        Proyecto peruano realizado por Eduardo Rodríguez Patiño
      </p>
    </footer>
  );
}

export default Footer;
