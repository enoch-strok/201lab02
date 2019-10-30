'use strict';

console.log('proof of life!');

// var userLike = prompt("do you like stranger things?")

// if(userLike.toLowerCase() === "yes" || userLike === "y") {
// console.log("I like it too");
// } else {
// console.log("You should check it out!");
// }

//Questions To Be Asked To User
var questionUserName = "What is your name?";
var questionOneBornLocation = "Is Enoch's country of birth Latvia?";
var questionTwoConstructionIndustryYears = "Did Enoch work in the Construction Industry for 5 years?";
var questionThreeWhoPaidForUdemyClasses = "Did Enoch pay for his own Udemy classes?";
var questionFourEmployerClients = "Did Enoch's employers become his clients?";
var questionFiveGoal = "Is Enoch's goal to make a project/task management web app in the future?"

//Responses to Answers (Correct & Incorrect)
var answerOneBornLocationCorrect = "";
var answerOneBornLocationIncorrect = "";

var answerTwoConstructionIndustryYearsCorrect = "";
var answerTwoConstructionIndustryYearsIncorrect = "";

var answerThreeWhoPaidForUdemyClassesCorrect = "";
var answerThreeWhoPaidForUdemyClassesIncorrect = "";

var answerFourEmployerClientsCorrect = "";
var answerFourEmployerClientsIncorrect = "";

var answerFiveGoalCorrect = "";
var answerFiveGoalIncorrect = "";


//Prompts & Console Logs
var promptUserName = prompt(questionUserName);

var promptOneBornLocation = prompt(questionOneBornLocation);
if(promptOneBornLocation.toLowerCase() === "yes" || promptOneBornLocation === "y"){
console.log("That's correct!")
} else {
console.log("That's not correct, the answer was 'Yes', Enoch was born in latvia")
}

var promptTwoConstructionIndustryYears = prompt(questionTwoConstructionIndustryYears);

var promptThreeWhoePaidForUdemyClasses = prompt(questionThreeWhoPaidForUdemyClasses);

var promptFourEmployerClients = prompt(questionFourEmployerClients);

var promptFiveGoal = prompt(questionFiveGoal);

//
