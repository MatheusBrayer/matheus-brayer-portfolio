import { montarMensagem } from "./montarMensagem.js";

export function initWhatsApp () {

  const btnWhatsapp = document.getElementById("btn-form-whats");

  btnWhatsapp.addEventListener("click", () => {
    const mensagem = montarMensagem();

    // if (!mensagem) return;

    console.log('btn clicado!')

    const url = `https://wa.me/555197957264?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
}