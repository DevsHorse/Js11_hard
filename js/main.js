let num = 266219,
    multipl = 1;  // переменная которая будет хранить сумму умножения 
// Привожу число в тип строки, что бы разбить его числа на массив
num = num.toString().split(''); 
// Перебираю в цикле каждый элемент массива 
  for (let i = 0; i < num.length; i++) {
    multipl *= num[i]; // К общей сумме произведения примножаю следующее число
  }

console.log(num); // Вывод масива из числа
console.log(multipl); // Результат умножения всех чисел

// Возводим в 3-ю степень 
multipl **= 3;
console.log('multipl в 3 степени: ', multipl);

//Вывод первых 2х цифер числа
console.log(multipl.toString().substring(0, 2));
