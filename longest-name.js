const instructorWithLongestName = function (instructors) {
  // Put your solution here
  //loop through each element of the array
  // access the name value of each array element and count the number of characters
  // return the element with the largest number of characters.
  let length = -Infinity;
  let longest = "";
  for (const instructor of instructors) {
    if (instructor["name"].length > length) {
      length = instructor["name"].length;
      longest = instructor;
    }
  }
  return longest;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ])
);
