import { Icon } from "@iconify/react";
import { useState } from "react";
import Header from "../../components/Header";
import config from "../../config.json";
import Footer from "../../components/Footer";
import CardProject from "../../components/CardProject";
import ToolLine from "../../components/ToolLine";
import projects from "../../data/projects";
import {
  filterByTools,
  filterByWords,
  usedTools,
} from "../../utils/filterSearch";
import "./styles/Projects.css";
import "./styles/Projects-mobile.css";

function Projects() {
  const { slogan, placeholder_search_text, section_projects_title } =
    config.pages.projects;

  const [querySearch, setQuerySearch] = useState("");
  const [projectsList, setProjectsList] = useState(projects);
  const [searchTools, setSearchTools] = useState([]);

  const handleChangeQuery = ({ target }) => {
    const inputText = target.value.toLowerCase();
    const filteredByWords = filterByWords(inputText, projects);
    const filteredByTools = filterByTools(filteredByWords, searchTools);
    setProjectsList(filteredByTools);
    setQuerySearch(target.value);
  };

  const selectedTool = (name) =>
    searchTools.some((toolName) => toolName === name);

  const handleClickTool = (name) => {
    const alreadySelected = selectedTool(name);
    let currentTools = searchTools;
    if (!alreadySelected) {
      currentTools = [...searchTools, name];
      setSearchTools(currentTools);
    } else {
      const newSearchTools = searchTools.filter(
        (toolName) => toolName !== name
      );
      currentTools = newSearchTools;
    }
    setSearchTools(currentTools);
    const filteredByWords = filterByWords(querySearch, projects);
    const filteredByTools = filterByTools(filteredByWords, currentTools);
    setProjectsList(filteredByTools);
  };

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
              value={querySearch}
              onChange={handleChangeQuery}
            />
          </label>
          <div className="projects__main__image" />
        </section>
        <h3 className="projects__main__section-title">
          {section_projects_title}
        </h3>
        <div className="projects__main__search-tags">
          {usedTools().map(({ name, icon, iconColor }, i) => (
            <div onClick={() => handleClickTool(name)} key={i}>
              <ToolLine
                name={name}
                icon={icon}
                iconColor={iconColor}
                colorful={selectedTool(name)}
                hover={false}
              />
            </div>
          ))}
        </div>
        <section className="projects__main__cards">
          {projectsList.map((projectData, i) => (
            <CardProject projectData={projectData} key={i} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
