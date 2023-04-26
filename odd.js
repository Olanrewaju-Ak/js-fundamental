// function isOdd(num) {
// 	return num % 2 !== 0;
// }
// console.log("3 is odd: " + isOdd(3));
// console.log("8 is odd: " + isOdd(8));

const stations = [
	["Big Bear Donair", 10, "restaurant"],
	["Bright Lights Elementary", 50, "school"],
	["Moose Mountain Community Centre", 45, "community centre"]
];

function chooseStations() {
	let goodStations = [];
	for (const station of stations) {
		const size = station[1];
		const type = station[2];

		if (size >= 20) {
			if (type === "school" || "community centre") {
				goodStations.push(station[0]);
			}
		}
	}
	return goodStations;
}

console.log(chooseStations(stations));
