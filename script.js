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
const jonas = {
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
);
