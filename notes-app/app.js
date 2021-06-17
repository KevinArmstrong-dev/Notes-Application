const chalk = require('chalk')
const notes = require('./notes.js');

const command  = process.argv[2]
if(command === 'add'){
    const msg = chalk.blue.inverse.bold('Note Added!!');
    console.log('adding notes');
    console.log(msg);
}else if(command === 'remove'){
    console.log('Remove note')
}else{
    console.log('No arg provided Else note');
}

