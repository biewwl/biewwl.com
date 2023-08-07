import { connect } from "react-redux";
import useTimer from "../../hooks/useTimer";
import "./styles/Commit.css";

function Commit({ commitData, theme }) {
  const { avatar_url, date, nick, message } = commitData;
  const [currentTimer, currentFormat] = useTimer(date);

  const inPlural = `${currentFormat}${currentTimer > 1 ? "s" : ""}`;

  const tagCommit = () => {
    const [tag] = message.split(":");
    return tag.toLowerCase();
  };

  return (
    <section className={`commit --${tagCommit()}`}>
      {currentTimer && (
        <>
          <div className="commit__header">
            <img
              src={avatar_url}
              alt=""
              className="commit__header__user-image"
            />
            <div className="commit__header__date-and-nick">
              <span className={`commit__header__date-and-nick__date c-${theme}-03`}>
                {currentTimer} {inPlural} ago
              </span>
              <span className={`commit__header__date-and-nick__nick c-${theme}-03`}>
                @{nick}
              </span>
            </div>
          </div>
          <div className="commit__details">
            <p className={`commit__detail__message c-${theme}-02`}>{message}</p>
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
