const chalk = require("chalk");
const yargs = require("yargs");
const { readNote } = require("./notes.js");
const notes = require("./notes.js");

//console.log(process.argv);
//create add cmd

yargs.command({
  command: "add",
  describe: "add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove new note",
  builder: {
    title: {
      describe: "Note title to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function () {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "read one note",
  builder: {
    title: {
      describe: "Note title to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    readNote(argv.title);
  },
});
yargs.parse();
