'use strict';

// Globals
let storyArr = [];
let optArr = [];
let pageArr = [];

// Dom Window
let choiceOne = document.getElementById('option1');
let choiceTwo = document.getElementById('option2');
let storyText = document.getElementById('story-text');
let myForm = document.querySelector('form');
let selectOpt = document.getElementById('options');
let optBtn = document.getElementById('options-btn');
let pgImg = document.getElementById('page-image');
let body = document.getElementById('bust-body');
let pLightImg1 = document.getElementById('cop-lights-1');
let pLightImg2 = document.getElementById('cop-lights-2');
let audio1 = new Audio('./audio/page_1.wav');
let audio2 = new Audio('./audio/page_2.wav');
let audio3 = new Audio('./audio/page_3.wav');
let audio4 = new Audio('./audio/seagulls.wav');
let audio5 = new Audio('./audio/page_5.wav');
let audio6 = new Audio('./audio/page_6.mp3');


// Constructor function
function Page(story, option1 = '', option2 = '', name) {
  this.story = story;
  this.option1 = option1;
  this.option2 = option2;
  this.name = name;
}

// Helper function
function storyLine(localName) {
  let page1 = `After a long hard day at a boring office job ${localName} arrives at home. Before walking into the house, ${localName} sees a letter in the mailbox, an unusual occurrence as bill day is Thursday not Monday.  ${localName} goes up to the mailbox and sees that there is a little red letter... quite suspicious.`;

  let page2 = `${localName} decides that it is too suspicious and chooses to go inside. Half way up the drive ${localName} slips and falls head first on a rock.  No one knows what happened to ${localName}'s body. Did the writer of the letter take it?  THE END`;

  let page3 = `${localName} is too curious not to answer the mail. So ${localName} grabs it out of the mailbox and opens it to find seven words, ‘Meet me on the docks at twelve.’  ${localName} is not that sure whether to go or not because it seems like a stereotypical set up for a camp fire story.`;

  let page4 = `${localName} decides to go down to the docks to confront the person who wrote the red letter.  11:59 pm and there is no one there. Where is he? ${localName} thinks, did they forget? Is it a prank?  Then ${localName} hears a car rumble in the distance. A pair of bright yellow headlights pop into existence and they are heading straight at ${localName}, the engine noise getting louder.`;

  let page5 = `${localName} decides to fight. The car is getting dangerously close. Five seconds feels like an eternity.  The car is getting nearer and ${localName} is regretting a rash decision. ${localName} can now clearly see the red hood of the car coming.  Just as ${localName} is getting ready for the numbing pain of the impact, the car screeches to a stop. A suited man leaps out of the car brandishing a hand gun. “Where is the money?” the man shouts.`;

  let page6 = `Seeing the gun, ${localName} decides to run away. In the distance ${localName} hears a car. Its headlights are getting closer. ${localName} takes a left turn into a dark alleyway and ends up behind a small boat house. ${localName} sees the car speed past and decides to flank it.  ${localName} runs onto the main road and loses it. It only took ${localName} ten minutes to find the nearest police station.  ${localName} arrives at the police station and quickly tells the story. Thirty minutes later the police sergeant returns looking happy with himself. He tells ${localName} that they were the bait in a drug bust and now ${localName} is a key person in the crime of the year.  THE END`;

  storyArr.push(page1, page2, page3, page4, page5, page6);
}

function options() {
  // page one options
  let opt1 = 'Open mail'; // go to page 3
  let opt2 = 'Go inside'; // end

  // page four options
  let opt3 = 'Stand your ground'; // go to page 5
  let opt4 = 'Run away as fast as you can'; // go to page 6

  // page three option
  let opt5 = 'Drive up to the dock to find out who sent the letter'; // go to page 4

  //page five option
  let opt6 = 'Run away'; // got to page 6

  optArr.push(opt1, opt2, opt5, opt3, opt4, opt6);
}

