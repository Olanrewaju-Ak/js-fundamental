const sumBetween = function (a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  const sum = arr.reduce((acc, item) => acc + item);
  return sum;
};

console.log(sumBetween(1, 7));
console.log(sumBetween(1, 1));
