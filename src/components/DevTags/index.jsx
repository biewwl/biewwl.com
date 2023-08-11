import config from "../../config.json";
import "./styles/DevTags.css";

function DevTags({ frontend, backend, design }) {
  const { backend_tag_text, design_tag_text, frontend_tag_text } =
    config.components.devTags;

  return (
    <section className="dev-tags">
      {frontend && (
        <span className="dev-tags__tag frontend">
          <span>{frontend_tag_text}</span>
        </span>
      )}
      {backend && (
        <span className="dev-tags__tag backend">
          <span>{backend_tag_text}</span>
        </span>
      )}
      {design && (
        <span className="dev-tags__tag design">
          <span>{design_tag_text}</span>
        </span>
      )}
    </section>
  );
}

export default DevTags;
