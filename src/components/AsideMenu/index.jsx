import { Link } from "react-router-dom";
import config from "../../config.json";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { connect } from "react-redux";
import lS from "manager-local-storage";
import { changeTheme } from "../../redux/actions/theme";
import "./styles/AsideMenu.css";
import "./styles/AsideMenu-mobile.css";

function AsideMenu({ theme, dispatch }) {
  const { home, projects, saved } = config.routes;
  const { home_link_text, projects_link_text, saved_link_text } =
    config.components.aside;
  const { rate_keys_list } = config.localStorage;

  const [openMenu, setOpenMenu] = useState(false);
  const ratedCards = lS.get(rate_keys_list) ?? [];
  const ratedCardsCount = ratedCards.length;

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleChangeTheme = () => {
    dispatch(changeTheme(theme));
  };

  return (
    <aside className="aside-menu">
      <input
        type="checkbox"
        name="openMenu"
        id="openMenu"
        checked={openMenu}
        className="aside-menu__checkbox__openMenu"
        onChange={handleOpenMenu}
      />
      <Icon
        icon="gg:menu-right"
        className={`aside-menu__icon c-${theme}-03`}
        onClick={handleOpenMenu}
      />
      <div className="aside-menu__content">
        <div
          className="aside-menu__content__close-menu"
          onClick={handleOpenMenu}
        ></div>
        <nav className={`aside-menu__content__nav bg-${theme}-01`}>
          <Icon
            icon="heroicons-outline:x"
            onClick={handleOpenMenu}
            className={`aside-menu__content__nav__icon c-${theme}-03`}
          />
          <Link to={home} className={`aside-menu__content__nav__link c-${theme}-05`}>
            {home_link_text}
          </Link>
          <Link to={projects} className={`aside-menu__content__nav__link c-${theme}-05`}>
            {projects_link_text}
          </Link>
          <Link to={saved} className={`aside-menu__content__nav__link c-${theme}-05`}>
            {saved_link_text} ({ratedCardsCount})
          </Link>
          <button
            className={`aside-menu__content__nav__button c-${theme}-05`}
            onClick={handleChangeTheme}
          >
            Theme: {theme}
          </button>
        </nav>
      </div>
    </aside>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(AsideMenu);
