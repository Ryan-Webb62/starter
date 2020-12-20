'use strict';

const calcTip = (totalBill) => {
  if (totalBill >= 50 && totalBill <= 300) {
    return totalBill * 0.15;
  } else {
    return totalBill * 0.2;
  }
};

// Could have used the ternary operator instead of if
/* 
const calcTip = function(bill) {
  return bill >=50 && bill<=300 ? bill*.15 : bill*.20;
}
 */

const totalCheck = (totalBill, tip) => {
  return totalBill + tip;
};

const bill = [125, 555, 44];
const tips = [];
const total = [];

tips.push(calcTip(bill[0]));
tips.push(calcTip(bill[1]));
tips.push(calcTip(bill[2]));

// could have populated the array directly with calcTip
/* 
const tips = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];

 */
total.push(totalCheck(bill[0], tips[0]));
total.push(totalCheck(bill[1], tips[1]));
total.push(totalCheck(bill[2], tips[2]));

// could have populated the array direcly with totalCheck
/* 
const totals = [totalCheck(bill[0], tips[0]),totalCheck(bill[1], tips[1]),totalCheck(bill[2], tips[2])];

 */
console.log(bill);
console.log(tips);
console.log(total);
