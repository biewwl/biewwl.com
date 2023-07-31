import { Icon } from "@iconify/react";
import "./styles/CardSkill.css";
import "./styles/CardSkill-mobile.css";

function CardSkill({ icon, name, description }) {
  return (
    <div className="card__skill">
      <Icon icon={icon} className="card__skill__icon" />
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default CardSkill;
