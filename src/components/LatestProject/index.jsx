// import { lastProject } from "../../data/projects";
import { Link } from "react-router-dom";
import config from "../../config.json";
import RateStars from "../RateStars";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjects } from "../../utils/fetchProjects";
import { mockProject } from "../../data/projects";
import "./styles/LatestProject.css";
import "./styles/LatestProject-mobile.css";
import Loading from "../Loading";

function LatestProject({ theme }) {
  const [lastProject, setLastProject] = useState(mockProject);
  const { images, name, description, tools, date } = lastProject;
  const { project } = config.routes;
  const [pathToProject] = project.split(":");
  const [loading, setLoading] = useState(true);

  const firstThreeImages = images.slice(0, 3);

  const releaseDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const release = new Date(date);
    const day = release.getDate();
    const month = release.getUTCMonth();
    const year = release.getFullYear();
    return `${day}, ${monthNames[month]} ${year}`;
  };

  useEffect(() => {
    const fetchLastProject = async () => {
      const [lastProjectData] = await fetchProjects();
      setLastProject(lastProjectData);
      setLoading(false);
    };
    fetchLastProject();
  }, []);

  return (
    <section className={`latest-project bg-${theme}-01`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="latest-project__images">
            {firstThreeImages.map((image, i) => (
              <img
                src={image}
                alt=""
                key={i}
                className={`latest-project__images__image-${i}`}
              />
            ))}
          </section>
          <section className="latest-project__details">
            <h4 className={`latest-project__details__name c-${theme}-05`}>
              {name}
              <span className="latest-project__details__name--tag">
                (latest)
              </span>
            </h4>
            <p className={`latest-project__details__description c-${theme}-02`}>
              {description}
            </p>
            <p className="latest-project__details__tags">
              {tools.map((tag, i) => (
                <span
                  key={i}
                  className={`c-${theme}-05`}
                >{`#${tag.name} `}</span>
              ))}
            </p>
            <p
              className={`latest-project__details__release  c-${theme}-05 c-${theme}-01`}
            >
              Released: {releaseDate()}
            </p>
            <RateStars name={name} />
            <Link
              className={`latest-project__details__link bg-${theme}-03`}
              to={`${pathToProject}${name}`}
            >
              <span
                className={`latest-project__details__link__text c-${theme}-02`}
              >
                Access
              </span>
            </Link>
          </section>
        </>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(LatestProject);
