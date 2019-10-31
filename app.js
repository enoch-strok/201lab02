'use strict';

console.log('proof of life!');

//--------------------------------------------------//
//-----------------In Class Example-----------------//
//--------------------------------------------------//
// var userLike = prompt("do you like stranger things?")

// if(userLike.toLowerCase() === "yes" || userLike === "y") {
// console.log("I like it too");
// } else {
// console.log("You should check it out!");
// }



function appjs() {
//---------------------------------------------------------------//
//-----------------Questions To Be Asked To User-----------------// [DONE]
//---------------------------------------------------------------//
var questionUserName = "What is your name?"

var questionOneBornLocation = "Is Enoch's country of birth Latvia?"
var questionTwoConstructionIndustryYears = "Did Enoch work in the Construction Industry for 5 years?"
var questionThreeWhoPaidForUdemyClasses = "Did Enoch pay for his own Udemy classes?"
var questionFourEmployerClients = "Did Enoch's employers become his clients?"
var questionFiveGoal = "Is Enoch's goal to make a project/task management web app in the future?"

//----------------------------------------------------------------------------//
//-----------------Responses to Answers (Correct & Incorrect)-----------------// [DONE]
//----------------------------------------------------------------------------//
var answerOneBornLocationCorrect = "Correct! Enoch was born in Latvia."
var answerOneBornLocationIncorrect = "Incorrect! Enoch was born in Latvia, the answer was 'Yes'."

var answerTwoConstructionIndustryYearsCorrect = "Correct! Enoch worked in the Construction Industry for 5 years."
var answerTwoConstructionIndustryYearsIncorrect = "Incorrect, Enoch worked in the Construction Industry for 5 years. The correct answer was 'Yes'."

var answerThreeWhoPaidForUdemyClassesCorrect = "Correct! Enoch did not pay for this Udemy Classes. His employer paid for it at Enoch's request."
var answerThreeWhoPaidForUdemyClassesIncorrect = "Incorrect! Enoch did not pay for his own classes. His employer did."

var answerFourEmployerClientsCorrect = "Correct! Enoch's employers hired him as a contractor and became his clients."
var answerFourEmployerClientsIncorrect = "Incorrect! Enoch's employers DID become his clients."

var answerFiveGoalCorrect = "Correct! Enoch's goal is to make a project/task management software in the future."
var answerFiveGoalIncorrect = "Incorrect! Enoch DOES have a goal to make a project/task management web app."

var welcomeMessage = "Welcome to my bio site"
var answerThankYou = "thank you for reading my bio!"

//--------------------------------------------------------//
//-----------------Prompts & Console Logs-----------------// [DONE]
//--------------------------------------------------------//
var promptUserName = prompt(questionUserName)
var promptWelcomeMessage = alert(welcomeMessage + ", " + promptUserName + "!")

//-----------------BornLocation Prompt, If Statment, Console Log [DONE]
var promptOneBornLocation = prompt(questionOneBornLocation)
if (promptOneBornLocation.toLowerCase() === "yes" || promptOneBornLocation === "y") {
    alert(answerOneBornLocationCorrect)
} else {
    alert(answerOneBornLocationIncorrect)
}

// if (promptOneBornLocation.toLowerCase() === "yes" || promptOneBornLocation === "y") {
//     console.log(answerOneBornLocationCorrect)
// } else {
//     console.log(answerOneBornLocationIncorrect)
// }


//-----------------TwoConstructionIndustryYears Prompt, If Statment, Console Log [DONE]
var promptTwoConstructionIndustryYears = prompt(questionTwoConstructionIndustryYears)
if (promptTwoConstructionIndustryYears.toLowerCase() === "yes" || promptTwoConstructionIndustryYears.toLowerCase() === "y") {
    alert(answerTwoConstructionIndustryYearsCorrect)
} else {
    alert(answerTwoConstructionIndustryYearsIncorrect)
}

// if (promptTwoConstructionIndustryYears.toLowerCase() === "yes" || promptTwoConstructionIndustryYears.toLowerCase() === "y") {
//     console.log(answerTwoConstructionIndustryYearsCorrect)
// } else {
//     console.log(answerTwoConstructionIndustryYearsIncorrect)
// }


//-----------------ThreeWhoPaidForUdemyClasses Prompt, If Statment, Console Log [DONE]
var promptThreeWhoePaidForUdemyClasses = prompt(questionThreeWhoPaidForUdemyClasses)
if (promptThreeWhoePaidForUdemyClasses.toLowerCase() === "no" || promptThreeWhoePaidForUdemyClasses.toLowerCase() === "n") {
    alert(answerThreeWhoPaidForUdemyClassesCorrect)
} else {
    alert(answerThreeWhoPaidForUdemyClassesIncorrect)
}

// if (promptThreeWhoePaidForUdemyClasses.toLowerCase() === "yes" || promptThreeWhoePaidForUdemyClasses.toLowerCase() === "y") {
//     console.log(answerThreeWhoPaidForUdemyClassesCorrect)
// } else {
//     console.log(answerThreeWhoPaidForUdemyClassesIncorrect)
// }


//-----------------FourEmployerClients Prompt, If Statment, Console Log [DONE]
var promptFourEmployerClients = prompt(questionFourEmployerClients)
if (promptFourEmployerClients.toLowerCase() === "yes" || promptFourEmployerClients.toLowerCase() === "y") {
    alert(answerFourEmployerClientsCorrect)
} else {
    alert(answerFourEmployerClientsIncorrect)
}

// if (promptFourEmployerClients.toLowerCase() === "yes" || promptFourEmployerClients.toLowerCase() === "y") {
//     console.log(answerFourEmployerClientsCorrect)
// } else {
//     console.log(answerFourEmployerClientsIncorrect)
// }


//-----------------FiveGoal Prompt, If Statment, Console Log [DONE]
var promptFiveGoal = prompt(questionFiveGoal)
if (promptTwoConstructionIndustryYears.toLowerCase() === "yes" || promptTwoConstructionIndustryYears.toLowerCase() === "y") {
    alert(answerFiveGoalCorrect + " " + promptUserName + ", " + answerThankYou)
} else {
    alert(answerFiveGoalIncorrect +  " " + promptUserName + ", " + answerThankYou)
}

// if (promptTwoConstructionIndustryYears.toLowerCase() === "yes" || promptTwoConstructionIndustryYears.toLowerCase() === "y") {
//     console.log(answerFiveGoalCorrect)
// } else {
//     console.log(answerFiveGoalIncorrect)
// }

}
