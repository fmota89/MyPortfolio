let person = {
  name: "John",
  age: 30,
  city: "New York",
  displayInfo: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.displayInfo();