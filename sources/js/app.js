import { combos } from "./combos.js";
import { generateCards } from "./generateCards.js";
import { saveDataLocalStorage } from "./localstorage.js";

const cardscategory = document.querySelectorAll(".card-icon-category");
const shoppingcart = document.getElementById("shopping-cart-div");
const closetag = document.getElementById("closetag");

shoppingcart.addEventListener("click", () => {
  document.getElementById("shopping-cart-details").style.width = "350px";
});

closetag.addEventListener("click", () => {
  document.getElementById("shopping-cart-details").style.width = "0px";
});

document.getElementById("viewmenu").addEventListener("click", () => {
  window.location = "./menu.html";
});

cardscategory.forEach((card) => {
  card.addEventListener("click", () => {
    saveDataLocalStorage("menu-selected", card.id);
    window.location = "./menu.html";
  });
});

combos.forEach((data) => {
  generateCards(data);
});
