const sumLargestNumbers = function (data) {
  // let init = data.sort((a, b) => {
  //   return a - b;
  // });
  // return init[init.length - 1] + init[init.length - 2];
  let largest1 = data[0];
  let largest2 = data[1];

  if (largest1 < largest2) {
    let temp = largest1;
    largest1 = largest2;
    largest2 = temp;
  }

  for (let i = 2; i < data.length; i++) {
    if (data[i] > largest1) {
      largest2 = largest1;
      largest1 = data[i];
    } else if (data[i] > largest2) {
      largest2 = data[i];
    }
  }
	
  return largest1 + largest2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
