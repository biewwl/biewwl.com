import { Icon } from "@iconify/react";
import Header from "../../components/Header";
import config from "../../config.json";
import Footer from "../../components/Footer";
import CardProject from "../../components/CardProject";
import projects from "../../data/projects";
import "./styles/Projects.css";
import "./styles/Projects-mobile.css";

function Projects() {
  const { slogan, placeholder_search_text, section_projects_title } =
    config.pages.projects;

  return (
    <div className="projects">
      <Header />
      <main className="projects__main">
        <section className="projects__main__first-screen">
          <Icon icon="iconoir:design-nib" className="projects__main__icon" />
          <h1 className="projects__main__slogan">{slogan}</h1>
          <label
            htmlFor="projects__main__input__label__search"
            className="projects__main__input__label"
          >
            <Icon
              icon="ep:search"
              className="projects__main__input__label__icon"
            />
            <input
              type="search"
              placeholder={placeholder_search_text}
              className="projects__main__input__label__search"
              id="projects__main__input__label__search"
            />
          </label>
          <div className="projects__main__image" />
          <div className="projects__main__image__line-detail" />
        </section>
        <h3 className="projects__main__section-title">
          {section_projects_title}
        </h3>
        <section className="projects__main__cards">
          {projects.map((projectData, i) => (
            <CardProject projectData={projectData} key={i} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
