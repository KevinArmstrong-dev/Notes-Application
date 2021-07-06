const { Console } = require('console');
const fs = require('fs');
const chalk = require('chalk')

const addNote = function (title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    // undefined will return undefined if no match is found
    //find is more effecient than using filter since find sstops on the first occurence
    const duplicateNote = notes.find((note) => note.title === note.title); 
    if(!duplicateNote){
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

const listNotes = () =>{
    loadNotes().forEach(element => {
        console.log(chalk.green('title: ')+element.title+ " body: "+element.body);
    });;
}

const readNote = (title) => {
    const notes = loadNotes();
    const Foundnote = notes.find((note)=> note.title === title);

    if(Foundnote){
        console.log(
            chalk.green('Note Title') + ': '+Foundnote.title+ ' '+
            chalk.green('Note Body')+ ': '+ Foundnote.body
        );
    }else{
        console.log(chalk.red.inverse('Note Title Not Found!'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}