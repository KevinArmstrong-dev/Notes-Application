const { Console } = require('console');
const fs = require('fs');
const chalk = require('chalk')

const getNotes = ()=> {
    return 'Your notes .... goes here'
}

const addNote = function (title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length == 0){
        notes.push({
            title:title,
            body: body
        });
        saveNotes(notes);
        const msg = 'Note Added'
        console.log(chalk.green.inverse(msg));
    }else{
        console.log(chalk.orange.inverse('Note Title Taken'));
    }

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeNote=(title)=>{
    const notes =loadNotes();
    const filtered = notes.filter((note) => note.title !== title)
    if(filtered.length  < notes.length ){
        saveNotes(filtered);
        console.log(chalk.green.inverse('Note Removed'));
    
        console.log('Note With title '+title+ ' removed');
    }else{
        console.log(chalk.red.inverse('Note Not FOUND!'));
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    loadNotes:loadNotes
}