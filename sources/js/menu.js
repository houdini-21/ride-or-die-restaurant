import {
  Hamburguer,
  Pizza,
  Chicken,
  Meat,
  Snacks,
  Drink,
  Salad,
  Hotdog,
} from "./Menuclass.js";
let array = [];
const createDish = (title, img, description, price, id, category) => {
  switch (category) {
    case "hamburguer":
      let plato = new Hamburguer(title, img, description, price, id);
      array.push(plato);
      return;
      break;
    case "pizza":
      return new Pizza(title, img, description, price, id);
      break;
    case "chicken":
      return new Chicken(title, img, description, price, id);
      break;
    case "meat":
      return new Meat(title, img, description, price, id);
      break;
    case "snacks":
      return new Snacks(title, img, description, price, id);
      break;
    case "drink":
      return new Drink(title, img, description, price, id);
      break;
    case "salad":
      return new Salad(title, img, description, price, id);
      break;
    case "hotdog":
      return new Hotdog(title, img, description, price, id);
      break;
  }
};

const burguer1 = createDish(
  "Hamburguesa con extra queso",
  "./sources/img/burguer/burguer-1.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "2.25",
  "burguer1",
  "hamburguer"
);

const burguer2 = createDish(
  "Hamburguesa doble de carne",
  "./sources/img/burguer/burguer-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "burguer2",
  "hamburguer"
);

const burguer3 = createDish(
  "Hamburguesa con doble carne y tocino",
  "./sources/img/burguer/burguer-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "burguer3",
  "hamburguer"
);

const burguer4 = createDish(
  "Hamburguesa con triple carne,queso y tocino",
  "./sources/img/burguer/burguer-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "5.50",
  "burguer4",
  "hamburguer"
);
const burguer5 = createDish(
  "Hamburguesa de pollo y tocino",
  "./sources/img/burguer/burguer-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "burguer5",
  "hamburguer"
);
const burguer6 = createDish(
  "Hamburguesa con tocino",
  "./sources/img/burguer/burguer-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "2.00",
  "burguer6",
  "hamburguer"
);

const pizza1 = createDish(
  "Pizza de pollo",
  "./sources/img/pizza/pizza-1.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "7.50",
  "pizza1",
  "pizza"
);

const pizza2 = createDish(
  "Pizza extra queso",
  "./sources/img/pizza/pizza-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "9.50",
  "pizza2",
  "pizza"
);
const pizza3 = createDish(
  "Pizza corriente",
  "./sources/img/pizza/pizza-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "5.50",
  "pizza3",
  "pizza"
);
const pizza4 = createDish(
  "Pizza extra queso y huevo",
  "./sources/img/pizza/pizza-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "6.50",
  "pizza4",
  "pizza"
);
const pizza5 = createDish(
  "Pizza con carne",
  "./sources/img/pizza/pizza-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "7.50",
  "pizza5",
  "pizza"
);
const pizza6 = createDish(
  "Pizza carnaval",
  "./sources/img/pizza/pizza-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "9.50",
  "pizza6",
  "pizza"
);

const pollo1 = createDish(
  "Alitas de pollo frito",
  "./sources/img/friedchicken/friedChicken-1.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "chicken1",
  "chicken"
);
const pollo2 = createDish(
  "Pollo relleno de jamon y queso",
  "./sources/img/friedchicken/friedChicken-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "6.50",
  "chicken2",
  "chicken"
);
const pollo3 = createDish(
  "Pollo Picante",
  "./sources/img/friedchicken/friedChicken-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "chicken3",
  "chicken"
);
const pollo4 = createDish(
  "Pollo frito de la casa",
  "./sources/img/friedchicken/friedChicken-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "5.50",
  "chicken4",
  "chicken"
);
const pollo5 = createDish(
  "Pollo empanizado especial",
  "./sources/img/friedchicken/friedChicken-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "7.50",
  "chicken5",
  "chicken"
);
const pollo6 = createDish(
  "Pechuga empanizada",
  "./sources/img/friedchicken/friedChicken-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "chicken6",
  "chicken"
);

