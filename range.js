function range(start, end, step) {
  if (
    start === undefined ||
    end === undefined ||
    step === undefined ||
    start > end ||
    step === 0 ||
    step < 0
  ) {
    return [];
  } else {
    let output = [];
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }

    return output;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