function pages() {
  pageArr.push(new Page(storyArr[0], optArr[0], optArr[1], 'page1'));
  pageArr.push(new Page(storyArr[1], 'page2'));
  pageArr.push(new Page(storyArr[2], optArr[2], 'page3'));
  pageArr.push(new Page(storyArr[3], optArr[3], optArr[4], 'page4'));
  pageArr.push(new Page(storyArr[4], optArr[5], 'page5'));
  pageArr.push(new Page(storyArr[5], 'page6'));
}

function renderPage() {
  storyText.textContent = pageArr[0].story;
  choiceOne.textContent = pageArr[0].option1;
  choiceOne.value = pageArr[0].option1;
  choiceTwo.textContent = pageArr[0].option2;
  choiceTwo.value = pageArr[0].option2;
  pgImg.src = './img/empty-mailbox-blue-removebg-preview.png';
  audio1.play();
}

// Event Handlers
function handleClick(event) {
  event.preventDefault();
  audio1.pause();

  switch (selectOpt.value) {
  case optArr[0]: //open mail to page 3
    storyText.textContent = pageArr[2].story;
    choiceOne.textContent = pageArr[2].option1;
    choiceOne.value = pageArr[2].option1;
    choiceTwo.style.visibility = 'hidden';
    audio3.play();

    pgImg.src = './img/dark-pier.jpg';
    break;

  case optArr[1]: // go inside, story ends. go to page 2
    storyText.textContent = pageArr[1].story;
    choiceOne.textContent = '';
    choiceOne.value = '';
    choiceTwo.textContent = '';
    choiceTwo.value = '';
    pgImg.src = './img/driveway.jpg';
    audio2.play();

    myForm.style.visibility = 'hidden';
    document.querySelector('body').classList.add('bust');
    break;

  case optArr[2]: // drive down to dock page 4
    storyText.textContent = pageArr[3].story;
    choiceOne.textContent = pageArr[3].option1;
    choiceOne.value = pageArr[3].option1;
    // console.log(pageArr[3].option2);
    choiceTwo.textContent = pageArr[3].option2;
    choiceTwo.value = pageArr[3].option2;
    // console.log(choiceTwo.textContent);
    choiceTwo.style.visibility = 'visible';
    pgImg.src = './img/Pier-with-car.jpg';
    audio3.pause();
    audio4.play();
    break;

  case optArr[3]: // stand your ground, go to page 5
    storyText.textContent = pageArr[4].story;
    choiceOne.textContent = pageArr[4].option1;
    choiceOne.value = pageArr[4].option1;
    choiceTwo.style.visibility = 'hidden';
    // choiceTwo.textContent = '';
    // choiceTwo.value = '';
    pgImg.src = './img/oncoming-Traffic.jpg';
    audio4.pause();
    audio5.play();
    console.log(optArr[3]);

    break;

  case optArr[4]: // run away as fast as you can, go to page 6
    storyText.textContent = pageArr[5].story;
    choiceOne.textContent = '';
    choiceOne.value = '';
    choiceTwo.textContent = '';
    choiceTwo.value = '';
    audio4.pause();
    audio5.pause();
    audio6.play();

    pgImg.src = './img/Undercover-Drug-Busts.jpg';

    myForm.style.visibility = 'hidden';
    document.querySelector('body').classList.add('bust');
    break;

  case optArr[5]: // runaway, go to page 6
    storyText.textContent = pageArr[5].story;
    choiceOne.textContent = '';
    choiceOne.value = '';
    choiceTwo.textContent = '';
    choiceTwo.value = '';

    pgImg.src = './img/Undercover-Drug-Busts.jpg';

    myForm.style.visibility = 'hidden';
    document.querySelector('body').classList.add('bust');
    audio4.pause();
    audio5.pause();
    audio6.play();
    pLightImg1.src = './img/police-lights.gif';
    pLightImg1.parentElement.style.animationName = 'fadeIn';
    pLightImg2.src = './img/police-lights.gif';
    pLightImg2.parentElement.style.animationName = 'fadeIn';

    break;

  default:
    console.log('No choice made');
  }


}
// Executable code
let storeName = localStorage.getItem('username');
let parseName = JSON.parse(storeName);


storyLine(parseName);
options();
pages();
renderPage();

myForm.addEventListener('submit', handleClick);
