import { saveDataLocalStorage } from "./localstorage.js";

class Shoppingcart {
  constructor() {
    this._food = JSON.parse(localStorage.getItem("shopping-cart")) || [];
  }

  addFood(dish) {
    this._food.push(dish);
    saveDataLocalStorage("shopping-cart", this._food);
    this.calculePrice();
  }

  deleteFood(iddish) {
    this._food.splice(iddish, 1);
    saveDataLocalStorage("shopping-cart", this._food);
    this.calculePrice();
  }

  calculePrice() {
    let arrayFood = this._food;
    let price = arrayFood.reduce((acc, el) => acc + parseFloat(el._price), 0);
    document.getElementById("total-price-cart").innerText = `$ ${price}`;
  }
}

export { Shoppingcart };
