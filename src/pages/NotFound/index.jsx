import { connect } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SAD_EMOJI from "../../assets/sad.gif";
import "./styles/NotFound.css";

function NotFound({ theme }) {
  return (
    <div className={`not-found bg-${theme}-00`}>
      <Header />
      <main className="not-found__main">
        <img src={SAD_EMOJI} alt="" className="not-found__main__gif" />
        <h1
          className={`not-found__main__title c-${theme}-03 bg-${theme}-02`}
        >
          This page doesn't exists
        </h1>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(NotFound);
