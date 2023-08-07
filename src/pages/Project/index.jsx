import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getProjectData } from "../../data/projects";
import { Icon } from "@iconify/react";
import config from "../../config.json";
import tools from "../../data/tools";
import DevToolsSection from "../../components/DevToolsSection";
import "./styles/Project.css";
import "./styles/Project-mobile.css";
import RateStars from "../../components/RateStars";
import { useState } from "react";
import { connect } from "react-redux";
import Commits from "../../components/Commits";

function Project({ theme }) {
  const { projectName } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const projectData = getProjectData(projectName);
  const {
    name,
    frontend,
    backend,
    design,
    description,
    repository,
    figma,
    images,
    tools: {
      frontend: frontendTools,
      backend: backendTools,
      others: othersTools,
    },
  } = projectData;

  const coverImage = images[imageIndex];

  const { figma_link_text, repository_link_text } = config.pages.project;

  const handleNextImage = () => {
    const lastImageIndex = images.length - 1;
    if (imageIndex === lastImageIndex) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    const lastImageIndex = images.length - 1;
    if (imageIndex === 0) {
      setImageIndex(lastImageIndex);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className={`project bg-${theme}-00`}>
      <Header />
      <main className="project__main">
        <h2 className={`project__main__project c-gradient-${theme}`}>
          Project
        </h2>
        <h1 className={`project__main__title c-gradient-${theme}`}>{name}</h1>
        <RateStars name={name} />
        <div className="project__main__tags-dev">
          {frontend && (
            <span className="project__main__tags-dev--tag frontend">
              <Icon icon="gridicons:site" />
              <span>FrontEnd</span>
            </span>
          )}
          {backend && (
            <span className="project__main__tags-dev--tag backend">
              <Icon icon="ph:database" />
              <span>BackEnd</span>
            </span>
          )}
          {design && (
            <span className="project__main__tags-dev--tag design">
              <Icon icon="teenyicons:figma-outline" />
              <span>UI UX</span>
            </span>
          )}
        </div>
        <p className={`project__main__description c-${theme}-02`}>
          {description}
        </p>
        <div className="project__main__links">
          {design && (
            <Link
              to={figma}
              className={`project__main__links__link bg-${theme}-02`}
              target="_blank"
            >
              <Icon
                icon={tools.figma.icon}
                className={`project__main__links__link__icon c-${theme}-02`}
              />
              <span
                className={`project__main__links__link__text c-${theme}-03`}
              >
                {figma_link_text}
              </span>
            </Link>
          )}
          {repository && (
            <Link
              to={repository}
              className={`project__main__links__link bg-${theme}-02`}
              target="_blank"
            >
              <Icon
                icon={tools.github.icon}
                className={`project__main__links__link__icon c-${theme}-02`}
              />
              <span
                className={`project__main__links__link__text c-${theme}-03`}
              >
                {repository_link_text}
              </span>
            </Link>
          )}
        </div>
        <div className="project__main__carrousel">
          <button
            onClick={handlePrevImage}
            className="project__main__carrousel__arrow --prev"
          >
            <Icon icon="ep:arrow-up-bold" rotate={3} />
          </button>
          <img
            src={coverImage}
            alt=""
            className={`project__main__carrousel__image bb-${theme}-03`}
          />
          <button
            onClick={handleNextImage}
            className="project__main__carrousel__arrow --next"
          >
            <Icon icon="ep:arrow-up-bold" rotate={1} />
          </button>
        </div>
        {frontend && (
          <DevToolsSection title="Front End Tools" icons={frontendTools} />
        )}
        {backend && (
          <DevToolsSection title="Back End Tools" icons={backendTools} />
        )}
        {design && (
          <DevToolsSection title="Others Tools" icons={othersTools} />
        )}
        <Commits />
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Project);
