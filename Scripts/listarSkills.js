export function listarSkills (objSkills, container) {

  for (const [titulo, skills] of Object.entries(objSkills)) {

    const cardSkills = document.createElement("div")
    cardSkills.className = "elemento";

    cardSkills.innerHTML = `
      <h3> ${titulo.replaceAll("_"," ")} </h3>

      <ul>
        ${skills.map(skill => `<li>${skill}</li>`).join("")}
      </ul>
    `

    container.appendChild(cardSkills);

  }
    
}
