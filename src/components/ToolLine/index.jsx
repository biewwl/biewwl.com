import { Icon } from "@iconify/react";
import "./styles/ToolLine.css";

function ToolLine({ name, icon, iconColor }) {
  return (
    <div className="tool-line" style={{ backgroundColor: iconColor }}>
      <Icon icon={icon} className="tool-line__icon" />
      <span className="tool-line__name">{name}</span>
    </div>
  );
}

export default ToolLine;
