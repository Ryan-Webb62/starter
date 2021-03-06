'use strict';
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const private = 534; */

// Functions
/* 
function logger() {
  console.log('My name is Jonas');
}

// calling/ invoking/ running the function:
logger();
logger();
logger();
 */

/* 
function foodProccesor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = foodProccesor(5, 0);
console.log(appleJuice);
console.log(foodProccesor(5, 0));
 */

// Function Declarations vs. Expressions

// Function declaration - declared functions can be called before they are declared
/* 
function calcAge1(bithYear) {
  return 2037 - bithYear;
}

const age1 = calcAge1(1991);

// Function expression - must be called after being declared
const calcAge2 = function (bithYear) {
  return 2037 - bithYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);
 */

// Arrow functions
/* 
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); */

// Functions calling other functions
/* 
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 */

// Reviewing Functions

/* const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return `${firstName} retires in ${retirement} years.`;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired `);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
 */

// Arrays
/* 
const friend1 = 'Micheal';
const friend2 = 'Steve';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steve', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years[0]);
// console.log(years[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmen', 2037 - 1991, 'teacher', friends];

console.log(jonas);

// exercise

const calcAge = function (bithYear) {
  return 2037 - bithYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
 */

// Array methods

/* const friends = ['Micheal', 'Steve', 'Peter'];

// Add elements to arrays
const newLength = friends.push('Jay'); // Adds new element to last position of the array

console.log(friends);
console.log(newLength);

friends.unshift('John'); // Adds new element to first position of the array
console.log(friends);

//  Remove elements
friends.pop();
const popped = friends.pop(); // Removes last element
console.log(popped);
console.log(friends);

friends.shift(); // Removes the first element
console.log(friends);

console.log(friends.indexOf('Steve')); // Returns the position of the element in the array
console.log(friends.indexOf('Bob')); // If the element doesn't exsist in the array it will return -1

console.log(friends.includes('Steve')); // uses strict equality to check for element and return T/F
console.log(friends.includes('Bob'));

if (friends.includes('Steve')) {
  console.log('You have a friend named Steve');
} */

// Introduction to Objects
// Basic object structure with key value pairs object literal syntax:
/* 
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
 */

// Dot vs. Bracket Notation
/* const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);

// dot notation
console.log(jonas.lastName);
// bracket notation
console.log(jonas['lastName']);

// using bracket notation you can compute the key value
const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Jonas?  Chose between firstName, lastName, age, job, and friends.'
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    'Wrong request!  Chose between firstName, lastName, age, job, and friends.'
  );
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//  Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
); */

// Object Methods
/* 
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // Calculate the age once and store in the object
  // Must call this function once before this.age is stored in the object
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  summary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old, ${
      this.job
    }, and he ${
      this.hasDriversLicense ? 'has' : 'does not have'
    } a driver's license.`;
  },
};
// Make a method to calculate the age of an object
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

// Use "this" to use the birth year of the object calling the method
// calcAge: function () {
//   return 2037 - this.birthYear;
// },

console.log(jonas.calcAge());
console.log(jonas.summary());
 */

// The for Loop

// For loop keeps running while dontition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
// }

// Looping Arrays, Breaking and Continuing
/* 
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // types[i] = typeof jonasArray[i];
  // Below gives the same result as above

  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1967, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Contunue and break
console.log('----Only Strings-----');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('----Break with Number-----');
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
 */

// Looping Backwards and loops within loops
/* const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
}
 */

// While Loops
/* 
for (let rep = 0; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;

while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
 */

// Array Methods
const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

/* 
// ***FILTER***
//1. Get characters with mass greater than 100
const greater100Characters = characters.filter((character) => {
  return character.mass > 100;
});
console.log(greater100Characters);
// ES6 arrow function allows for this also:
// const greater100Characters = characters.filter(
//   (characters) => character.mass > 100
// );

//2. Get characters with height less than 200
const shorterCharacters = characters.filter(
  (character) => character.height < 200
);
console.log(shorterCharacters);
//3. Get the male characters
const maleCharacters = characters.filter(
  (character) => character.gender === 'male'
);
console.log(maleCharacters);
//4. Get the female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === 'female'
);
console.log(femaleCharacters); 
*/

// ***MAP****
/* 
//1. Get array of all names
const names = characters.map((character) => character.name);
console.log(names);

//2. Get array of all heights
const height = characters.map((character) => character.height);
console.log(height);
//3. Get array of objects with just name and height proprties
const minifiedRecord = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
console.log(minifiedRecord);
//4. Get array of all first names
const firstName = characters.map((character) => character.name.split(' ')[0]);
console.log(firstName);
 */

// ****REDUCE ******

//1 Get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass);
//2 Get the total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
console.log(totalHeight);
//3 Get the total number of characters in characters' names
const charactersByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
console.log(charactersByEyeColor);
//4 Get the total number of characters by eye color
const totalNameCharacter = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);
console.log(totalNameCharacter);
