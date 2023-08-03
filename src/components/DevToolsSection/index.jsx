import ToolLine from "../ToolLine";
import "./styles/DevToolsSection.css";
import "./styles/DevToolsSection-mobile.css";

function DevToolsSection({ title, icons }) {
  return (
    <section className="dev-tools-section">
      <h3 className="dev-tools-section__title">{title}</h3>
      <div className="dev-tools-section__icons">
        {icons.map(({ icon, name, iconColor }, i) => (
          <ToolLine icon={icon} name={name} iconColor={iconColor} key={i} />
        ))}
      </div>
    </section>
  );
}

export default DevToolsSection;
