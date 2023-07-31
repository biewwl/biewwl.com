import { Icon } from "@iconify/react";
import { lastProject } from "../../data/projects";
import { Link } from "react-router-dom";
import config from "../../config.json";
import lS from "manager-local-storage";
import { useEffect, useState } from "react";
import "./styles/LatestProject.css";
import "./styles/LatestProject-mobile.css";

function LatestProject() {
  const { images, name, description, tags, date } = lastProject;
  const { project } = config.routes;
  const [pathToProject] = project.split(":");
  const { rate_key } = config.localStorage;

  const [currentRate, setCurrentRate] = useState(0);

  const setRate = (rate) => {
    if (rate === currentRate) {
      lS.remove(`${rate_key}${name}`);
      setCurrentRate(0);
    } else {
      lS.set(`${rate_key}${name}`, rate);
      setCurrentRate(rate);
    }
  };

  useEffect(() => {
    const getCurrentRate = () => {
      const rate = lS.get(`${rate_key}${name}`) ?? 0;
      setCurrentRate(rate);
    };
    getCurrentRate();
  }, [name, rate_key]);

  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      if (i <= currentRate) {
        stars.push(
          <Icon icon="ph:star-fill" onClick={() => setRate(i)} key={i} />
        );
      } else {
        stars.push(
          <Icon icon="ph:star-thin" onClick={() => setRate(i)} key={i} />
        );
      }
    }
    return stars;
  };

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
        {images.map((image, i) => (
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
        <span className="latest-project__details__rate">{getStars()}</span>
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
