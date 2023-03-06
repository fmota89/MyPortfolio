const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const key in myObject) {
  console.log(myObject[key]);
}