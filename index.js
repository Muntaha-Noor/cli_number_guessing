#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(`Congratulations! you guessed right number.`);
}
else {
    console.log("You guess wrong number");
}
;
