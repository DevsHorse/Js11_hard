let lang = prompt('Введите ru или en');
let ruDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let enDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Сначала валидация от лишних вводов 
if ( lang === 'ru' || lang === 'en' ) {
  // Способ через if
  if ( lang === 'ru' ) {
    console.log(ruDays.join(' '));
  } else {
    console.log(enDays.join(' '));
  } 
  //Способ через switch
  switch ( lang ) {
    case 'ru':
      console.log(ruDays.join(' '));
      break;
    case 'en':
      console.log(enDays.join(' '));
      break;
  } 
  // Способ вывода через массив 
  let daysArray = new Map([
    ['ru', 'Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье'],
    ['en', 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday']
  ]);

  console.log(daysArray.get(lang));


} else {
  console.log('Неверно введены данные, попробуйте еще раз');
}



// Задание 2 
let namePerson = prompt('Как тебя зовут?').toLowerCase();

namePerson === 'артем' ||
namePerson === 'артём' ? console.log('Директор') : 
namePerson === 'максим' ? console.log('Преподаватель') :
console.log('Студент');

