import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import config from "../../config.json";
import "./styles/Header.css";
import "./styles/Header-mobile.css";

function Header() {
  const { home, projects } = config.routes;
  const { home_link_text, projects_link_text } = config.components.header;

  return (
    <header className="header">
      <div className="header__logo__and__name">
        <img src={logo} alt="logo" className="header__logo__and__name__logo" />
        <h1 className="header__logo__and__name__name">
          biewwl<span className="header__logo__and__name__name--js">.js</span>
        </h1>
      </div>
      <nav className="header__nav">
        <Link to={home} className="header__nav__link">
          {home_link_text}
        </Link>
        <Link to={projects} className="header__nav__link">
          {projects_link_text}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
