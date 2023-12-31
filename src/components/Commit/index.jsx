import { connect } from "react-redux";
import useTimer from "../../hooks/useTimer";
import { Icon } from "@iconify/react";
import config from "../../config.json";
import "./styles/Commit.css";

function Commit({ commitData, theme, index }) {
  const { avatar_url, date, nick, message } = commitData;
  const [currentTimer, currentFormat] = useTimer(date);
  const { icon_commit } = config.components.commit;

  const inPlural = `${currentFormat}${currentTimer > 1 ? "s" : ""}`;

  const tagCommit = () => {
    const [tag] = message.split(":");
    return tag.toLowerCase();
  };

  const commitMessage = message.split(":")[1];

  const classNameLast = index === 0 ? " --last" : "";

  return (
    <section className={`commit --${tagCommit()}${classNameLast}`}>
      {currentTimer && (
        <>
          <div className="commit__header">
            <img
              src={avatar_url}
              alt=""
              className="commit__header__user-image"
              title={nick}
            />
            <span className={`commit__header__date c-${theme}-03`}>
              {currentTimer} {inPlural} ago
            </span>
          </div>
          <div className="commit__details">
            <Icon
              icon={icon_commit[tagCommit()]}
              className={`commit__details__icon c-${theme}-02`}
            />
            <p className={`commit__details__message c-${theme}-02`}>
              {commitMessage}
            </p>
          </div>
        </>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(Commit);
