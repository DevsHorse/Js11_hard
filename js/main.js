'use strict';

let arr = ['211', '123', '5125', '9675', '425', '2741', '35893'],
    newArr = [];

for (let i = 0; i < arr.length; i++) {
  if ( arr[i].substring(0, 1) === '2' || arr[i].substring(0, 1) === '4' ) {
    newArr.push(arr[i]);
  }
};

console.log(newArr);

// Первый способ с меткой 
function getSimpleNums() {

  firstFor:                         
  for (let i = 2; i <= 100; i++) {  
    for (let k = 2; k < i; k++) {    
      if (i % k === 0) {
        continue firstFor;
      }
    }
    console.log(i + ': ' + 'Делители этого числа - 1 и ' + i); // 
  }
  
};

getSimpleNums();



// Второй способ, без использования метки 
function secondTry() {
  const arr = [];

  for (let i = 2; i < 100; i++) {
    let j = 1;
    let dividers = 0;
      while (j < 100) {
        if (i % j === 0) {
          dividers += 1;
        }
        j++;
      }
    if (dividers === 2) {
      arr.push(i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ': Делители этого числа - 1 и ' + arr[i] +'\n');
  }
};

secondTry();