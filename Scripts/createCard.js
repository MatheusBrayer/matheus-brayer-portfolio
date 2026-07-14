import { getGithubRepositories } from "./buscarRepositorio.js";
import { projectsData } from "./projetos.js";

export async function renderProjects() {
  const container = document.querySelector(
    "#projects-container"
  );

  const repos = await getGithubRepositories();

  repos.forEach((repo) => {
    const extra = projectsData[repo.name];

    const card = document.createElement("article");

    card.classList.add("project-card");

card.innerHTML = `
    <div class="card">
        <h3>${repo.name}</h3>

        <p>
            ${repo.description ?? "Sem descrição"}
        </p>

        <div>
            ${(extra.technologies || []).join(" • ")}
        </div>

        <div class="buttons">

            <a href="${repo.html_url}" target="_blank">
                <button>GITHUB</button>
            </a>

            ${extra.deploy ? 
                `<a href="${extra.deploy}" target="_blank">
                    <button>DEPLOY</button>
                </a>`
                : ''
            }

            ${extra.docs ? 
                `<a href="${extra.docs}" target="_blank">
                    <button>DOC</button>
                </a>`
                : ''
            }

        </div>
    </div>
`;

    container.appendChild(card);
  });
}