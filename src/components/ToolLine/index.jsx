import { Icon } from "@iconify/react";
import "./styles/ToolLine.css";
import { connect } from "react-redux";

function ToolLine({ name, icon, iconColor, colorful = false, hover = true }) {
  const className = colorful
    ? "tool-line"
    : `tool-line --grey${hover ? " --hover-effect" : ""}`;

  return (
    <div className={className} style={{ backgroundColor: iconColor }}>
      <Icon icon={icon} className="tool-line__icon" />
      <span className="tool-line__name">{name}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(ToolLine);