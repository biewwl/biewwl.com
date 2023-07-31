import tools from "../../tools";
import IMAGE_HOME from "./images/Home.png";
import IMAGE_HOME_MID from "./images/HomeMid.png";
import IMAGE_PROJECTS from "./images/Projects.png";

const { figma, html, javascript, react, css } = tools;

const data = {
  name: "biewwl",
  date: "06/30/2023",
  frontend: "biewwl",
  backend: "",
  design: "biewwl",
  description:
    "This project is a concept for a portfolio style website and frontend website. Created in Figma in a responsive and minimalist way.",
  tools: {
    frontend: [html, javascript, react, css],
    backend: "",
    others: [figma],
  },
  images: [IMAGE_HOME, IMAGE_HOME_MID, IMAGE_PROJECTS],
  repository: "github.com/biewwl",
  figma: "figma.com",
  tags: ["uiux", "ui", "ux", "design", "figma"],
};

export default data;
