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

function Project() {
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
    <div className="project">
      <Header />
      <main className="project__main">
        <h2 className="project__main__project">Project</h2>
        <h1 className="project__main__title">{name}</h1>
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
        <p className="project__main__description">{description}</p>
        <div className="project__main__links">
          {design && (
            <Link to={figma} className="project__main__links__link">
              <Icon
                icon={tools.figma.icon}
                className="project__main__links__link__icon"
              />
              <span className="project__main__links__link__text">
                {figma_link_text}
              </span>
            </Link>
          )}
          {repository && (
            <Link to={repository} className="project__main__links__link">
              <Icon
                icon={tools.github.icon}
                className="project__main__links__link__icon"
              />
              <span className="project__main__links__link__text">
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
            className="project__main__carrousel__image"
          />
          <button
            onClick={handleNextImage}
            className="project__main__carrousel__arrow --next"
          >
            <Icon icon="ep:arrow-up-bold" rotate={1} />
          </button>
        </div>
        {frontendTools && (
          <DevToolsSection title="Front End Tools" icons={frontendTools} />
        )}
        {backendTools && (
          <DevToolsSection title="Back End Tools" icons={backendTools} />
        )}
        {othersTools && (
          <DevToolsSection title="Others Tools" icons={othersTools} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Project;
