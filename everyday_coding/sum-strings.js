const sumString = function (a, b) {
  //let sum = Number(a) + Number(b);// wont work with big integers
  //let sum = BigInt(a) + BigInt(b); //works
  let sum = +a + +b; //works

  return sum.toString();
};

const sumString2 = function (a, b) {
  let sum = BigInt(a) + BigInt(b); //works

  return sum.toString();
};

console.log(sumString2('123', '456'));
console.log(sumString2('888', '222'));
console.log(sumString2('101', '100'));
