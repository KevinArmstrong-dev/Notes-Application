const validator = require('validator')
const notes = require('./notes.js');

// const add = require('./utils.js')

// const sum  = add(4,-2);
// console.log(sum)


console.log(notes());
console.log(validator.isEmail('bell@noreply.com'))

