import logo from "../../assets/erpproject-logo.png";
import "./index.scss";

function Header() {
  return (
    <header id="header" className="hero-head has-text-centered section">
      <div className="container">
        <section>
          <img src={logo} alt="ERP Project" className="logo" />
        </section>
      </div>
    </header>
  );
}

export default Header;
