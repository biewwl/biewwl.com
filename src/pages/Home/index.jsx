import Header from "../../components/Header";
import biewwl from "../../assets/biewwl.jpg";
import { Icon } from "@iconify/react";
import Arrow from "../../components/Arrow";
import { skills } from "../../data/skills";
import { certificates } from "../../data/certificates";
import tools from "../../data/tools";
import { toolsArray } from "../../data/tools";
import CardSkill from "../../components/CardSkill";
import CertificateLink from "../../components/CertificateLink";
import { Link } from "react-router-dom";
import ToolBlock from "../../components/ToolBlock";
import Footer from "../../components/Footer";
import config from "../../config.json";
import LatestProject from "../../components/LatestProject";
import { connect } from "react-redux";
import "./styles/Home.css";
import "./styles/Home-mobile.css";

function Home({ theme }) {
  const {
    welcome_message,
    slogan,
    projects_link_text,
    section_skills_title,
    section_certificates_title,
    section_project_title,
    section_tools_title,
  } = config.pages.home;
  const { projects } = config.routes;

  const homeIcons = () => {
    const { html, express, mongo, docker, mysql, sequelize, npm, react } =
      tools;
    return [html, express, mongo, docker, mysql, sequelize, npm, react];
  };

  return (
    <div className={`home bg-${theme}-00`}>
      <Header />
      <section className="home__presentation">
        <img src={biewwl} alt="" className="home__presentation__image" />
        <p className={`home__presentation__welcome-message c-${theme}-00`}>
          {welcome_message}
        </p>
        <h1 className={`home__presentation__slogan c-gradient-${theme}`}>
          {slogan}
        </h1>
        <Link to={projects} className={`home__presentation__discovery-btn bb-${theme}-05`}>
          <span className={`home__presentation__discovery-btn__text c-${theme}-03`}>
            {projects_link_text}
          </span>
        </Link>
      </section>
      <Arrow />
      <section className="home__icons">
        {homeIcons().map(({ icon, iconColor }, i) => (
          <Icon
            icon={icon}
            className={`home__icons__icon c-${theme}-02`}
            key={i}
            color={theme === "light" ? iconColor : ""}
          />
        ))}
      </section>
      <h3 className={`home__section-title c-gradient-${theme}`}>
        {section_skills_title}
      </h3>
      <section className="home__cards">
        {skills.map(({ icon, name, description }, i) => (
          <CardSkill
            icon={icon}
            name={name}
            description={description}
            key={i}
          />
        ))}
      </section>
      <Arrow />
      <h3 className={`home__section-title c-gradient-${theme}`}>
        {section_certificates_title}
      </h3>
      <section className="home__certificates">
        {certificates.map(({ url, name }, i) => (
          <CertificateLink numb={i + 1} url={url} name={name} key={i} />
        ))}
      </section>
      <Arrow />
      <h3 className={`home__section-title c-gradient-${theme}`}>
        {section_project_title}
      </h3>
      <LatestProject />
      <Arrow />
      <h3 className={`home__section-title c-gradient-${theme}`}>
        {section_tools_title}
      </h3>
      <div className="home__tools">
        {toolsArray.map(({ icon, iconColor, name }, i) => (
          <ToolBlock icon={icon} iconColor={iconColor} name={name} key={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Home);
