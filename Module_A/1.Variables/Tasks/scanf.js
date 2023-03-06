var scanf = require("scanf");

console.log("1. What is your name?");
console.log("2. What is your date of birth?");
console.log("3. What is the city where you live?");

let name = scanf("%s");
let date = scanf("%d-%d-%d");
let city = scanf("%s");

console.log("Your name is: %s", name);
console.log("Your date of birth is: %s", date);
console.log("Your city is: %s]", city);