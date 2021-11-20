//require('dotenv').config();
const User = require('../models/user');
const Note = require('../models/note');
const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs');
//const jwt = require("jsonwebtoken");
//const { SECRET } = process.env;
const auth = require('../auth');
//index
router.get('/', auth, async(req, res) => {
    try {
        const { username } = req.payload;
        res.status(200).json(await Note.find({username}))
    }
    catch (error){
        res.status(400).json({error:"home route error"})
    }
})
//create route
router.post('/', auth, async(req, res) => {
    try {
        const { username } = req.payload;
        req.body.username = username;
        res.status(200).json(await Note.create(req.body))
    }
    catch (error){
        res.status(400).json({error:"home route error"})
    }
})
//update
router.put('/:id', auth, async(req, res) => {
    try {
        const { username } = req.payload;
        req.body.username = username;
        const { id } = req.params;
        res.status(200).json(await Note.findByIdAndUpdate(id, req.body, {new: true}))
    }
    catch (error){
        res.status(400).json({error:"home route error"})
    }
})
//delete
router.delete('/:id', auth, async(req, res) => {
    try {
        const { username } = req.payload;
        const { id } = req.params;
        res.status(200).json(await Note.findByIdAndDelete(id))
    }
    catch (error){
        res.status(400).json({error:"home route error"})
    }
})


module.exports = router