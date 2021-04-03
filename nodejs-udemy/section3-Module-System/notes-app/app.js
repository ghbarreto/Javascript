const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

yargs.version("1.1.0");

// Add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("My title: ", argv.title, "\n My body: ", argv.body);
  },
});

// Creating remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing the note");
  },
});

// Creating list command
yargs.command({
  command: "list",
  describe: "Listing the notes",
  handler: () => {
    console.log("Listing the notes");
  },
});

// Reading the file
yargs.command({
  command: "read",
  describe: "Reading the file",
  handler: () => {
    console.log("Reading the file");
  },
});

yargs.parse();
