# node-courses
This is a Note Taking application that uses Node.js.
the application runs on the command line and you need to install node in order to run the application.
the application stores all the notes in a JSON file on the file system.

#commands
the commands for the application are:

read command: it needs the title parameter for the command to run.
example: node app.js read --title='test'

list: list all the notes stored on the file system, the command doesn't require any parameter
example: node app.js list

remove: remove a specified note by providing the title parameter:
example: node app.js remove --title='test title'

add: add a note to the file
example: node app.js add --title='title' --body='note body here!!'


