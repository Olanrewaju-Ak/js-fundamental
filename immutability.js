//Objects
const object = {
  key: 'Value of Key',
  name: 'josh'
};

const copyOfObject = { ...object };

object.title = 'madness';

console.log('object:', object);
console.log('copyOfObject:', copyOfObject);

//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const copyArrayOfNumbers = [...arrayOfNumbers];
arrayOfNumbers.push(67);
console.log(arrayOfNumbers);
console.log(copyArrayOfNumbers);
