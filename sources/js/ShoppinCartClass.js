import { saveDataLocalStorage } from "./localstorage.js";

class Shoppingcart {
  constructor() {
    this._food = JSON.parse(localStorage.getItem("shopping-cart")) || [];
  }

  addFood(dish) {
    this._food.push(dish);
    saveDataLocalStorage("shopping-cart", this._food);
  }

  deleteFood(iddish) {
    this._food.splice(iddish, 1);
    saveDataLocalStorage("shopping-cart", this._food);
  }

  calculePrice() {
    //reduce
  }
}

export { Shoppingcart };
