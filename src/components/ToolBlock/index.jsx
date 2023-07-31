import { Icon } from "@iconify/react";
import "./styles/ToolBlock.css";
import "./styles/ToolBlock-mobile.css";

function ToolBlock({ name, icon, iconColor }) {
  return (
    <div className="tool-block">
      <Icon
        icon={icon}
        className="home__icons__icon"
        style={{ color: iconColor }}
      />
      <span className="tool-block__name">{name}</span>
    </div>
  );
}

export default ToolBlock;
