import { useEffect, useState } from "react";
import { getCommits } from "../../utils/getCommits";
import { useParams } from "react-router-dom";
import Commit from "../Commit";
import { connect } from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
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
      <SectionTitle icon={"codicon:git-commit"} text={"Last Commits"} />
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
