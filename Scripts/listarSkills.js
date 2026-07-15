export function listarSkills(skills, container) {
  for (const [categoria, itens] of Object.entries(skills)) {
    const titulo = document.createElement("h3");
    titulo.textContent = categoria;

    const lista = document.createElement("ul");

    for (const item of itens) {
      const li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    }

    container.appendChild(titulo);
    container.appendChild(lista);
  }
}