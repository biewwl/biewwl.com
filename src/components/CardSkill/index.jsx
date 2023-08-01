import { Icon } from "@iconify/react";
import "./styles/CardSkill.css";
import "./styles/CardSkill-mobile.css";

function CardSkill({ icon, name, description }) {
  return (
    <div className="card__skill">
      <Icon icon={icon} className="card__skill__icon" />
      <p className="card__skill__name">{name}</p>
      <p className="card__skill__description">{description}</p>
    </div>
  );
}

export default CardSkill;
