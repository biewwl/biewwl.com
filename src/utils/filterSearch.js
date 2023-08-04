import ToolLine from "../components/ToolLine";
import tools, { toolsArray } from "../data/tools";
import config from "../config.json";

const toolIdentifier = config.pages.projects.identifier_tool;

export const splitAndRecognizeTools = (text) => {
  const toolsName = Object.keys(tools);
  const recognizedTools = [];
  let currentText = text;
  toolsName.forEach((toolName) => {
    if (currentText.includes(`${toolIdentifier}${toolName}`)) {
      recognizedTools.push(toolName);
      const dividedText = currentText
        .split(`${toolIdentifier}${toolName}`)
        .join(" ");
      currentText = dividedText;
    }
  });
  const textWords = currentText.split(" ");
  const textWithoutSpace = textWords.filter(
    (word) => word !== " " && word !== ""
  );
  return [textWithoutSpace, recognizedTools];
};

export const filterByWords = (text, projectsArray) => {
  const [searchWords] = splitAndRecognizeTools(text);
  let newProjects = projectsArray;
  searchWords.forEach((word) => {
    const currentFilter = newProjects.filter((projectData) => {
      const {
        name,
        tools: { frontend, backend, others },
      } = projectData;
      const currentProjectName = name.toLowerCase();
      const allTools = [...frontend, ...backend, ...others];
      const nameIncludes = currentProjectName.includes(word);
      const toolsIncludes = allTools.some((tool) => {
        const { name: toolName } = tool;
        const toolNameLower = toolName.toLowerCase();
        return toolNameLower.includes(word);
      });
      return nameIncludes || toolsIncludes;
    });
    newProjects = currentFilter;
  });
  return newProjects;
};

export const filterByTools = (text, projectsArray) => {
  const searchTools = splitAndRecognizeTools(text)[1];
  let newProjects = projectsArray;
  searchTools.forEach((word) => {
    const currentFilter = newProjects.filter((projectData) => {
      const {
        tools: { frontend, backend, others },
      } = projectData;
      const allTools = [...frontend, ...backend, ...others];
      const toolsIncludes = allTools.some((tool) => {
        const { name: toolName } = tool;
        const toolNameLower = toolName.toLowerCase();
        return toolNameLower.includes(word);
      });
      return toolsIncludes;
    });
    newProjects = currentFilter;
  });
  return newProjects;
};

export const generateTags = (querySearch) => {
  const toolsName = Object.keys(tools);
  const tagsElement = [];
  toolsName.forEach((toolName, i) => {
    const querySearchLower = querySearch.toLowerCase();
    if (
      querySearchLower.includes(`${toolIdentifier}${toolName.toLowerCase()}`)
    ) {
      const toolData = toolsArray.find((tool) => {
        const currentToolName = tool.name;
        return toolName.toLowerCase() === currentToolName.toLowerCase();
      });
      const { name, icon, iconColor } = toolData;
      tagsElement.push(
        <ToolLine
          icon={icon}
          name={name}
          iconColor={iconColor}
          key={i}
          colorful={true}
        />
      );
    }
  });

  return tagsElement;
};
