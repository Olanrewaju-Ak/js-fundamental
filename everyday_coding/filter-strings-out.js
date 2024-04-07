//a function that takes in an array and returns an array of just numbers with the strings filtered out
const filterString = function (array) {
  let result = [];
  for (item of array) {
    if (typeof item === 'number') {
      result.push(item);
    }
  }
  return result;
};
const filterString2 = function (array) {
  const isInt = array.filter((val) => {
    return Number.isInteger(val);
  });

  return isInt;
};

// filter_list([1, 2, 'a', 'b']) == [1, 2];
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15];
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123];

console.log(filterString2([1, 2, 'a', 'b']));
console.log(filterString2([1, 'a', 'b', 0, 15]));
console.log(filterString2([1, 2, 'aasf', '1', '123', 123]));
