class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  getAge() {
    console.log(`I am ${this.age} years old`);
  }
}

const person = new Person('John Doe', 30, 'Male');

person.greet();
person.getAge();