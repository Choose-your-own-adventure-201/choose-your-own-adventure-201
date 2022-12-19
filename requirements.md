# Software Requirements

## Vision

- What is the vision of this product?
  - Chat bot that prompts the learner with a mix of different kinds of questions, and tracks what they struggle with most (to practice more frequently) vs what they seem to have down (practice less frequently).   
- What pain point does this project solve?
  - It creates benefits to actual learning of doing effortful recall, spaced practiced, with interleaved topics
- Why should we care about your product?
  - Provides and easy and accessible way for Code Fellow students improve their software development skills

## Scope (In/Out)

### IN - What will your product do
  
- Describe the individual features that your product will do
  - chatbot sends the question, the learner could reply via the Slack thread, which could trigger the correct answer to be sent from the chatbot (also on the same thread). The learner can then use a reaction to indicate if they had answered correctly
  - tracks what they struggle with most (to practice more frequently) vs what they seem to have down (practice less frequently).
   - save score for individuals

### OUT - What will your product not do

- Won't work in a group chats - could be a stretch goal later
- Won't have convos outside of scope of questions
- Won't be used to disqualify students for potential jobs in the future!

## Minimum Viable Product

- What will your MVP functionality be?
  - Send questions
  - Inform user if they got the question right or wrong
  - Start/Stop functionality for question prompts 
  - Prompt for specific types of questions
   - Question categories/sub-categories 
- What are your stretch goals?
  - Track answer trends to prompt which problems they need to practice more
  - Giving users the ability to respond with reactions/emojis
  - Report/graph the user could pull for their results
  - Different language bots - (like Java or Python specific bots)
  - Confetti spray when they get a correct question or some sort of flashy effect
  - Fun gif responses when they get a correct or wrong answer 
- What stretch goals are you going to aim for?
  - Track answer trends to prompt which prob they need to practice more
  - Give the user a report/graph of their learning

## Functional Requirements

- List the functionality of your product
  - User @'s/dm our bot
  - Create a thread for them to interact
  - Bot can prompt the user with 'do you want a quiz?' 
  - User will prompt something like 'yes' or 'no'/ 'y' or 'n'
  - Will start a round of 10 multiple choice questions
  - User will have 2 attempts to answer correctly
  - Bot responds with emoji depending on right/wrong answer
  - Bot fires another question automatically
  - After the quiz the Bot responds with 'do you want another quiz?'

## Data Flow 

- Describe the flow of data in your application. 
  - Backend Server: 
   - Using Slack Bot Key to connect to the Slack API
   - Connects to DB for questions and to store responses
  - Front end: Slackbot
   - User would call slackbot that connects to the server  


## Non-Functional Requirements 

- Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.
- Pick 2 non-functional requirements and describe their functionality in your application.

- **Usability** To start the Bot and the quizzes, the bot will prompt the user with a yes or no question. The quiz will also be multiple choice to start. This will make the product user friendly. And this way the user won't get frustrated if their exact answer or typed answer gets rejected.
- **Security** We will keep user's scores safe so that other student's won't have access to their peer's results. We will keep our bot safe from hackers so that people won't be able to control him and make him go rouge. 
