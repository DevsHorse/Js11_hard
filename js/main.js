'use strict';

let  div1 = document.createElement('div'),
  div2 = document.createElement('div'),
  body = document.querySelector('body'),
  weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
   'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

body.appendChild(div1);
body.appendChild(div2);
div1.style = 'margin-top: 20px;';
div2.style = 'margin-top: 20px;';

let time = setInterval(function(){
  let date = new Date();

function getEnd(date, type) {
if (type === 'hour') {
  if (date > 1 && date < 5 || date > 21) {
    return date + ' часа';
  } else if (date > 4 && date < 21) {
    return date + ' часов';
  } else {
    return date + ' час';
  }
} else {
  if (date !== 13 && date !== 14 && date !== 12 && (date % 10) > 1 && (date % 10) < 5) {
    if (type === 'min') {
      return date + ' минуты';
    } else {
      return date + ' секунды';
    }
  } else if (date !== 11 && (date % 10) === 1 ) {
    if (type === 'min') {
      return date + ' минута';
    } else {
      return date + ' секунда';
    }
  } else {
    if (type === 'min') {
      return date + ' минут';
    } else {
      return date + ' секунд';
    }
  }
}
}
    
function getZero(date) {
  if (date >= 0 && date < 10) {
    return '0' + date;
  } else {
    return date;
  }
}
    

 div1.textContent = 'Сегодня ' + weekDays[date.getDay()] + ', ' + date.getDate() + ' ' + monthes[date.getMonth()] +
    ' ' + date.getFullYear() + " года, " + getEnd(date.getHours(), 'hour')+ ' ' + getEnd(date.getMinutes(), 'min') + 
    ' ' + getEnd(date.getSeconds());
  
 div2.textContent = getZero(date.getDate()) + "." + getZero(date.getMonth() + 1) +
   "." + date.getFullYear() + " - " + getZero(date.getHours()) + ':' + 
   getZero(date.getMinutes()) + ':' + getZero(date.getSeconds());
}, 1000);