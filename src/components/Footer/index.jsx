import { Link } from "react-router-dom";
import "./styles/Footer.css";
import "./styles/Footer-mobile.css";
import { connect } from "react-redux";

function Footer({ theme }) {
  return (
    <footer className={`footer bg-${theme}-01`}>
      <section className="footer__links">
        <h3 className={`footer__links__title c-${theme}-00`}>Links</h3>
        <Link
          to="https://instagram.com/biewwl.js"
          target="_blank"
          className={`footer__links__link c-${theme}-05`}
        >
          Instagram
        </Link>
        <Link
          to="https://github.com/biewwl"
          target="_blank"
          className={`footer__links__link c-${theme}-05`}
        >
          GitHub
        </Link>
        <Link
          to="https://www.figma.com/@biewwl"
          target="_blank"
          className={`footer__links__link c-${theme}-05`}
        >
          Figma
        </Link>
        <Link
          to="https://www.linkedin.com/in/biewwl/"
          target="_blank"
          className={`footer__links__link c-${theme}-05`}
        >
          Linkedin
        </Link>
      </section>
      <section className="footer__contact">
        <h3 className={`footer__contact__title c-${theme}-00`}>Contact</h3>
        <span className={`footer__contact__item c-${theme}-05`}>
          biewwl.js@gmail.com
        </span>
        <span className={`footer__contact__item c-${theme}-05`}>
          +55 (98) 92000 7200
        </span>
      </section>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Footer);
