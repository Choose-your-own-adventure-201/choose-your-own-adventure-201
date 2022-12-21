'use strict';

// ****** Dom windows ******
let myForm = document.querySelector('form');

/**
 * 
 * @param {} event
 * 
 * Stores user input to local storage and moves to targeted HTML page.
 */
function handleClick(event) {
  event.preventDefault();

  // ****** Stored inputed user name to local storage *****
  let userInput = JSON.stringify(event.target.username.value);
  localStorage.setItem('username', userInput);

  window.location.href = './story.html';
}

// ***** Event Listeners *****
myForm.addEventListener('submit', handleClick);