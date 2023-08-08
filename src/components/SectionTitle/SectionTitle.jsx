import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import "./styles/SectionTitle.css";

function SectionTitle({ icon, text, theme }) {
  return (
    <section className="section-title">
      <Icon icon={icon} className={`section-title__icon c-${theme}-02`} />
      <h3 className={`section-title__text c-${theme}-02`}>{text}</h3>
    </section>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(SectionTitle);
