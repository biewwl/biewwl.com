import projects from "../data/projects";

export const splitWords = (text) => {
  let currentText = text;
  const textWords = currentText.split(" ");
  const textWithoutSpace = textWords.filter(
    (word) => word !== " " && word !== ""
  );
  return textWithoutSpace;
};

export const filterByWords = (text, projectsArray) => {
  const searchWords = splitWords(text);
  let newProjects = projectsArray;
  searchWords.forEach((word) => {
    const currentFilter = newProjects.filter((projectData) => {
      const { name, tools } = projectData;
      const wordLower = word.toLowerCase();
      const currentProjectName = name.toLowerCase();
      const nameIncludes = currentProjectName.includes(wordLower);
      const toolsIncludes = tools.some((tool) => {
        const { name: toolName } = tool;
        const toolNameLower = toolName.toLowerCase();
        return toolNameLower.includes(wordLower);
      });
      return nameIncludes || toolsIncludes;
    });
    newProjects = currentFilter;
  });
  return newProjects;
};

export const filterByTools = (currentResults, toolsName) => {
  let newProjects = currentResults;
  toolsName.forEach((word) => {
    const currentFilter = newProjects.filter((projectData) => {
      const { tools } = projectData;
      const toolsIncludes = tools.some((tool) => {
        const { name: toolName } = tool;
        const toolNameLower = toolName.toLowerCase();
        return toolNameLower === word.toLowerCase();
      });
      return toolsIncludes;
    });
    newProjects = currentFilter;
  });
  return newProjects;
};

export const usedTools = (allProjects) => {
  const tools = [];
  allProjects.forEach((project) => {
    const { tools: projectTools } = project;
    projectTools.forEach((tool) => {
      const existTool = tools.some((savedTool) => savedTool === tool);
      if (!existTool) tools.push(tool);
    });
  });
  return tools;
};
