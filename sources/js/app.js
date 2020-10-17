import { combos } from "./combos.js";
import { generateCards } from "./generateCards.js";

combos.forEach((data) => {
  generateCards(data);
});

