import { Icon } from "@iconify/react";
import "./styles/ToolLine.css";

function ToolLine({ name, icon, iconColor, colorful = false }) {
  const className = colorful ? "tool-line" : "tool-line --grey";

  return (
    <div className={className} style={{ backgroundColor: iconColor }}>
      <Icon icon={icon} className="tool-line__icon" />
      <span className="tool-line__name">{name}</span>
    </div>
  );
}

export default ToolLine;
