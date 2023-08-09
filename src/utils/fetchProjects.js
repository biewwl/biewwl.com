import tools from "../data/tools";

export const fetchProjects = async () => {
  const response = await fetch("https://api.github.com/users/biewwl/repos");
  const responseJSON = await response.json();
  const filterProjects = responseJSON.filter((project) => project.description);
  const mappedProjects = await Promise.all(
    filterProjects.map(async (project) => {
      const { name, description, updated_at, url, topics } = project;
      const projectInfo = await fetch(
        `https://raw.githubusercontent.com/biewwl/${name}/master/project-info.json`
      );
      const projectInfoJSON = await projectInfo.json();
      const { images, frontend, backend, design } = projectInfoJSON;
      const toolsMapped = topics.map((toolName) => tools[toolName]);
      return {
        name,
        description,
        date: updated_at,
        repository: url,
        tools: toolsMapped,
        images,
        frontend,
        backend,
        design,
      };
    })
  );
  console.log(mappedProjects);
  return mappedProjects;
};
