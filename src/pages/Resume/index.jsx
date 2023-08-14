import { connect } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import resume from "./resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import "./styles/Resume.css";
import "./styles/Resume-mobile.css";

function Resume({ theme }) {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  return (
    <div className={`resume bg-${theme}-00`}>
      <Header />
      <main className="resume__main">
        <section className="resume__main__left-content">
          <h1 className={`resume__main__left-content__title c-${theme}-03`}>
            Resume
          </h1>
          <p className={`resume__main__left-content__text c-${theme}-05`}>
            Download my resume and feel free to contact me for more information.
          </p>
          <a
            href={resume}
            download="João Gabriel Dias Fernandes - Resume"
            className={`resume__main__left-content__button bg-${theme}-02 c-${theme}-03`}
          >
            <Icon
              icon="uil:file-download-alt"
              className="resume__main__left-content__button__icon"
            />
            <span className="resume__main__left-content__button__text">
              Download
            </span>
          </a>
        </section>
        <Document file={resume} className={`resume__main__view`} loading="">
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Resume);
