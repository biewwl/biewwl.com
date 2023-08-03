import logo from "../../assets/Logo.svg";
import "./styles/Header.css";
import "./styles/Header-mobile.css";
import AsideMenu from "../AsideMenu";

function Header() {

  return (
    <header className="header">
      <div className="header__logo__and__name">
        <img src={logo} alt="logo" className="header__logo__and__name__logo" />
        <h1 className="header__logo__and__name__name">
          biewwl<span className="header__logo__and__name__name--js">.js</span>
        </h1>
      </div>
      <AsideMenu />
    </header>
  );
}

export default Header;
