'use strict';

// Globals
let storyArr = [];
let optArr = [];
let pageArr = [];

// Constructor function
function Story(name) {
  this.name = name;
}

function Page(story, option1 = '', option2 = '', name) {
  this.story = story;
  this.option1 = option1;
  this.option2 = option2;
  this.name = name;
} 

// Helper function
function storyLine () {
  let page1 = `After a long hard day at a boring office job ${this.name} arrives at home. Before walking into the house ${this.name} sees a letter in the mailbox, an unusual occurrence as bill day is Thursday not Monday.
 
  ${this.name} goes up to the mailbox and sees that there is a little red letter—quite suspicious.`;

  let page2 = `${this.name} decides that it is too suspicious and chooses to go inside. Half way up the drive ${this.name} slips and falls head first on a rock.

  No one knows what happened to ${this.name}'s body. Did the writer of the letter take it?
   
  THE END`;

  let page3 = `${this.name} is too curious not to answer the mail. So ${this.name} grabs it out of the mailbox and open it and find seven words.

  ‘Meet me on the docks at twelve’
  
  ${this.name} is not that sure whether to go or not because it seems like a stereotypical set up for a camp fire story.  
  
  Drive up to the dock to find out who sent the letter`;

  let page4 = `${this.name} decides to go down to the docks to confront the person who wrote the red letter.

  11:59 pm and there is no one there. Where is he? ${this.name} thinks, did they forget? Is it a prank?
  
  Then ${this.name} hear a car rumble in the distance. A pair of bright yellow headlights pop into existence and they are heading straight at ${this.name} and the noise is getting louder.`;

  let page5 = `${this.name} decides to fight. The car is getting dangerously close to ${this.name}. Five seconds feels like it has been an hour.

  The car is getting nearer and ${this.name} is regretting their decision. ${this.name} can now see the red hood of the car coming.
  
  Just as ${this.name} gets ready for the numbing pain of the impact, it screeches to a stop. A suited man comes out of the car and he is holding a hand gun. “Where is the money?” the man shouts.`;

  let page6 = `${this.name} decides to run away. In the distance ${this.name} hears a car. Its headlights are getting closer. ${this.name} takes a left turn into a dark alleyway and end up behind a small boat house. ${this.name} sees the car speed past and ${this.name} decides to flank it.

  ${this.name} runs onto the main road and lose it. It only took ${this.name} ten minutes to find the nearest police station.
  
  Once ${this.name} arrives, they quickly tell the story. Thirty minutes later the police sergeant returns looking happy with himself. He tells ${this.name} that they were the bait in a drug bust and now ${this.name} is a key person in the crime of the year.
  
  
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
};

function pages() {
  pageArr.push(new Page(storyArr[0], optArr[0], optArr[1], page1));
  pageArr.push(new Page(storyArr[1], page2));
  pageArr.push(new Page(storyArr[2], optArr[2], page3));
  pageArr.push(new Page(storyArr[3], optArr[3], optArr[4], page4));
  pageArr.push(new Page(storyArr[4], optArr[5], page5));
  pageArr.push(new Page(storyArr[5], page6));
}


