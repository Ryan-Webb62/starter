'use strict';

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    return console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    return console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    return console.log(
      `No winner the score was ${avgDolphins} vs. ${avgKoalas}`
    );
  }
};

const dolphinAvg1 = calcAverage(44, 23, 71);
const dolphinAvg2 = calcAverage(85, 54, 41);
const koalaAvg1 = calcAverage(65, 54, 49);
const koalaAvg2 = calcAverage(23, 34, 27);

checkWinner(dolphinAvg1, koalaAvg1);
checkWinner(dolphinAvg2, koalaAvg2);
