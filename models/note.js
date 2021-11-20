const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    //username will only show their notes
    username: {type: String, required: true},
    note: {type: String}
}, {timestamps: true});

const Note = model("note", noteSchema);

module.exports = Note;