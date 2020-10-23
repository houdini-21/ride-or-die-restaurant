import { combos } from "./combos.js";
import { generateCards } from "./generateCards.js";
import { saveDataLocalStorage } from "./localstorage.js";
import {
  createFunctionalBtn,
  generatecardcar,
  generatebtnDelete,
} from "./addFoodCart.js";
import "./btnOpenCar.js";

window.addEventListener("load", () => {
  generatecardcar();
  generatebtnDelete();
});

const cardscategory = document.querySelectorAll(".card-icon-category");

document.getElementById("viewmenu").addEventListener("click", () => {
  window.location = "./menu.html";
});

cardscategory.forEach((card) => {
  card.addEventListener("click", () => {
    saveDataLocalStorage("menu-selected", card.id);
    window.location = "./menu.html";
  });
});

saveDataLocalStorage("combos", combos);
combos.forEach((data) => {
  generateCards(data);
});

createFunctionalBtn("combos");
