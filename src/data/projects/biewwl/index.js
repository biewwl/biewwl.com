import tools from "../../tools";
import IMAGE_HOME from "./images/Home.png";
import IMAGE_PROJECT from "./images/Project.png";
import IMAGE_PROJECTS from "./images/Projects.png";
import IMAGE_SAVED from "./images/Saved.png";

const { figma, html, javascript, react, css, git, github, node } = tools;

const data = {
  name: "biewwl",
  date: "06/30/2023",
  frontend: "biewwl",
  backend: "",
  design: "biewwl",
  description:
    "This project is a concept for a portfolio style website and frontend website. Created in Figma in a responsive and minimalist way.",
  tools: {
    frontend: [html, javascript, react, css, node],
    backend: [],
    others: [git, github, figma],
  },
  images: [IMAGE_HOME, IMAGE_PROJECT, IMAGE_PROJECTS, IMAGE_SAVED],
  repository: "https://github.com/biewwl/biewwl.com",
  figma: "https://www.figma.com/file/AnnaSGxziIvdDRu41toAWs/Novo-Portf%C3%B3lio?type=design&node-id=21%3A36&mode=design&t=zlw4CM76EbJVvtfN-1",
  tags: ["uiux", "ui", "ux", "design", "figma"],
};

export default data;
