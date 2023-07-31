import tools from "../../tools";
import IMAGE_LOGIN from "./images/Login.png";
import IMAGE_HOME from "./images/Home.png";
import IMAGE_PROFILE from "./images/Profile.png";

const {
  html,
  javascript,
  css,
  react,
  redux,
  npm,
  express,
  mysql,
  jwt,
  sequelize,
  git,
  github,
  docker,
} = tools;

const data = {
  name: "sirius",
  date: "07/30/2023",
  frontend: "biewwl",
  backend: "biewwl",
  design: "",
  description:
    "This project is a FULL STACK application with Front-end in React.js and its Backend in Express with MySQL. It features tokenized encryption using the JWT Library.",
  tools: {
    frontend: [html, javascript, css, react, redux],
    backend: [npm, javascript, express, mysql, jwt, sequelize],
    others: [git, github, docker],
  },
  images: [IMAGE_LOGIN, IMAGE_HOME, IMAGE_PROFILE],
  repository: "https://github.com/biewwl/reactgram",
  figma: "",
  tags: [
    "react",
    "javascript",
    "node",
    "express",
    "css",
    "npm",
    "sequelize",
    "html",
    "redux",
    "mysql",
    "jwt",
    "docker"
  ],
};

export default data;
