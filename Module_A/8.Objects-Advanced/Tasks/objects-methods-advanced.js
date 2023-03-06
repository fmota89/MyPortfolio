const car = {
  brand: "Ford",
  model: "Mustang",
  year: 1969,
  color: "red",
  price: 10000,

  printBrand: function () {
    console.log("Car brand: " + this.brand);
  },

  printPrice: function () {
    console.log(`Car price: ${this.price}`);
  }
};

car.printBrand();
car.printPrice();