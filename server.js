require('dotenv').config();
const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('./db/db');
const AuthRouter = require('./controllers/user');
const auth = require('./auth/index');
const NoteRouter = require('./controllers/notes');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//Routers
app.get('/', auth, (req, res) => {
    res.json(req.payload);
});

app.use('/auth', AuthRouter)
app.use('/note', NoteRouter)

app.listen(PORT, () => {
    console.log(`server is listening on: ${PORT}`);
});