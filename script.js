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
