let fruits = ["Apple", "Banana", "Cherry", "Apricot", "Blueberry"];

let firstFruit = fruits.findIndex(function (fruit) {
  return fruit[0] === "A";
});

console.log("The first string that starts with 'A' is at index: " + firstFruit);

let hasB = fruits.some(function (fruit) {
  return fruit[0] === "B";
});

console.log("Are some strings start with 'B'? " + hasB);