import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import config from "../../config.json";
import tools from "../../data/tools";
import "./styles/CardProject.css";

function CardProject({ projectData }) {
  const {
    name,
    images,
    description,
    frontend,
    backend,
    design,
    repository,
    figma,
  } = projectData;

  const { project } = config.routes;
  const [pathToProject] = project.split(":");

  const [projectCover] = images;

  return (
    <section className="card-project">
      <img src={projectCover} alt="" className="card-project__image" />
      <div className="card-project__details">
        <h4 className="card-project__details__title">{name}</h4>
        <p className="card-project__details__description">{description}</p>
        <div className="card-project__details__tags-dev">
          {frontend && (
            <span className="card-project__details__tags-dev--tag frontend">
              <Icon icon="gridicons:site" />
              <span>FrontEnd</span>
            </span>
          )}
          {backend && (
            <span className="card-project__details__tags-dev--tag backend">
              <Icon icon="ph:database" />
              <span>BackEnd</span>
            </span>
          )}
          {design && (
            <span className="card-project__details__tags-dev--tag design">
              <Icon icon="teenyicons:figma-outline" />
              <span>UI UX</span>
            </span>
          )}
        </div>
        <div className="card-project__details__links">
          <Link
            to={`${pathToProject}${name}`}
            className="card-project__details__links__link-to-project"
          >
            More Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="8"
              viewBox="0 0 17 8"
              fill="none"
            >
              <path
                d="M16.7194 4.11759C16.9147 3.92233 16.9147 3.60575 16.7194 3.41048L13.5375 0.228503C13.3422 0.033241 13.0256 0.033241 12.8304 0.228503C12.6351 0.423765 12.6351 0.740348 12.8304 0.93561L15.6588 3.76404L12.8304 6.59246C12.6351 6.78773 12.6351 7.10431 12.8304 7.29957C13.0256 7.49483 13.3422 7.49483 13.5375 7.29957L16.7194 4.11759ZM0.414673 4.26404L16.3659 4.26404L16.3659 3.26404L0.414673 3.26404L0.414673 4.26404Z"
                fill="#515151"
              />
            </svg>
          </Link>
          {(frontend || backend) && (
            <Link
              to={repository}
              className="card-project__details__links__link"
            >
              <Icon icon={tools.github.icon} />
            </Link>
          )}
          {design && (
            <Link to={figma} className="card-project__details__links__link">
              <Icon icon={tools.figma.icon} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default CardProject;
