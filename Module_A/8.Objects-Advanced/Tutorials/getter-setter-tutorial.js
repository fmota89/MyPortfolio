let person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

console.log(person.fullName);