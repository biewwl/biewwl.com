import { Link } from "react-router-dom";
import config from "../../config.json";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./styles/AsideMenu.css";
import "./styles/AsideMenu-mobile.css";

function AsideMenu() {
  const { home, projects } = config.routes;
  const { home_link_text, projects_link_text } = config.components.header;

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
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
        className="aside-menu__icon"
        onClick={handleOpenMenu}
      />
      <div className="aside-menu__content">
        <div
          className="aside-menu__content__close-menu"
          onClick={handleOpenMenu}
        ></div>
        <nav className="aside-menu__content__nav">
          <Icon icon="heroicons-outline:x" onClick={handleOpenMenu} className="aside-menu__content__nav__icon" />
          <Link to={home} className="aside-menu__content__nav__link">
            {home_link_text}
          </Link>
          <Link to={projects} className="aside-menu__content__nav__link">
            {projects_link_text}
          </Link>
        </nav>
      </div>
    </aside>
  );
}

export default AsideMenu;
