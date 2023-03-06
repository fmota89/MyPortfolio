const animal = {
  name: "Fido",
  age: 3,
  species: "Dog",

  printNameAndSpecies: function () {
    console.log(`My name is ${this.name} and I am a ${this.species}`);
  }
};

animal.printNameAndSpecies();