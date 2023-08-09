import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import config from "../../config.json";
import Footer from "../../components/Footer";
import CardProject from "../../components/CardProject";
import ToolLine from "../../components/ToolLine";
import {
  filterByTools,
  filterByWords,
  usedTools,
} from "../../utils/filterSearch";
import { connect } from "react-redux";
import { fetchProjects } from "../../utils/fetchProjects";
import "./styles/Projects.css";
import "./styles/Projects-mobile.css";

function Projects({ theme }) {
  const { slogan, placeholder_search_text, section_projects_title } =
    config.pages.projects;

  const [querySearch, setQuerySearch] = useState("");
  const [projectsList, setProjectsList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTools, setSearchTools] = useState([]);

  const handleChangeQuery = ({ target }) => {
    const inputText = target.value.toLowerCase();
    const filteredByWords = filterByWords(inputText, projectsList);
    const filteredByTools = filterByTools(filteredByWords, searchTools);
    setFilteredList(filteredByTools);
    console.log(filterByTools);
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
    const filteredByWords = filterByWords(querySearch, projectsList);
    const filteredByTools = filterByTools(filteredByWords, currentTools);
    setFilteredList(filteredByTools);
  };

  useEffect(() => {
    const getProjects = async () => {
      const projects = await fetchProjects();
      setProjectsList(projects);
      setFilteredList(projects);
    };
    getProjects();
  }, []);

  return (
    <div className={`projects bg-${theme}-00`}>
      <Header />
      <main className="projects__main">
        <section className="projects__main__first-screen">
          <Icon
            icon="iconoir:design-nib"
            className={`projects__main__icon c-${theme}-05`}
          />
          <h1 className={`projects__main__slogan c-gradient-${theme}`}>
            {slogan}
          </h1>
          <label
            htmlFor="projects__main__input__label__search"
            className="projects__main__input__label"
          >
            <Icon
              icon="ep:search"
              className={`projects__main__input__label__icon c-${theme}-05`}
            />
            <input
              type="search"
              placeholder={placeholder_search_text}
              className={`projects__main__input__label__search bg-${theme}-02`}
              id="projects__main__input__label__search"
              value={querySearch}
              onChange={handleChangeQuery}
            />
          </label>
          <div className={`projects__main__image --${theme}`} />
        </section>
        <h3 className={`projects__main__section-title c-gradient-${theme}`}>
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
          {filteredList.map((projectData, i) => (
            <CardProject projectData={projectData} key={i} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Projects);
