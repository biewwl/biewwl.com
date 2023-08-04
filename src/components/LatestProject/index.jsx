import { lastProject } from "../../data/projects";
import { Link } from "react-router-dom";
import config from "../../config.json";
import "./styles/LatestProject.css";
import "./styles/LatestProject-mobile.css";
import RateStars from "../RateStars";

function LatestProject() {
  const { images, name, description, tags, date } = lastProject;
  const { project } = config.routes;
  const [pathToProject] = project.split(":");

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

  return (
    <section className="latest-project">
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
        <h4 className="latest-project__details__name">
          {name}
          <span className="latest-project__details__name--tag">(latest)</span>
        </h4>
        <p className="latest-project__details__description">{description}</p>
        <p className="latest-project__details__tags">
          {tags.map((tag, i) => (
            <span key={i}>{`#${tag} `}</span>
          ))}
        </p>
        <p className="latest-project__details__release">
          Released: {releaseDate()}
        </p>
        <RateStars name={name} />
        <Link
          className="latest-project__details__link"
          to={`${pathToProject}${name}`}
        >
          <span className="latest-project__details__link__text">Access</span>
        </Link>
      </section>
    </section>
  );
}

export default LatestProject;
