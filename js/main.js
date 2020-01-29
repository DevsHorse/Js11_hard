let userAnswer = getString(prompt('Введите текст', 'Что ж там такое интересное я написал прям ужас непонятно'));

function getString(string) {

  let stringCase;

  if (typeof(string) !== 'string'){
    alert('Значение - не строка!');
  } else {
    stringCase = string.trim();
    if (string.length > 29) {
      stringCase = stringCase.substring(0, 29).trim() + '...';  // Второй trim что бы не было пробела между точками и текстом
    } 
  }
  return stringCase;
};

console.log('userAnswer: ', userAnswer);
