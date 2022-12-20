'use strict';
console.log('Hello World');

// Dom windows

let myInput = document.getElementById('username');
let startBtn = document.getElementById('btnStart');

function handleClick(event) {
  event.preventDefault();
  // let userInput = JSON.stringify(myInput.value);
  // localStorage.setItem('name', userInput);

  window.location.href = './story.html';
}

function handleInput()
{
  let userInput = JSON.stringify(myInput.value);
  localStorage.setItem('name', userInput);
}


//**************Executable*******

//***** Event Listeners *****
myInput.addEventListener('input', handleInput);
startBtn.addEventListener('click', handleClick);
