const { Console } = require('console');
const fs = require('fs');
const chalk = require('chalk')

const getNotes = ()=> {
    return 'Your notes .... goes here'
}

const addNote = function (title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });
    if(duplicateNotes.length == 0){
        notes.push({
            title:title,
            body: body
        });
        saveNotes(notes);
        const msg = 'Note Added'
        console.log(chalk.green(msg));
    }else{
        console.log('Note Title Taken');
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
    const filtered = notes.filter((note) =>{
        return note.title !== title;
    })
    if(filtered.length != 0 ){
        saveNotes(filtered);
        console.log(chalk.green('Note Removed'));
    
        console.log('Note With title '+title+ ' removed');
    }else{
        console.log('Note Not FOUND!');
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote
}