import { Icon } from "@iconify/react";
import "./styles/CardSkill.css";
import "./styles/CardSkill-mobile.css";
import { connect } from "react-redux";

function CardSkill({ icon, name, description, theme }) {
  return (
    <div className={`card__skill bb-${theme}-03`}>
      <Icon icon={icon} className="card__skill__icon" />
      <p className="card__skill__name">{name}</p>
      <p className="card__skill__description">{description}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(CardSkill);
