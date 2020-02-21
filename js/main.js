'use strict';


const searchPolindrome = (gridedString, median) => {

    const length = (gridedString.length) - 1;
    let i = median - 1;

    //Перебор, сравнение боковых значений от каждой медианы. 
    for ( let j = median + 1; i > 0 && j < length; i--, j++ ) {
       if ( gridedString[i] !== gridedString[j] ) {
          return median - i;
       }
    }
    return median - i;
};
  
const whatLongestPolindrome = str => {
    const gridString = ['#'];
    //Берем строку, и добавляем с обоих сторон символов решетку
    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i] !== ' ' ) {
            gridString.push(str[i], '#');
        }
    }

    // Вычисляем радиусы всех возможных полиндромов от каждого символа
    const radius = [];
    for ( let i = 0; i < gridString.length; i++ ) {
        radius[i] = searchPolindrome(gridString, i);
    }

    const writeFinalString = () => {
        //Находим индекс и радиус медианы самого длинного полиндрома
        let count = 0;
        let index = 0;
        let newString = '';

        radius.forEach( (item, i) => {
            if ( radius[item] > 0 ) {
                if ( count < item ) {
                    count = item;
                    index = i;
                }
            }
        });

        //Записываем левую сторону от мединаы в строку
        for ( let i = index - 1; i > index - count; i-- ) {
            newString += gridString[i];
        }

        //Переворот первой строки
        newString = newString.split('').reverse().join('');

        //Добавляем медиану + правую сторону от медианы
        for ( let i = index; i < index + count; i++ ) {
            newString += gridString[i];
        }

        //Убираем решетки, приводим строку в нормальный вид 
        let longestPolindrome = '';

        newString.split('').forEach( item => {
            if ( item !== '#' ) {
                longestPolindrome += item;
            }
        });
        
        return console.log(longestPolindrome);
    };

    writeFinalString();

};

whatLongestPolindrome('fffkffgffkfdk');
