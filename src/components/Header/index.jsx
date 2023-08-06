import logo from "../../assets/Logo.svg";
import AsideMenu from "../AsideMenu";
import { connect } from "react-redux";
import "./styles/Header.css";
import "./styles/Header-mobile.css";

function Header({ theme }) {
  return (
    <header className={`header bg-${theme}-00`}>
      <div className="header__logo__and__name">
        <img src={logo} alt="logo" className={`header__logo__and__name__logo bg-${theme}-03--opc`} />
        <h1 className="header__logo__and__name__name">
          biewwl<span className="header__logo__and__name__name--js">.js</span>
        </h1>
      </div>
      <AsideMenu />
    </header>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme
})

export default connect(mapStateToProps)(Header);
