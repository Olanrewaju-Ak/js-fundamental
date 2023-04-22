const raining = false;
const cold = false;

if (raining) {
	console.log("Don't forget your umbrella!");
}

if (cold) {
	console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

const temperature = 19;

if (temperature < 0) {
	console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
	console.log("Short sleeves won't cut it!");
} else {
	console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const whichSchool = function (age) {
	if (age < 13) {
		return "Elementary School";
	} else if (age >= 13 && age <= 18) {
		return "Secondary School";
	} else {
		return "Lighthouse Labs";
	}
};
console.log(whichSchool(14));

var num = 99;

while (num >= 1) {
	// check value of num
	// print lyrics using num
	// don't forget to check pluralization on the last line!
	if (num === 1) {
		console.log(
			num +
				" bottle of juice on the wall! " +
				num +
				" bottle of juice! Take one down, pass it around..." +
				(num - 1) +
				" bottles of juice on the wall! "
		);
	} else if (num === 2) {
		console.log(
			num +
				" bottles of juice on the wall! " +
				num +
				" bottles of juice! Take one down, pass it around..." +
				(num - 1) +
				" bottle of juice on the wall! "
		);
	} else {
		console.log(
			num +
				" bottles of juice on the wall! " +
				num +
				" bottles of juice! Take one down, pass it around..." +
				(num - 1) +
				" bottles of juice on the wall! "
		);
	}
	// decrement num
	num -= 1;
}
