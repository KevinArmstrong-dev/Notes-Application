const chalk = require('chalk');
const yargs= require('yargs');
const notes = require('./notes.js');

const command  = process.argv[2]
console.log(yargs.argv);
if(command === 'add'){
    const msg = chalk.blue.inverse.bold(process.argv[3]+ ' Note Added!!');
    console.log('adding notes');
    console.log(msg);
}else if(command === 'remove'){
    console.log('Remove note')
}else{
    console.log('No arg provided Else note');
}

