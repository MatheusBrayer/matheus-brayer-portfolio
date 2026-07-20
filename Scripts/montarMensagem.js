import { obterDadosFormulario } from "./dadosFormulario.js";

export function montarMensagem() {
  const dados = obterDadosFormulario();

  if (!dados.nome) {
    console.log("Campo nome é obrigatório!");
    return null;
  }

  if (!dados.email) {
    console.log("Campo email é obrigatório!");
    return null;
  }

  if (!dados.mensagem) {
    console.log("Campo mensagem é obrigatório!");
    return null;
  }

  return `
Olá Matheus!

Me chamo ${dados.nome}
E-mail: ${dados.email}

Mensagem:
${dados.mensagem}
`;
}