'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  div = document.querySelector('.container'),
  currentDate = new Date();

function getDate(date) {
  if (date.getDay() === 0) {
    return week[date.getDay() + 6];
  } else {
    return week[date.getDay() - 1];
  }
}

(function pushWeek() {
  for (let i = 0; i < week.length; i++) {
    let divDay = document.createElement('div');
    div.appendChild(divDay);
    divDay.style = 'margin-bottom: 5px;';
    if (getDate(currentDate) === week[i]) {
      if (getDate(currentDate) === week[5] || getDate(currentDate) === week[6]) {
        divDay.innerHTML = week[i].bold().italics();
      } else {
        divDay.innerHTML = week[i].bold();
      }
    } else if (i === 5 || i === 6) {
      divDay.innerHTML = week[i].italics();
    } else {
      divDay.innerHTML = week[i];
    }
  }
}());
