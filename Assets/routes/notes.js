const note = require('express').Router();
const { readFromFile, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

note.get('/', (req, res) => readFromFile('../Assets/db/db.json').then((data) => res.json(JSON.parse(data))));

note.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text} = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text
      };
  
      writeToFile(newNote, '../Assets/db/db.json');
  
      const response = {
        status: 'success',
        body: newFeedback,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting feedback');
    }
  });

  module.exports = note;