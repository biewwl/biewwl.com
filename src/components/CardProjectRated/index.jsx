import { Link } from "react-router-dom";
import RateStars from "../RateStars";
import { Icon } from "@iconify/react";
import tools from "../../data/tools";
import config from "../../config.json";
import "./styles/CardProjectRated.css";

function CardProjectRated({ projectData }) {
  const { name, images, repository, figma, frontend, backend, design } =
    projectData;

  const { project } = config.routes;
  const [pathToProject] = project.split(":");

  const firstImage = images[0];

  return (
    <section className="card-project-rated">
      <img src={firstImage} alt="" className="card-project-rated__image" />
      <h4 className="card-project-rated__name">{name}</h4>
      <div className="card-project-rated__stars">
        <RateStars name={name} />
        <div className="card-project-rated__stars__actions">
          <Link
            to={`${pathToProject}${name}`}
            className="card-project-rated__stars__actions__button"
          >
            <Icon icon="carbon:arrow-left" rotate={2} />
          </Link>
          {(frontend || backend) && (
            <Link
              to={repository}
              target="_blank"
              className="card-project-rated__stars__actions__button"
            >
              <Icon icon={tools.github.icon} />
            </Link>
          )}
          {design && (
            <Link
              to={figma}
              target="_blank"
              className="card-project-rated__stars__actions__button"
            >
              <Icon icon={tools.figma.icon} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default CardProjectRated;
