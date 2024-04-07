// const maskify = function (strg) {
//   let strArr = strg.split('');
//   let masked;
//   for (let i = strArr.length - 4; i < strArr.length - 4; i--) {
//     strArr[i] = '#';
//     console.log(strArr.join(''));
//     masked = strArr.join('');
//   }
//   return masked;
// };

//Nanaya's solution
function maskfy(cc) {
  if (cc.length > 4) {
    return (
      cc
        .slice(0, -4)
        .split('')
        .map((e) => '#')
        .join('') + cc.slice(-4)
    );
  } else {
    return cc;
  }
}

console.log(maskfy('4556364607935616'));
