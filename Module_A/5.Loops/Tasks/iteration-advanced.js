const printNestedArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
    }
  }
}

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

printNestedArray(array);