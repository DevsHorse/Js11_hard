'use strict';

let arr = ['211', '123', '5125', '9675', '425', '2741', '35893'],
    newArr = [];

for (let i = 0; i < arr.length; i++) {
  if ( arr[i].substring(0, 1) === '2' || arr[i].substring(0, 1) === '4' ) {
    newArr.push(arr[i]);
  }
};

console.log(newArr);


function getSimpleNums() {

  firstFor:                         // метка первого цикла 
  for (let i = 2; i <= 100; i++) {  // перебираем числа до 100 
    for (let k = 2; k < i; k++) {   // делим каждое число из 1 цикла на все предыдущие в поисках делителя 
      if (i % k === 0) {
        continue firstFor;          // запускаем следующую итерацию 1 цикла , что бы не выводить не простое число
      }
    }
    console.log(i + ': ' + 'Делители этого числа - 1 и ' + i); // 
  }
  
};

getSimpleNums();