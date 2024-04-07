'use strict';

/* Question 00

Write a converter that will change Celsius to Fahrenheit and back again.

Your function should take in a number, and a boolean. The number will be the temperature in degrees, and the boolean will be whether to convert from C to F (true) or F to C (false). Your answer should be rounded to one decimal place, and returned as a Number, not a string.

If the first argument is not a number, return NaN for the result.

Examples:

- tempConverter(32, true) returns 89.6 as a result
- tempConverter(32, false) returns 0.0 as a result
- tempConverter(98.6, false) returns 37 as a result
- tempConverter("12", <anything>) returns NaN as a result

*/

//change C to F
//input a num + bool
//output to idp and a num
//if nan, output NaN

function tempConverter(num, bool) {
  let converted;

  if (typeof num != 'number') {
    return NaN;
  }
  if (bool === true) {
    converted = (num * 9) / 5 + 32;
  }
  if (bool === false) {
    converted = ((num - 32) * 5) / 9;
  }

  return parseFloat(converted.toFixed(1));
}

// console.log(tempConverter(32, true));
// console.log(tempConverter('12', false));
// console.log(typeof 12);

/* Question 01

Build a function called keyMatcher() which, when passed two objects and a string, will use the string to look up the key-value pair in each object and compare the values. If the two values are explicitly equal to each other, return true, otherwise return false if either the values or not the same, or both objects do not have that key.

Examples:

- keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a') returns true (since the value and type are the exact same)
- keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple") returns false since the values are completely different ("red" vs "green")
- keyMatcher({a: 1, b: 2, c: 3}, {a: "1", b: "2", c: "3"}, 'c') returns false since the values are different types (3 vs "3")
- keyMatcher({a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, 'b') returns false since b is not in the second object

*/

//check obj 1 for key
//check obj for key,
//if either of them has not retur false;
//if they both have and its equal return true

const keyMatcher = (obj1, obj2, key) => {
  if (!obj1[key] || !obj2[key]) {
    return false;
  }
  if (obj1[key] !== obj2[key]) {
    return false;
  }
  if (obj1[key] === obj2[key]) {
    return true;
  }
};

/* Question 02

Implement a function called countWhich() which will take in a list of items and a callback, and it will return the number of elements which return a truthy value from the callback function.

If the first argument is not an array, our function should return false instead of a number.

Examples:

- countWhich([1, 2, 3, 4, 5], function(num) { return (num > 4); }) returns 1 (only matches 5)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit[0] === "a"; }) returns 1 (only matches apple)
- countWhich([10, 20, 30, 40, 50], function(num) { return num % 7 === 0; }) returns 0 (none of the numbers are divisible by 7)
- countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit.length > 5; }) returns 2 ("apple" is shorter than 6 characters)
- countWhich([], function(x) { return x > 10 }) returns 0
- countWhich("This should fail", function(word) { return true; }) returns false (because the first argument is not an array)
*/

//fn
//takes an [],cb
// cb([i]) ==true;
// an array of all cb([i]===true)

const countWhich = (list, cb) => {
  let result = [];
  if (!Array.isArray(list)) {
    return false;
  }
  if (list.length === 0) {
    return 0;
  }

  for (const item of list) {
    if (cb(item) === true) {
      result.push(item);
    }
  }
  return result.length;
};

// console.log(
//   countWhich([1, 2, 3, 4, 5], function (num) {
//     return num > 4;
//   })
// );
// console.log(
//   countWhich([], function (x) {
//     return x > 10;
//   })
// );
// console.log(
//   countWhich('This should fail', function (word) {
//     return true;
//   })
// );

/* Question 03

Implement the function as defined below.

Many programming languages have a range() functionality which will generate an array of numbers that increment from either 0 or 1 up to the number of digits requested. For example, range(10) might return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] or it might return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] depending on the implementation. Some even allow you to control the direction.

Unfortunately, JavaScript doesn't have a built-in range() function, so we want you to build one. Build out the function range() so that it takes three parameters:

1. The number of integers to generate
2. A boolean for whether to skip 0 or not (true: skip zero)
3. A boolean for whether the range should be in reverse/decreasing order or regular/increasing order (true: reverse/decreasing order)

If a non-number is passed in for the first argument, return an empty array.

Pro Tip: Remember to work incrementally. Start off just implementing the false and false scenario for the second and third parameters. In other words, focus on the zero-based, ascending range first. Work on edge cases at the very end (such as passing in a string instead of a number, as shown in the final example below.)

**Examples:**

- range(10, false, false) should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
- range(10, true, false) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- range(10, true, true) should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
- range(10, false, true) should return [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
- range(3, true, false) should return [1, 2, 3]
- range(0, false, <anything>) should return [0]
- range(10) should do the same thing as range(10, false, false)
- range(10, true) should do the same thing as range(10, true, false)
- range("2", <anything>, <anything>) should return []

*/

const range = (a, cond1, cond2) => {
  if (typeof a !== 'number') {
    return [];
  }
  let result = [];
  if (cond1) {
    for (let i = 1; i <= a; i++) {
      result.push(i);
    }
  } else {
    for (let i = 0; i < a; i++) {
      result.push(i);
    }
  }

  if (cond2) {
    let reversedResult = result.resverse();
    return reversedResult;
  } else {
  }
  return result;
};

// console.log(range(10, false, false));
// console.log(range(10, true, false));
// console.log(range('2', true, false));

//start with 0 & 1 in an array
// loop through using quantity while adding them and pushing to array
//return the array

const fibonacci = (n) => {
  let num = [0, 1];
  for (let i = 2; i < n; i++) {
    // num.push(num[num.length - 1] + num[num.length - 2]);
    num[i] = num[i - 1] + num[i - 2];
  }
  return num;
};

console.log(fibonacci(2));
console.log(fibonacci(5));
