#! /usr/bin/env node
import inquirer from "inquirer";
//const randomNumber = 13
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber)
const answer = await inquirer.prompt([
    { name: "guessNumber", type: "number", message: "Guess a number" }
]);
if (answer.guessNumber === randomNumber) {
    console.log("Your answer is correct");
}
else {
    console.log("Your answer is wrong");
}
