// function isPrime(integer) {
// 	if (integer % 2 === 0) {
// 		console.log("integer is divisible by 2");
// 		return false;
// 	} else {
// 		console.log("integer is not divisible by 2");
// 		return true;
// 	}
// }
// console.log(isPrime(4));
// console.log(isPrime(11));

function isPrime(integer) {
	for (var x = 2; x < integer; x++) {
		if (integer % x === 0) {
			console.log(integer + " is divisible by " + x);
			return false;
		}
	}
	return true;
}
console.log(isPrime(21));
