import { Link } from "react-router-dom";
import RateStars from "../RateStars";
import { Icon } from "@iconify/react";
import tools from "../../data/tools";
import config from "../../config.json";
import "./styles/CardProjectRated.css";
import { connect } from "react-redux";

function CardProjectRated({ projectData, theme }) {
  const { name, images, repository, figma, frontend, backend, design } =
    projectData;

  const { project } = config.routes;
  const [pathToProject] = project.split(":");

  const firstImage = images[0];

  return (
    <section className="card-project-rated">
      <img src={firstImage} alt="" className="card-project-rated__image" />
      <h4 className="card-project-rated__name">{name}</h4>
      <div className={`card-project-rated__stars bg-${theme}-00--opc`}>
        <RateStars name={name} />
        <div className="card-project-rated__stars__actions">
          <Link
            to={`${pathToProject}${name}`}
            className={`card-project-rated__stars__actions__button bg-${theme}-03 c-${theme}-03`}
          >
            <Icon icon="carbon:arrow-left" rotate={2} />
          </Link>
          {(frontend || backend) && (
            <Link
              to={repository}
              target="_blank"
              className={`card-project-rated__stars__actions__button bg-${theme}-03 c-${theme}-03`}
            >
              <Icon icon={tools.github.icon} />
            </Link>
          )}
          {design && (
            <Link
              to={figma}
              target="_blank"
              className={`card-project-rated__stars__actions__button bg-${theme}-03 c-${theme}-03`}
            >
              <Icon icon={tools.figma.icon} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(CardProjectRated);
