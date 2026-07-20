import { montarMensagem } from "./montarMensagem.js";

export function initEmail () {

  const btnEmail = document.getElementById("btn-form-email");

  btnEmail.addEventListener("click", () => {
    const mensagem = montarMensagem();

    // if (!mensagem) return;

    console.log('btn clicado!')

    const assunto = "Contato pelo Portfólio";

    window.location.href =
      `mailto:mbrayer3@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
  })

};