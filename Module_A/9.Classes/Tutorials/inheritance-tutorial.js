class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log("Grrrrr");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    console.log('The dog barks.');
  }
}

const dog = new Dog("Rex", 3, "German Shepherd");

dog.makeSound();