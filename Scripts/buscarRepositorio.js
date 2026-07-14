import { projectsData } from "./projetos.js";

export async function getGithubRepositories() {
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
}