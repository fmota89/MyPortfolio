let lettuceCount = (rows, columns) => {
  return rows * columns;
};

let lettuceCost = (rows, columns) => {
  let cost = lettuceCount(rows, columns) * 0.5;
  return cost;
};

console.log(lettuceCost(2, 3));