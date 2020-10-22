class Food {
  constructor(title, img, description, price, id) {
    this._title = title;
    this._img = img;
    this._description = description;
    this._price = price;
    this._id = id;
  }

  addCar() {
    console.log("agredo al carrito");
  }
}

class Hamburguer extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

class Pizza extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

class Chicken extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

class Meat extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

class Snacks extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

class Drink extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

class Salad extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

class Hotdog extends Food {
  constructor(title, img, description, price, id) {
    super(title, img, description, price, id);
  }
}

export { Hamburguer, Pizza, Chicken, Meat, Snacks, Drink, Salad, Hotdog };
