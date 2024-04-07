/*const anArrayMixedElements = [
  1,
  'hello',
  80,
  'world',
  24,
  'javascript',
  6,
  99,
  'LHL',
  12,
  'bootcamp',
  45,
  3
];

const filteredArray = anArrayMixedElements.filter((item) => {
  return typeof item === 'number';
});

console.log(filteredArray);

const higherThanFifty = filteredArray.find((num) => num > 50);

console.log(higherThanFifty);

const sumOfAllNumbers = filteredArray.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log('sumOfAllNumbers :', sumOfAllNumbers);

const listOfBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'fiction',
    published: 1925,
    pages: 180
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'fiction',
    published: 1951,
    pages: 224
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'fiction',
    published: 1960,
    pages: 281
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'fiction',
    published: 1949,
    pages: 328
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    genre: 'fiction',
    published: 1968,
    pages: 210
  }
];

function findLongestBookPublishedBefore(year, books) {
  const filteredBooks = books.filter((book) => book.published < year);
  const longestBook = filteredBooks.reduce((acc, cv) => (cv.pages > acc.pages ? cv : acc));
  return { title: longestBook.title, author: longestBook.author };
}

console.log(findLongestBookPublishedBefore(1960, listOfBooks));

*/

const students = [
  {
    name: 'Ankit',
    age: 22,
    grade: 85,
    email: 'ankit@example.com',
    phone: '555-555-5555',
    graduated: true
  },
  {
    name: 'Kayla',
    age: 28,
    grade: 92,
    email: 'kayla@example.com',
    phone: '555-555-5555',
    graduated: false
  },
  {
    name: 'Charina',
    age: 19,
    grade: 89,
    email: 'charina@example.com',
    phone: '555-555-5555',
    graduated: true
  }
];
const graduatedStudents = (students) => {
  let result = [];
  for (const student of students) {
    const { name, email, graduated } = student;
    let negative = `${name} has not graduated yet, no diploma will be sent.`;
    let positive = `${name} has graduated and their diploma will be sent to ${email}.`;
    graduated ? result.push(positive) : result.push(negative);
  }
  return result;
};

console.log(graduatedStudents(students));
