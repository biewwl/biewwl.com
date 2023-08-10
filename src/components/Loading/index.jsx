import { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import { connect } from "react-redux";
import config from "../../config.json";
import "./styles/Loading.css";

function Loading({ theme }) {
  const [lazyMessage, setLazyMessage] = useState(false);

  const { loading_message } = config.components.loading;

  useEffect(() => {
    const detectDelay = () => {
      setTimeout(() => {
        setLazyMessage(true);
      }, 5000);
    };
    detectDelay();
  }, []);

  return (
    <section className="loading">
      <img src={logo} alt="" className="loading__logo" />
      {lazyMessage && (
        <p className={`loading__message c-${theme}-05`}>{loading_message}</p>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Loading);
