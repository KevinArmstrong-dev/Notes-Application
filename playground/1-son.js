const fs = require('fs');
// const book = {
//     title: 'Crime and pubishment',
//     author:'Fydor'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON); //write to file

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer= fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Kevin',
data.age = 24
const dataStr = JSON.stringify(data);
fs.writeFileSync('1-json.json',dataStr);