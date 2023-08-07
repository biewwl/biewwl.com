import { Link } from "react-router-dom";
import "./styles/CertificateLink.css";
import "./styles/CertificateLink-mobile.css";
import { connect } from "react-redux";

function CertificateLink({ numb, name, url, theme }) {
  return (
    <Link to={url} className={`certificate-link bg-gradient-${theme}`}>
      <span className="certificate-link__numb">{numb}</span>
      <p className={`certificate-link__name c-${theme}-05`}>{name}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="8"
        viewBox="0 0 25 8"
        fill="none"
        className="certificate-link__arrow"
      >
        <path
          d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5L24 4.5V3.5L0 3.5L0 4.5Z"
          fill="#8A8A8A"
        />
      </svg>
    </Link>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(CertificateLink);
