import { readDataLocalStorage } from "./localstorage.js";
import { generateCardsforShoppingCart } from "./generateCards.js";
import { Shoppingcart } from "./ShoppinCartClass.js";

let shoppingcar = new Shoppingcart();

const clearDiv = (id) => {
  const div = document.getElementById(id);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};

const generatecardcar = () => {
  const car = JSON.parse(localStorage.getItem("shopping-cart")) || [];
  car.forEach((data) => {
    generateCardsforShoppingCart(data);
  });
  updateNumberCar();
  shoppingcar.calculePrice();
  generatebtnDelete();
};

const generatebtnDelete = () => {
  const btnDeleteCart = document.querySelectorAll(".card-delete-food");
  btnDeleteCart.forEach((btn, nArray) => {
    btn.addEventListener("click", () => {
      shoppingcar.deleteFood(nArray);
      clearDiv("container-dish");
      generatecardcar();
    });
  });
};

const updateNumberCar = () => {
  const number = document.getElementById("quantity-cart-num");
  const car = JSON.parse(localStorage.getItem("shopping-cart")).length;
  number.innerText = car;
};

const createFunctionalBtn = (type) => {
  const btnAddCart = document.querySelectorAll(".card-btn-add-car");
  const dataLocalStorage = readDataLocalStorage(type);

  btnAddCart.forEach((btn, nArray) => {
    btn.addEventListener("click", () => {
      generateCardsforShoppingCart(dataLocalStorage[nArray]);
      shoppingcar.addFood(dataLocalStorage[nArray]);
      updateNumberCar();
      generatebtnDelete();
    });
  });
};

export { createFunctionalBtn, generatecardcar, generatebtnDelete };
