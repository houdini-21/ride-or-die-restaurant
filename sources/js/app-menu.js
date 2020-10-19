import { generateCardsMenu } from "./generateCards.js";
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

window.addEventListener("load", () => {
  const categorywillgenerate =
    readDataLocalStorage("menu-selected") || "hamburguer";
  const category = selectedCategory(categorywillgenerate);
  category.forEach((data) => {
    generateCardsMenu(data);
  });
});

const cardscategory = document.querySelectorAll(".card-icon-category");

cardscategory.forEach((card) => {
  card.addEventListener("click", () => {
    saveDataLocalStorage("menu-selected", card.id);
    window.location = "./menu.html";
  });
});

const selectedCategory = (category) => {
  let option = "hamburguer";
  switch (category) {
    case "hamburguer":
      option = hamburguer;
      break;
    case "pizza":
      option = pizza;
      break;
    case "chicken":
      option = chicken;
      break;
    case "meat":
      option = meat;
      break;
    case "snacks":
      option = snacks;
      break;
    case "drink":
      option = drink;
      break;
    case "salad":
      option = salad;
      break;
    case "hotdog":
      option = hotdog;
      break;
  }
  return option;
};
