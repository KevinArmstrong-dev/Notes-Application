const fs = require('fs');

const getNotes = ()=> {
    return 'Your notes .... goes here'
}

const addNote = function (title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    if(duplicateNotes.length == 0){
        notes.push({
            title:title,
            body: body
        });
        saveNotes(notes);
        console.log('Note Added');
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}