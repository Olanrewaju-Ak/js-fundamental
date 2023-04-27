const moves = ["north", "north", "west", "west", "north", "east", "north", "west"];
// loop theough the moves and sort the moves
// north evaluates to +1, south to -1, west to -1 and east to  +1
//split the moves into two arrays vertical and horizontal and reduce each.
//final move = [horizontal, vertical]
function finalPosition(array) {
  let currentPosition = [0, 0];

  for (const move of array) {
    if (move === "north") {
      currentPosition[1]++;
    } else if (move === "south") {
      currentPosition[1]--;
    } else if (move === "east") {
      currentPosition[0]++;
    } else {
      currentPosition[0]--;
    }
  }
  console.log(currentPosition);
  return currentPosition;
}

finalPosition(moves);

function ageCalculator(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  const ageDeclaration = name + " is " + age + " years old.";

  return ageDeclaration;
}
console.log(ageCalculator("Miranda", 1983, 2015));
