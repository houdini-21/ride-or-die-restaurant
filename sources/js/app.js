import { combos } from "./combos.js";
import { generateCards, generateCardsMenu } from "./generateCards.js";
import {
  hamburguer,
  pizza,
  chicken,
  meat,
  snacks,
  drink,
  salad,
  hotdog,
} from "./menu.js";
import { readDataLocalStorage, saveDataLocalStorage } from "./localstorage.js";

const cardscategory = document.querySelectorAll(".card-icon-category");

cardscategory.forEach((card) => {
  card.addEventListener("click", () => {
    saveDataLocalStorage("menu-selected", card.id);
    window.location = "./menu.html";
  });
});

combos.forEach((data) => {
  generateCards(data);
});

