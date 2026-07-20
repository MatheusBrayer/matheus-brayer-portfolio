import { initAccordion } from "./accordions.js";
import "./accordions.js";
import { renderProjects } from "./createCard.js";
import { hardSkills } from "../data/hardSkills.js";
import { softSkills } from "../data/softSkills.js";
import { listarSkills } from "./listarSkills.js";
import { iniciarCarrossel } from "./btnNavegacao.js";
import { sobreMim } from "../data/sobreMim.js";
import { inserirTexto } from "./InserirSobreMim.js";

initAccordion();
renderProjects();

const softContainer = document.querySelector("#soft-skills");
const hardContainer = document.querySelector("#hard-skills");

listarSkills(hardSkills, hardContainer);
listarSkills(softSkills, softContainer);
iniciarCarrossel();

inserirTexto("sobre-mim", sobreMim);