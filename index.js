'use strict'
var numbersAr = [25000, 5000, 40000, 40000];
var winner = 0;
for ( var value of numbersAr) {
    if (winner < value) {
        winner = value;
    }
}
console.log('Лучший балл: ' + winner);

numbersAr.sort(function(a,b){ 
  return b - a;
});

var averageMark = Math.trunc((numbersAr[0] + numbersAr[1] + numbersAr[2]) / 3);
console.log('Средний балл(ТОП-3): ' + averageMark);
