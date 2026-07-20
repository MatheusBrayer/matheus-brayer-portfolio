import { projectsData } from "../data/projetos.js";

export async function getGithubRepositories() {
  try {
    const response = await fetch(
      "https://api.github.com/users/MatheusBrayer/repos"
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar repositórios");
    }

    const repos = await response.json();

    return repos.filter(repo =>
      Object.keys(projectsData).includes(repo.name)
    );

  } catch (error) {
    console.error(
      "Erro ao buscar repositórios do GitHub:",
      error
    );

    return [];
  }
}