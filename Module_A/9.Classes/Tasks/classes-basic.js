class Animal {
  constructor(name, age, gender, species, size, color, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.size = size;
    this.color = color;
    this.master = master;
  }
}

const animal1 = new Animal('Fluffy', 3, 'Female', 'Cat', 'Small', 'White', 'John');
const animal2 = new Animal('Buddy', 5, 'Male', 'Dog', 'Large', 'Brown', 'Jane');
const animal3 = new Animal('Tweety', 1, 'Male', 'Bird', 'Small', 'Yellow', 'John');

console.log(animal1);
console.log(animal2);
console.log(animal3);