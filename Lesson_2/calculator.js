const readline = require('readline-sync');

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

console.log('Welcome to Calculator!');

console.log(`What's the first number?`);
let number1 = readline.question();

console.log(`What's the second number?`);
let number2 = readline.question();

console.log(`What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide`);
let operation = readline.question();

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