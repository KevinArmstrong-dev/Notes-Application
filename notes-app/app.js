//const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js');

// const add = require('./utils.js')

// const sum  = add(4,-2);
// console.log(sum)

console.log(chalk.blue.bgGreen('success'));
console.log(chalk.red('Fail'));
//console.log(chalk.purple('Warning'));
console.log(notes());
//console.log(validator.isEmail('bell@noreply.com'))

