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
  updatecards();
});

const cardscategory = document.querySelectorAll(".card-icon-category");

cardscategory.forEach((card) => {
  card.addEventListener("click", () => {
    saveDataLocalStorage("menu-selected", card.id);
    updatecards();
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
let oldDiv = "hamburguer";

const changestate = (div) => {
  document.getElementById(oldDiv).classList.remove("active");
  document.getElementById(div).classList.add("active");
  oldDiv = div;
};

const clearDiv = (id) => {
  const div = document.getElementById(id);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

const updatecards = () => {
  const categorywillgenerate =
    readDataLocalStorage("menu-selected") || "hamburguer";
  const category = selectedCategory(categorywillgenerate);
  clearDiv("box-menu");
  category.forEach((data) => {
    generateCardsMenu(data);
  });
  changestate(categorywillgenerate);
};
