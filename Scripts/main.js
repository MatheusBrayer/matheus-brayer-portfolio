import { initAccordion } from "./accordions.js";
import "./accordions.js";
import { renderProjects } from "./createCard.js";
import { hardSkills } from "./hardskills.js";
import { softSkills } from "./softSkills.js";
import { listarSkills } from "./listarSkills.js";
import { iniciarCarrossel } from "./btnNavegacao.js";

initAccordion();
renderProjects();

const softContainer = document.querySelector("#soft-skills");
const hardContainer = document.querySelector("#hard-skills");

listarSkills(hardSkills, hardContainer);
listarSkills(softSkills, softContainer);
iniciarCarrossel();
