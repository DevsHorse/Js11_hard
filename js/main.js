'use strict';

const btn = document.querySelector('.btn');
const title = document.querySelector('.color');
const body = document.querySelector('body');
const autoBtn = document.querySelector('.btn-a');
const stopBtn = document.querySelector('.btn-s');


const getRandomColor = () => {
  const colorLetters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colorLetters[Math.floor(Math.random() * 16)];
  } 
  return color;
};

function auto(arg) {
  let autoPlay = setInterval(() => {
      stopBtn.addEventListener('click', () => clearInterval(autoPlay));
      title.textContent = getRandomColor();
      body.style = `background-color: ${title.textContent};`;
  }, 1000);
}

autoBtn.addEventListener('click', () => auto());

btn.addEventListener('click', () => {
  title.textContent = getRandomColor();
  body.style = `background-color: ${title.textContent};`;
});



