const chalk = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log("added");
  } else {
    console.log("title taken!");
  }

  saveNotes(notes);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  updatedNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (updatedNotes.length < notes.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(updatedNotes);
  } else console.log(chalk.red.inverse("Note doesn't exist!"));

  //console.log(uninotes);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your Notes!"));
  notes.forEach((element) => {
    console.log(element.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const reqNote = notes.find((note) => note.title === title);
  if (reqNote === undefined)
    console.log(chalk.red.inverse("The note you selected doesnt exist!"));
  else {
    console.log(chalk.green.inverse("The note you selected says:"));
    console.log(reqNote.body);
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
