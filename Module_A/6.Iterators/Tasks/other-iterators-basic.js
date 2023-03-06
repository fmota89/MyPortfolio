let numbers = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];

let firstNegativeNumber = numbers.find(function (number) {
  return number < 0;
});

console.log(firstNegativeNumber);

let areAllPositive = numbers.every(function (number) {
  return number > 0;
});

console.log("Are all numbers positive? " + areAllPositive);