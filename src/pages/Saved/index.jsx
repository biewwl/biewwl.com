import lS from "manager-local-storage";
import config from "../../config.json";
import { getProjectsData } from "../../data/projects";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Icon } from "@iconify/react";
import CardProjectRated from "../../components/CardProjectRated";
import "./styles/Saved.css";
import "./styles/Saved-mobile.css";

function Saved() {
  const { rate_keys_list, rate_key } = config.localStorage;
  const projectsName = lS.get(rate_keys_list) ?? [];
  const [orderAsc, setOrderAsc] = useState(false);

  const projects = getProjectsData(projectsName);

  const projectsWithRate = projects.map((project) => ({
    ...project,
    rate: lS.get(`${rate_key}${project.name}`),
  }));

  const sortedProjects = projectsWithRate.sort((projectA, projectB) =>
    orderAsc ? projectA.rate - projectB.rate : projectB.rate - projectA.rate
  );

  const iconOrder = orderAsc
    ? "icons8:generic-sorting-2"
    : "icons8:generic-sorting";

  const handleSort = () => {
    setOrderAsc(!orderAsc);
  };

  return (
    <section>
      <Header />
      <main className="saved__content">
        <div className="saved__content__slogan">
          <Icon icon="majesticons:plus" className="saved__content__slogan__icon" />
          <p className="saved__content__slogan__text">Browse projects you've rated 1 or more stars</p>
        </div>
        <div className="saved__content__title-and-sort">
          <h1 className="saved__content__title-and-sort__title">
            Rated Projects
          </h1>
          <button
            onClick={handleSort}
            className="saved__content__title-and-sort__button"
          >
            <Icon icon={iconOrder} />
          </button>
        </div>
        <div className="saved__content__cards">
          {sortedProjects.map((projectData, i) => (
            <CardProjectRated projectData={projectData} showStars key={i} />
          ))}
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Saved;
