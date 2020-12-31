'use strict';

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const summary = (personOne, personTwo) => {
  if (personOne.bmi > personTwo.bmi) {
    return `${personOne.firstName} ${personOne.lastName}'s BMI (${personOne.bmi}) is higher than ${personTwo.firstName} ${personTwo.lastName}'s (${personTwo.bmi}!)`;
  } else if (personTwo.bmi > personOne.bmi) {
    return `${personTwo.firstName} ${personTwo.lastName}'s BMI (${personTwo.bmi}) is higher than ${personOne.firstName} ${personOne.lastName}'s (${personOne.bmi}!)`;
  }
};

console.log(john.calcBMI());
console.log(mark.calcBMI());
console.log(summary(john, mark));
