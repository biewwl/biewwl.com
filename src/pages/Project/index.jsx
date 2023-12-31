import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { mockProject } from "../../data/projects";
import { Icon } from "@iconify/react";
import config from "../../config.json";
import tools from "../../data/tools";
import DevToolsSection from "../../components/DevToolsSection";
import RateStars from "../../components/RateStars";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Commits from "../../components/Commits";
import Loading from "../../components/Loading";
import { fetchProject } from "../../utils/fetchProjects";
import DevTags from "../../components/DevTags";
import "./styles/Project.css";
import "./styles/Project-mobile.css";

function Project({ theme }) {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [projectData, setProjectData] = useState(mockProject);

  const {
    name,
    frontend,
    backend,
    design,
    description,
    repository,
    figma,
    images,
    tools: projectTools,
  } = projectData ?? {};

  const coverImage = images[imageIndex];

  const {
    figma_link_text,
    repository_link_text,
    text_above_project_title,
    section_tools_icon,
    section_tools_text,
  } = config.pages.project;

  const handleNextImage = () => {
    const lastImageIndex = images.length - 1;
    if (imageIndex === lastImageIndex) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    const lastImageIndex = images.length - 1;
    if (imageIndex === 0) {
      setImageIndex(lastImageIndex);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectData = await fetchProject(projectName);
        setProjectData(projectData);
        setLoading(false);
      } catch (error) {
        navigate("/404");
      }
    };
    fetchProjectData();
  }, [projectName, navigate]);

  return (
    <div className={`project bg-${theme}-00`}>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="project__main">
          <h2 className={`project__main__project c-${theme}-05`}>
            {text_above_project_title}
          </h2>
          <h1 className={`project__main__title c-${theme}-02`}>{name}</h1>
          <RateStars name={name} />
          <DevTags frontend={frontend} backend={backend} design={design} />
          <p className={`project__main__description c-${theme}-02`}>
            {description}
          </p>
          <div className="project__main__links">
            {design && (
              <Link
                to={figma}
                className={`project__main__links__link bg-${theme}-02`}
                target="_blank"
              >
                <Icon
                  icon={tools.figma.icon}
                  className={`project__main__links__link__icon c-${theme}-02`}
                />
                <span
                  className={`project__main__links__link__text c-${theme}-03`}
                >
                  {figma_link_text}
                </span>
              </Link>
            )}
            {repository && (
              <Link
                to={repository}
                className={`project__main__links__link bg-${theme}-02`}
                target="_blank"
              >
                <Icon
                  icon={tools.github.icon}
                  className={`project__main__links__link__icon c-${theme}-02`}
                />
                <span
                  className={`project__main__links__link__text c-${theme}-03`}
                >
                  {repository_link_text}
                </span>
              </Link>
            )}
          </div>
          <div className="project__main__carrousel">
            <button
              onClick={handlePrevImage}
              className={`project__main__carrousel__arrow --prev bg-${theme}-03--opc c-${theme}-02`}
            >
              <Icon icon="ep:arrow-up-bold" rotate={3} />
            </button>
            <img
              src={coverImage}
              alt=""
              className={`project__main__carrousel__image bb-${theme}-03`}
            />
            <button
              onClick={handleNextImage}
              className={`project__main__carrousel__arrow --next bg-${theme}-03--opc c-${theme}-02`}
            >
              <Icon icon="ep:arrow-up-bold" rotate={1} />
            </button>
          </div>
          {projectTools && (
            <DevToolsSection
              title={section_tools_text}
              icons={projectTools}
              icon={section_tools_icon}
            />
          )}
          <Commits />
        </main>
      )}
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Project);
