export function inserirTexto(id, texto) {
    const elemento = document.getElementById(id);

    elemento.innerHTML = texto
        .split("\n\n")
        .map(paragrafo => `<p>${paragrafo.trim()}</p>`)
        .join("");
}