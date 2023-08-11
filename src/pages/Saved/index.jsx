import lS from "manager-local-storage";
import config from "../../config.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import CardProjectRated from "../../components/CardProjectRated";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProjectsByNames } from "../../utils/fetchProjects";
import "./styles/Saved.css";
import "./styles/Saved-mobile.css";

function Saved({ theme }) {
  const { rate_keys_list, rate_key } = config.localStorage;
  const { projects: projectsRoute } = config.routes;
  const { saved_link_to_projects_text, section_rated_title } =
    config.pages.saved;
  const [orderAsc, setOrderAsc] = useState(false);
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    const fetchSavedProjects = async () => {
      const projectsName = lS.get(rate_keys_list) ?? [];
      const allSavedProjects = await fetchProjectsByNames(projectsName);
      setProjects(allSavedProjects);
    };
    fetchSavedProjects();
  }, [rate_keys_list]);

  return (
    <section className={`saved bg-${theme}-00`}>
      <Header />
      <main className="saved__content">
        <Link
          to={projectsRoute}
          className={`saved__content__slogan bg-${theme}-02`}
        >
          <Icon
            icon="majesticons:plus"
            className={`saved__content__slogan__icon c-${theme}-05`}
          />
          <p className={`saved__content__slogan__text c-${theme}-05`}>
            {saved_link_to_projects_text}
          </p>
        </Link>
        <div className="saved__content__title-and-sort">
          <h1
            className={`saved__content__title-and-sort__title c-gradient-${theme}`}
          >
            {section_rated_title}
          </h1>
          <button
            onClick={handleSort}
            className={`saved__content__title-and-sort__button c-${theme}-05`}
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

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Saved);
