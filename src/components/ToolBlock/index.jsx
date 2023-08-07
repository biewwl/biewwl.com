import { Icon } from "@iconify/react";
import "./styles/ToolBlock.css";
import "./styles/ToolBlock-mobile.css";
import { connect } from "react-redux";

function ToolBlock({ name, icon, iconColor, theme }) {
  return (
    <div className={`tool-block bg-${theme}-01 bb-${theme}-03`}>
      <Icon
        icon={icon}
        className="tool-block__icon"
        style={{ color: iconColor }}
      />
      <span className={`tool-block__name c-${theme}-03`}>{name}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(ToolBlock);