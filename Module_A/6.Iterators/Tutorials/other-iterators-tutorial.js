const fruits = ["apple", "orange", "banana", "strawberry", "pineapple"];

const index = fruits.findIndex((fruit) => {
  return fruit === "banana";
});

console.log(index);