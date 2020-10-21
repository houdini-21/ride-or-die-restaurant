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

const hamburguer = [
  {
    title: "Hamburguesa con extra queso",
    img: "./sources/img/burguer/burguer-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "2.25",
    id: "burguer1",
    category: "hamburguer",
  },
  {
    title: "Hamburguesa doble de carne",
    img: "./sources/img/burguer/burguer-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "burguer2",
    category: "hamburguer",
  },
  {
    title: "Hamburguesa con doble carne y tocino",
    img: "./sources/img/burguer/burguer-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "burguer3",
    category: "hamburguer",
  },
  {
    title: "Hamburguesa con triple carne,queso y tocino",
    img: "./sources/img/burguer/burguer-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "5.50",
    id: "burguer4",
    category: "hamburguer",
  },
  {
    title: "Hamburguesa de pollo y tocino",
    img: "./sources/img/burguer/burguer-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "burguer5",
    category: "hamburguer",
  },
  {
    title: "Hamburguesa con tocino",
    img: "./sources/img/burguer/burguer-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "2.00",
    id: "burguer6",
    category: "hamburguer",
  },
];

const pizza = [
  {
    title: "Pizza de pollo",
    img: "./sources/img/pizza/pizza-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "7.50",
    id: "pizza1",
    category: "pizza",
  },

  {
    title: "Pizza extra queso",
    img: "./sources/img/pizza/pizza-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "9.50",
    id: "pizza2",
    category: "pizza",
  },
  {
    title: "Pizza corriente",
    img: "./sources/img/pizza/pizza-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "5.50",
    id: "pizza3",
    category: "pizza",
  },
  {
    title: "Pizza extra queso y huevo",
    img: "./sources/img/pizza/pizza-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "6.50",
    id: "pizza4",
    category: "pizza",
  },
  {
    title: "Pizza con carne",
    img: "./sources/img/pizza/pizza-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "7.50",
    id: "pizza5",
    category: "pizza",
  },
  {
    title: "Pizza carnaval",
    img: "./sources/img/pizza/pizza-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "9.50",
    id: "pizza6",
    category: "pizza",
  },
];

const chicken = [
  {
    title: "Alitas de pollo frito",
    img: "./sources/img/friedchicken/friedChicken-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "chicken1",
    category: "chicken",
  },

  {
    title: "Pollo relleno de jamon y queso",
    img: "./sources/img/friedchicken/friedChicken-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "6.50",
    id: "chicken2",
    category: "chicken",
  },
  {
    title: "Pollo Picante",
    img: "./sources/img/friedchicken/friedChicken-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "chicken3",
    category: "chicken",
  },
  {
    title: "Pollo frito de la casa",
    img: "./sources/img/friedchicken/friedChicken-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "5.50",
    id: "chicken4",
    category: "chicken",
  },
  {
    title: "Pollo empanizado especial",
    img: "./sources/img/friedchicken/friedChicken-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "7.50",
    id: "chicken5",
    category: "chicken",
  },
  {
    title: "Pechuga empanizada",
    img: "./sources/img/friedchicken/friedChicken-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "chicken6",
    category: "chicken",
  },
];

const hotdog = [
  {
    title: "Mini Hotdog",
    img: "./sources/img/hotdogs/hotdog-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "hotdog1",
    category: "hotdog",
  },
  {
    title: "Hotdog con salchicha picante",
    img: "./sources/img/hotdogs/hotdog-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "hotdog2",
    category: "hotdog",
  },
  {
    title: "Hotdog vegetariano",
    img: "./sources/img/hotdogs/hotdog-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "2.50",
    id: "hotdog3",
    category: "hotdog",
  },
  {
    title: "Hotdog estadounidense",
    img: "./sources/img/hotdogs/hotdog-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "hotdog4",
    category: "hotdog",
  },
  {
    title: "Hotdog con pan salchicha de pavo",
    img: "./sources/img/hotdogs/hotdog-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "hotdog5",
    category: "hotdog",
  },
  {
    title: "Hotdog",
    img: "./sources/img/hotdogs/hotdog-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "1.50",
    id: "hotdog6",
    category: "hotdog",
  },
];

