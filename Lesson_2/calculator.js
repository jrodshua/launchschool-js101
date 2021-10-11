const readline = require('readline-sync');

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Welcome to Calculator!`);

// console.log(`What's the first number?`);
// let number1 = readline.question();

// console.log(`What's the second number?`);
// let number2 = readline.question();

// console.log(`What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide`);
// let operation = readline.question();

prompt(`What's the first number?`);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(`Hmm... that doesn't look like a valid number.`);
  number1 = readline.question();
}

prompt(`What's the second number?`);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(`Hmm... that doesn't look like a valid number.`);
  number2 = readline.question();
}

prompt(
  `What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide`
);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(`Must choose 1, 2, 3 or 4`);
  operation = readline.question();
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let output;
if (operation === '1') {
  output = parseInt(number1) + parseInt(number2);
} else if (operation === '2') {
  output = parseInt(number1) - parseInt(number2);
} else if (operation === '3') {
  output = parseInt(number1) * parseInt(number2);
} else if (operation === '4') {
  output = parseInt(number1) / parseInt(number2);
}

console.log(`The result is: ${output}`);
