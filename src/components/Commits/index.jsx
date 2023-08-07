import { useEffect, useState } from "react";
import { getCommits } from "../../utils/getCommits";
import { useParams } from "react-router-dom";
import Commit from "../Commit";
import { connect } from "react-redux";
import { Icon } from "@iconify/react";
import "./styles/Commits.css";

function Commits({ theme }) {
  const [lastCommits, setLastCommits] = useState([]);
  const { projectName } = useParams();

  useEffect(() => {
    const setCommits = async () => {
      const commits = await getCommits(projectName);
      setLastCommits(commits);
    };
    setCommits();
  }, [projectName]);

  return (
    <section className="commits">
      <h4 className="commits__title">
        <Icon
          icon="codicon:git-commit"
          className={`commits__title__icon c-${theme}-02`}
        />
        <span className={`commits__title__text c-${theme}-02`}>
          Last Commits
        </span>
      </h4>
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
