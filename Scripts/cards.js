import './buscarRepositorio';
import '../data/projetos';

function createCard(repo) {
  const extraData = projectsData[repo.name];

  return `
    <article class="project-card">

      <h3>${repo.name}</h3>

      <p>
        ${
          repo.description ||
          "Projeto desenvolvido para estudo e prática."
        }
      </p>

      <div class="technologies">
        ${extraData.technologies
          .map(tech => `<span>${tech}</span>`)
          .join("")}
      </div>

      <div class="links">

        ${repo.html_url}
          GitHub
        </a>

        ${
          extraData.deploy
            ? `
              ${extraData.deploy}
                Deploy
              </a>
            `
            : ""
        }

        ${
          extraData.docs
            ? `
              <a xtraData.docs}
            `
            : ""
        }

      </div>

    </article>
  `;
}