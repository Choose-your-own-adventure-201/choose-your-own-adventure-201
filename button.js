'use strict';
console.log('Hello World');

// Dom windows

let myInput = document.getElementById('username');
let startBtn = document.getElementById('btnStart');

function handleClick(event) {
  // let userInput = JSON.stringify(event.target.title);
  let userInput = event.target.username.value;
  console.log(userInput);
  // localStorage.setItem('name', userInput);
}

//TODO: ***** Executable *****

//TODO: ***** Event Listeners *****

startBtn.addEventListener('click', handleClick);
