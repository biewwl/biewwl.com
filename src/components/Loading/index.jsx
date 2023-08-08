import logo from "../../assets/Logo.svg";
import "./styles/Loading.css";

function Loading() {
  return (
    <section className="loading">
      <img src={logo} alt="" className="loading__logo" />
    </section>
  );
}

export default Loading;
