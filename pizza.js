class Pizza {

  constructor() {
    this.size = 'large';
    this.crust = 'crust';
    this.toppings = ["cheese"];
    // this.price = 10;
    this.sauce = "tomato souce";
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  // calculatePrice() {
  //   const numToppings = this.toppings.length;
  //   const totalPrice = this.price + (numToppings * 2);
  //   console.log(`The price of a ${numToppings}-topping pizza is $${totalPrice}.`);
  //   return totalPrice;
  // }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }
  getSize() {
    return this.size;
  }
}

let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
// pizza1.calculatePrice();
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
pizza1.size = 'medium';
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]
console.log(pizza1);

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
// pizza2.calculatePrice();
pizza2.crust = 'thin crust';
console.log(pizza2.toppings); // ["cheese", "more cheese"];
console.log(pizza2);

let pizza3 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza3.addTopping("bacon");
pizza3.addTopping("peperoni");
// pizza3.calculatePrice();
pizza3.sauce = 'alfredo sauce';
console.log(pizza3.toppings); // ["cheese", "bacon", "peperoni"];
console.log(pizza3);

// const pizza = new Pizza();
// pizza.setSize('m');
// pizza.getSize(); // m

// let pizza = new Pizza();
// pizza.setSize('s');
// console.log(pizza.getSize());

let pizza = new Pizza();
pizza.price;      // instead of getPrice()
// pizza.size = 's'; // instead of setSize(size)
console.log(pizza.size = 's');