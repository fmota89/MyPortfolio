function createPerson(name, age, car) {
  return {
    name: name,
    age: age,
    car: car
  };
}

let person1 = createPerson("John", 30, "Ford");
let person2 = createPerson("Jane", 25, "BMW");
let person3 = createPerson("Peter", 27, "Audi");

console.log(person1);
console.log(person2);
console.log(person3);