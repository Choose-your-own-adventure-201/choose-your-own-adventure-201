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

// Constructor function
function Page(story, option1 = '', option2 = '', name) {
  this.story = story;
  this.option1 = option1;
  this.option2 = option2;
  this.name = name;
}

// Helper function
function storyLine (localName) {
  let page1 = `After a long hard day at a boring office job ${localName} arrives at home. Before walking into the house ${localName} sees a letter in the mailbox, an unusual occurrence as bill day is Thursday not Monday.
  ${localName} goes up to the mailbox and sees that there is a little red letter—quite suspicious.`;

  let page2 = `${localName} decides that it is too suspicious and chooses to go inside. Half way up the drive ${localName} slips and falls head first on a rock.
  No one knows what happened to ${localName}'s body. Did the writer of the letter take it?
   
  THE END`;

  let page3 = `${localName} is too curious not to answer the mail. So ${localName} grabs it out of the mailbox and open it and find seven words.

  ‘Meet me on the docks at twelve’
  
  ${localName} is not that sure whether to go or not because it seems like a stereotypical set up for a camp fire story.  
  
  Drive up to the dock to find out who sent the letter`;

  let page4 = `${localName} decides to go down to the docks to confront the person who wrote the red letter.

  11:59 pm and there is no one there. Where is he? ${localName} thinks, did they forget? Is it a prank?
  
  Then ${localName} hear a car rumble in the distance. A pair of bright yellow headlights pop into existence and they are heading straight at ${localName} and the noise is getting louder.`;

  let page5 = `${localName} decides to fight. The car is getting dangerously close to ${localName}. Five seconds feels like it has been an hour.

  The car is getting nearer and ${localName} is regretting their decision. ${localName} can now see the red hood of the car coming.
  
  Just as ${localName} gets ready for the numbing pain of the impact, it screeches to a stop. A suited man comes out of the car and he is holding a hand gun. “Where is the money?” the man shouts.`;

  let page6 = `${localName} decides to run away. In the distance ${localName} hears a car. Its headlights are getting closer. ${localName} takes a left turn into a dark alleyway and end up behind a small boat house. ${localName} sees the car speed past and ${localName} decides to flank it.

  ${localName} runs onto the main road and lose it. It only took ${localName} ten minutes to find the nearest police station.
  
  Once ${localName} arrives, they quickly tell the story. Thirty minutes later the police sergeant returns looking happy with himself. He tells ${localName} that they were the bait in a drug bust and now ${localName} is a key person in the crime of the year.
  
  
  THE END`;

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
  let opt5 = 'Drive up to the dock to find out who sent you the letter'; // go to page 4

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

function renderPage(){
  storyText.textContent = pageArr[0].story;
  choiceOne.textContent = pageArr[0].option1;
  choiceOne.value = pageArr[0].option1;
  choiceTwo.textContent = pageArr[0].option2;
  choiceTwo.value = pageArr[0].option2;
  pgImg.src = "./img/mailbox.jpg";
}

// Event Handlers
function handleClick(event){
  event.preventDefault();

  switch(selectOpt.value) {
  case optArr[0]: //open mail to page 3
    storyText.textContent = pageArr[2].story;
    choiceOne.textContent = pageArr[2].option1;
    choiceOne.value = pageArr[2].option1;
    choiceTwo.style.visibility = 'hidden';
    // choiceTwo.textContent = '';
    // choiceTwo.value = '';
    pgImg.src = "./img/dark-pier.jpg";
    break;

  case optArr[1]: // go inside, story ends. go to page 2
    storyText.textContent = pageArr[1].story;
    choiceOne.textContent = '';
    choiceOne.value = '';
    choiceTwo.textContent = '';
    choiceTwo.value = '';
    pgImg.src = "./img/driveway.jpg";

    myForm.style.visibility = 'hidden';
    document.querySelector('body').classList.add('bust');
    //alert('Your adventure ends here!  Thanks for playing!');
    break;

  case optArr[2]: // stand your ground go to page 5
    storyText.textContent = pageArr[4].story;
    choiceOne.textContent = pageArr[4].option1;
    choiceOne.value = pageArr[4].option1;
    choiceTwo.textContent = '';
    choiceTwo.value = '';
    pgImg.src = "./img/oncoming-Traffic.jpg";
    break;

  case optArr[3]: // run away as fast as you can, go to page 6
    storyText.textContent = pageArr[5].story;
    choiceOne.textContent = '';
    choiceOne.value = '';
    choiceTwo.textContent = '';
    choiceTwo.value = '';
    pgImg.src = "./img/Undercover-Drug-Busts.jpg";

    myForm.style.visibility = 'hidden';
    document.querySelector('body').classList.add('bust');
    //body.classList.add("bust");
    break;

  case optArr[4]: // stand your ground, go to page 5
    storyText.textContent = pageArr[4].story;
    choiceOne.textContent = pageArr[4].option1;
    choiceOne.value = pageArr[4].option1;
    choiceTwo.style.visibility = 'hidden';
    // choiceTwo.textContent = '';
    // choiceTwo.value = '';
    pgImg.src = "./img/oncoming-Traffic.jpg";
    break;

  case optArr[5]: // runaway, go to page 6
    storyText.textContent = pageArr[5].story;
    choiceOne.textContent = '';
    choiceOne.value = '';
    choiceTwo.textContent = '';
    choiceTwo.value = '';
    pgImg.src = "./img/Undercover-Drug-Busts.jpg";

    myForm.style.visibility = 'hidden';
    //body.classList.add("bust");
    document.querySelector('body').classList.add('bust');
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
