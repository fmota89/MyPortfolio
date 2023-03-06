let Person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },

  set fullName(value) {
    let parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(Person.fullName);
Person.fullName = 'John Doe';
console.log(Person.fullName);