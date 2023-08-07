import ToolLine from "../ToolLine";
import "./styles/DevToolsSection.css";
import "./styles/DevToolsSection-mobile.css";
import { connect } from "react-redux";

function DevToolsSection({ title, icons, theme }) {
  return (
    <section className="dev-tools-section">
      <h3 className={`dev-tools-section__title c-gradient-${theme}`}>
        {title}
      </h3>
      <div className="dev-tools-section__icons">
        {icons.map(({ icon, name, iconColor }, i) => (
          <ToolLine
            icon={icon}
            name={name}
            iconColor={iconColor}
            key={i}
            hover={true}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(DevToolsSection);
