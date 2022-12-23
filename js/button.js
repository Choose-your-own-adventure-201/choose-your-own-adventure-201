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
  let capitalized = userName.charAt(0).toUpperCase() + userName.slice(1);

  // ****** Stored inputed user name to local storage *****
  let userInput = JSON.stringify(capitalized);
  localStorage.setItem('username', userInput);

  window.location.href = './story.html';
}

// ***** Event Listeners *****
myForm.addEventListener('submit', handleClick);
