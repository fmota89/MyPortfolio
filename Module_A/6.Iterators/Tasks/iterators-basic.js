let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubleNumbers);

doubleNumbers.forEach(function (number) {
  console.log(number);
});