'use strict';

const calcTip = (totalBill) => {
  if (totalBill >= 50 && totalBill <= 300) {
    return totalBill * 0.15;
  } else {
    return totalBill * 0.2;
  }
};

const calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

const testAverage = [25, 35, 65, 100];

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

// for (let i = 0; i < bills.length; i++) {
//   totals.push(bills[i] + tips[i]);
// }

console.log('*****Bill******');
console.log(bills);

console.log('*****Tip*******');
console.log(tips);

console.log('*****Total*****');
console.log(totals);

console.log(calcAvg(totals));
console.log(calcAvg(tips));
