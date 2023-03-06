let person = {
  name: "John",
  age: 30,
  car: {
    brand: "Ford",
    model: "Mustang",
    year: 1969
  }
};

let name = person.name;
let age = person.age;
let car = person.car;
let brand = person.car.brand;
let model = person.car.model;
let year = person.car.year;

console.log(name);
console.log(age);
console.log(car);
console.log(brand);
console.log(model);
console.log(year);