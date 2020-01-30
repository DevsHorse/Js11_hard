let userAnswer = prompt('Введите текст', 'Что ж там такое интересное я написал прям ужас непонятно');

function getString(string) {
 string = string.trim();

  if (typeof(string) !== 'string'){
    alert('Значение - не строка!');
  } else if ( string.length > 30 ) {
    string = string.substring(0, 30).trim() + '...'; 
  } 

  return string;
};


console.log('Результат: ', getString(userAnswer));
