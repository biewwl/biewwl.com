import { Link } from "react-router-dom";
import { connect } from "react-redux";
import config from "../../config.json";
import "./styles/Footer.css";
import "./styles/Footer-mobile.css";

function Footer({ theme }) {
  const { section_links_title, section_contact_title, links, contacts } =
    config.components.footer;

  return (
    <footer className={`footer bg-${theme}-01`}>
      <section className="footer__links">
        <h3 className={`footer__links__title c-${theme}-00`}>
          {section_links_title}
        </h3>
        {links.map(({ name, link }) => (
          <Link
            to={link}
            target="_blank"
            className={`footer__links__link c-${theme}-05`}
          >
            {name}
          </Link>
        ))}
      </section>
      <section className="footer__contact">
        <h3 className={`footer__contact__title c-${theme}-00`}>
          {section_contact_title}
        </h3>
        {contacts.map((contact) => (
          <span className={`footer__contact__item c-${theme}-05`}>
            {contact}
          </span>
        ))}
      </section>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Footer);
