#! /usr/bin/env node
import inquirer from "inquirer";
let result = await inquirer.prompt([
    { name: "firstNumber", type: "number", message: "Enter first number" },
    { name: "secondNumber", type: "number", message: "Enter second number" },
    { name: "operator", type: "list", message: "Select operator", choices: ["Add", "Subtract", "Multiply", "Divide", "Modulus"] }
]);
if (result.operator === "Add") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtract") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiply") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "Divide") {
    console.log(result.firstNumber / result.secondNumber);
}
else if (result.operator === "Modulus") {
    console.log(result.firstNumber % result.secondNumber);
}
else
    (console.log("Enter valid operator"));
