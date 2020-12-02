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
function foodProccesor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = foodProccesor(5, 0);
console.log(appleJuice);
console.log(foodProccesor(5, 0));