const meat = [
  {
    title: "Carne a la BBQ",
    img: "./sources/img/meat/meat-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "meat1",
    category: "meat",
  },

  {
    title: "Carne con papas",
    img: "./sources/img/meat/meat-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "meat2",
    category: "meat",
  },
  {
    title: "Carne con jalea de fresa",
    img: "./sources/img/meat/meat-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "5.50",
    id: "meat3",
    category: "meat",
  },
  {
    title: "Carne asada",
    img: "./sources/img/meat/meat-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "meat4",
    category: "meat",
  },
  {
    title: "Filetes con adereso ride",
    img: "./sources/img/meat/meat-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "meat5",
    category: "meat",
  },
  {
    title: "Carne ride or die",
    img: "./sources/img/meat/meat-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "meat6",
    category: "meat",
  },
];

const salad = [
  {
    title: "Ensalada con queso y mandarina",
    img: "./sources/img/salad/salad-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "salad1",
    category: "salad",
  },
  {
    title: "Ensalada college",
    img: "./sources/img/salad/salad-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "salad2",
    category: "salad",
  },
  {
    title: "Ensalada petite",
    img: "./sources/img/salad/salad-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "2.50",
    id: "salad3",
    category: "salad",
  },
  {
    title: "Ensalada extra light",
    img: "./sources/img/salad/salad-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "salad4",
    category: "salad",
  },
  {
    title: "Ensalada con esparragos",
    img: "./sources/img/salad/salad-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "4.50",
    id: "salad5",
    category: "salad",
  },
  {
    title: "Ensalada con remolacha",
    img: "./sources/img/salad/salad-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "3.50",
    id: "salad6",
    category: "salad",
  },
];

const drink = [
  {
    title: "Soda natural de frutas",
    img: "./sources/img/drink/drink-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "2.00",
    id: "drink1",
    category: "drink",
  },
  {
    title: "Limonada",
    img: "./sources/img/drink/drink-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "0.75",
    id: "drink2",
  },
  {
    title: "Batidos",
    img: "./sources/img/drink/drink-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "1.50",
    id: "drink3",
    category: "drink",
  },
  {
    title: "Te de durazno",
    img: "./sources/img/drink/drink-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "1.25",
    id: "drink4",
    category: "drink",
  },
  {
    title: "Cafe faster die",
    img: "./sources/img/drink/drink-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "1.35",
    id: "drink5",
    category: "drink",
  },
  {
    title: "Coca lata",
    img: "./sources/img/drink/drink-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "1.00",
    id: "drink6",
    category: "drink",
  },
];

const snacks = [
  {
    title: "Palomitas de maiz",
    img: "./sources/img/snack/snack-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "1.50",
    id: "snack1",
  },
  {
    title: "cracks",
    img: "./sources/img/snack/snack-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "0.50",
    id: "snack2",
  },
  {
    title: "Estrellas ninjas",
    img: "./sources/img/snack/snack-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "0.50",
    id: "snack3",
  },
  {
    title: "Donas",
    img: "./sources/img/snack/snack-4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "0.50",
    id: "snack4",
  },
  {
    title: "Oreo cookies",
    img: "./sources/img/snack/snack-5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "0.50",
    id: "snack5",
  },
  {
    title: "Pastel de chocolate",
    img: "./sources/img/snack/snack-6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
    price: "7.50",
    id: "snack6",
  },
];

const createDish = (title, img, description, price, id, category) => {
  switch (category) {
    case "hamburguer":
      return new Hamburguer(title, img, description, price, id);
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

const burguer = createDish(
  "Hamburguesa con extra queso",
  "./sources/img/burguer/burguer-1.jpg",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim quis mi euismod eleifend.",
  "2.25",
  "burguer1",
  "hamburguer"
);
console.log(burguer)
burguer.addCar();

export { hamburguer, pizza, chicken, meat, snacks, drink, salad, hotdog };
