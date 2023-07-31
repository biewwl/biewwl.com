import sirius from "./sirius";
import biewwl from "./biewwl";

const allProjects = [biewwl, sirius];
const projects = allProjects.sort((projectA, projectB) => {
  const { date: dateA } = projectA;
  const { date: dateB } = projectB;
  const formattedDateA = new Date(dateA);
  const formattedDateB = new Date(dateB);

  return formattedDateB - formattedDateA;
});

export const getProjectData = (projectName) =>
  projects.find((project) => project.name === projectName);

export const lastProject = projects[0];

export default projects;
