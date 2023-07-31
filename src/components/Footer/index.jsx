import { Link } from "react-router-dom";
import "./styles/Footer.css";
import "./styles/Footer-mobile.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__links">
        <h3 className="footer__links__title">Links</h3>
        <Link
          to="https://instagram.com/biewwl.js"
          target="_blank"
          className="footer__links__link"
        >
          Instagram
        </Link>
        <Link
          to="https://github.com/biewwl"
          target="_blank"
          className="footer__links__link"
        >
          GitHub
        </Link>
        <Link
          to="https://www.figma.com/@biewwl"
          target="_blank"
          className="footer__links__link"
        >
          Figma
        </Link>
        <Link
          to="https://www.linkedin.com/in/biewwl/"
          target="_blank"
          className="footer__links__link"
        >
          Linkedin
        </Link>
      </section>
      <section className="footer__contact">
        <h3 className="footer__contact__title">Contact</h3>
        <span className="footer__contact__item">biewwl.js@gmail.com</span>
        <span className="footer__contact__item">+55 (98) 92000 7200</span>
      </section>
    </footer>
  );
}

export default Footer;
