require('dotenv').config();
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, config);

mongoose.connection
    .on('open', () => console.log("Connected"))
    .on('close', () => console.log('closed'))
    .on("error", (err) => console.log(err));

module.exports = mongoose;