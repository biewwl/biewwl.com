import { connect } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SAD_EMOJI from "../../assets/sad.gif";
import config from "../../config.json";
import "./styles/NotFound.css";

function NotFound({ theme }) {
  const { not_found_message } = config.pages[404];

  return (
    <div className={`not-found bg-${theme}-00`}>
      <Header />
      <main className="not-found__main">
        <img src={SAD_EMOJI} alt="" className="not-found__main__gif" />
        <h1 className={`not-found__main__title c-${theme}-03 bg-${theme}-02`}>
          {not_found_message}
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
