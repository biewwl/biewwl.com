import ToolLine from "../ToolLine";
import { connect } from "react-redux";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./styles/DevToolsSection.css";
import "./styles/DevToolsSection-mobile.css";

function DevToolsSection({ title, icons, icon }) {
  return (
    <section className="dev-tools-section">
      <SectionTitle text={title} icon={icon} />
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
