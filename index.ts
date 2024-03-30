#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold.italic`         \t\t"Welcome to  My Number Guessing Game"      `);


const randomNumber = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber);


const answers = await inquirer.prompt([
    {

        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6",

    }
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.bold.italic.greenBright.bgHex("congratulation you guess right number.\n you are qulified next round"));

} else {
    console.log(chalk.bold.italic.bgGray.black("you guess wrong number!\nplz try again"));
}
