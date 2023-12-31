import tools from "../data/tools";
import axios from "axios";

export const fetchProject = async (projectName) => {
  const projectResponse = await axios.get(
    `https://api.github.com/repos/biewwl/${projectName}`
  );
  const project = await projectResponse.data;
  const { name, description, updated_at, html_url, topics } = project;
  const projectInfo = await axios.get(
    `https://raw.githubusercontent.com/biewwl/${projectName}/master/project-info.json`
  );
  const projectInfoData = await projectInfo.data;
  const { images, frontend, backend, design, figma } = projectInfoData;
  const toolsMapped = topics.map((toolName) => tools[toolName]);
  return {
    name,
    description,
    date: updated_at,
    repository: html_url,
    tools: toolsMapped,
    images,
    frontend,
    backend,
    design,
    figma
  };
};

const filterProjects = async (projects) => {
  const onlyProjects = await Promise.all(
    await projects.map(async (project) => {
      try {
        const { name } = project;
        const projectExists = await axios.get(
          `https://raw.githubusercontent.com/biewwl/${name}/master/project-info.json`
        );
        if (projectExists.status === 200) return project;
      } catch (error) {
        return null;
      }
    })
  );
  console.clear();
  const filteredProjects = onlyProjects.filter((project) => project);
  return filteredProjects;
};

export const fetchProjects = async () => {
  const response = await axios.get("https://api.github.com/users/biewwl/repos");
  const responseData = await response.data;
  const filteredProjects = await filterProjects(responseData);
  const mappedProjects = await Promise.all(
    filteredProjects.map(async (project) => {
      const { name } = project;
      const projectData = await fetchProject(name);
      return projectData;
    })
  );
  const sortedProjects = mappedProjects.sort((projectA, projectB) => {
    const dateA = new Date(projectA.date);
    const dateB = new Date(projectB.date);
    return dateB - dateA;
  });
  return sortedProjects;
};

export const fetchProjectsByNames = async (projectNames) => {
  const projects = await Promise.all(
    projectNames.map(async (projectName) => {
      const project = await fetchProject(projectName);
      return project;
    })
  );
  return projects;
};