const hotdog1 = createDish(
  "Mini Hotdog",
  "./sources/img/hotdogs/hotdog-1.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "hotdog1",
  "hotdog"
);
const hotdog2 = createDish(
  "Hotdog con salchicha picante",
  "./sources/img/hotdogs/hotdog-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "hotdog2",
  "hotdog"
);
const hotdog3 = createDish(
  "Hotdog vegetariano",
  "./sources/img/hotdogs/hotdog-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "2.50",
  "hotdog3",
  "hotdog"
);
const hotdog4 = createDish(
  "Hotdog estadounidense",
  "./sources/img/hotdogs/hotdog-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "hotdog4",
  "hotdog"
);
const hotdog5 = createDish(
  "Hotdog con pan salchicha de pavo",
  "./sources/img/hotdogs/hotdog-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "hotdog5",
  "hotdog"
);
const hotdog6 = createDish(
  "Hotdog",
  "./sources/img/hotdogs/hotdog-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "1.50",
  "hotdog6",
  "hotdog"
);

const meat1 = createDish(
  "Carne a la BBQ",
  "./sources/img/meat/meat-1.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "meat1",
  "meat"
);
const meat2 = createDish(
  "Carne con papas",
  "./sources/img/meat/meat-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "meat2",
  "meat"
);
const meat3 = createDish(
  "Carne con jalea de fresa",
  "./sources/img/meat/meat-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "5.50",
  "meat3",
  "meat"
);
const meat4 = createDish(
  "Carne asada",
  "./sources/img/meat/meat-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "meat4",
  "meat"
);
const meat5 = createDish(
  "Filetes con adereso ride",
  "./sources/img/meat/meat-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "meat5",
  "meat"
);
const meat6 = createDish(
  "Carne ride or die",
  "./sources/img/meat/meat-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "meat6",
  "meat"
);

const salad1 = createDish(
  "Ensalada con queso y mandarina",
  "./sources/img/salad/salad-1.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "salad1",
  "salad"
);
const salad2 = createDish(
  "Ensalada college",
  "./sources/img/salad/salad-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "salad2",
  "salad"
);
const salad3 = createDish(
  "Ensalada petite",
  "./sources/img/salad/salad-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "2.50",
  "salad3",
  "salad"
);
const salad4 = createDish(
  "Ensalada extra light",
  "./sources/img/salad/salad-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "salad4",
  "salad"
);
const salad5 = createDish(
  "Ensalada con esparragos",
  "./sources/img/salad/salad-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "4.50",
  "salad5",
  "salad"
);
const salad6 = createDish(
  "Ensalada con remolacha",
  "./sources/img/salad/salad-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "3.50",
  "salad6",
  "salad"
);

const drink1 = createDish(
  "Soda natural de frutas",
  "./sources/img/drink/drink-1.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "2.00",
  "drink1",
  "drink"
);
const drink2 = createDish(
  "Limonada",
  "./sources/img/drink/drink-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "0.75",
  "drink2"
);
const drink3 = createDish(
  "Batidos",
  "./sources/img/drink/drink-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "1.50",
  "drink3",
  "drink"
);
const drink4 = createDish(
  "Te de durazno",
  "./sources/img/drink/drink-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "1.25",
  "drink4",
  "drink"
);
const drink5 = createDish(
  "Cafe faster die",
  "./sources/img/drink/drink-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "1.35",
  "drink5",
  "drink"
);
const drink6 = createDish(
  "Coca lata",
  "./sources/img/drink/drink-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "1.00",
  "drink6",
  "drink"
);

const snacks1 = createDish(
  "Palomitas de maiz",
  "./sources/img/snack/snack-1.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "1.50",
  "snack1",
  "snacks"
);

const snack2 = createDish(
  "cracks",
  "./sources/img/snack/snack-2.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "0.50",
  "snack2",
  "snacks"
);

const snack3 = createDish(
  "Estrellas ninjas",
  "./sources/img/snack/snack-3.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "0.50",
  "snack3",
  "snacks"
);
const snack4 = createDish(
  "Donas",
  "./sources/img/snack/snack-4.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "0.50",
  "snack4",
  "snacks"
);
const snack5 = createDish(
  "Oreo cookies",
  "./sources/img/snack/snack-5.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "0.50",
  "snack5",
  "snacks"
);

const snack6 = createDish(
  "Pastel de chocolate",
  "./sources/img/snack/snack-6.jpg",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "7.50",
  "snack6",
  "snacks"
);

