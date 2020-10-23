import { generateCardsMenu } from "./generateCards.js";
import { readDataLocalStorage, saveDataLocalStorage } from "./localstorage.js";
import {
  Hamburguermenu,
  Pizzamenu,
  Chickenmenu,
  Meatmenu,
  Drinkmenu,
  Snacksmenu,
  Hotdogmenu,
  Saladmenu,
} from "./menu.js";
import { createFunctionalBtn, generatecardcar } from "./addFoodCart.js";
import './btnOpenCar.js'

window.addEventListener("load", () => {
  saveDataLocalStorage("menu-selected", "hamburguer");
  updatecards();
  generatecardcar();
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
      option = Hamburguermenu;
      break;
    case "pizza":
      option = Pizzamenu;
      break;
    case "chicken":
      option = Chickenmenu;
      break;
    case "meat":
      option = Meatmenu;
      break;
    case "snacks":
      option = Snacksmenu;
      break;
    case "drink":
      option = Drinkmenu;
      break;
    case "salad":
      option = Saladmenu;
      break;
    case "hotdog":
      option = Hotdogmenu;
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
  const loader = document.getElementById("loader");
  const titlecategory = document.getElementById("title-category");
  const categorywillgenerate = readDataLocalStorage("menu-selected");
  const titlemenu = document.getElementById("title-menu-cards");
  const subtitlemenu = document.getElementById("subtitle-menu-cards");
  const category = selectedCategory(categorywillgenerate);
  clearDiv("box-menu");

  subtitlemenu.innerText = `The Best of the ${categorywillgenerate} category`;
  titlemenu.innerText = `Menu ${categorywillgenerate}`;
  loader.classList.remove("hidden");
  titlecategory.classList.add("hidden");
  let datastorage = "menu-" + categorywillgenerate;
  saveDataLocalStorage(datastorage, category);
  setTimeout(() => {
    loader.classList.add("hidden");
    titlecategory.classList.remove("hidden");
    category.forEach((data) => {
      generateCardsMenu(data);
    });
    createFunctionalBtn(datastorage);
  }, 1500);
  changestate(categorywillgenerate);
};
