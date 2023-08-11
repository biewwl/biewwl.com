import { useEffect, useState } from "react";
import { fetchCommits } from "../../utils/fetchCommits";
import { useParams } from "react-router-dom";
import Commit from "../Commit";
import { connect } from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
import config from "../../config.json";
import "./styles/Commits.css";

function Commits({ theme }) {
  const [lastCommits, setLastCommits] = useState([]);
  const { projectName } = useParams();
  const { section_last_commits_text, section_last_commits_icon } =
    config.components.commits;

  useEffect(() => {
    const setCommits = async () => {
      const commits = await fetchCommits(projectName);
      setLastCommits(commits);
    };
    setCommits();
  }, [projectName]);

  return (
    <section className="commits">
      <SectionTitle
        icon={section_last_commits_icon}
        text={section_last_commits_text}
      />
      <section className="commits__cards">
        {lastCommits.map((commitData, i) => {
          return <Commit key={i} commitData={commitData} index={i} />;
        })}
      </section>
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Commits);
