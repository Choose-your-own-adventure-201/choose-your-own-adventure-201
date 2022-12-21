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
  let userName = event.target.username.value;

  // ****** Stored inputed user name to local storage *****
  let userInput = JSON.stringify(userName.toUpperCase());
  localStorage.setItem('username', userInput);

  window.location.href = './story.html';
}

// ***** Event Listeners *****
myForm.addEventListener('submit', handleClick);
