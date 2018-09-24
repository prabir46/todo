var express = require('express');

const api =  express.Router();
const profile = require('./profile/profile')
const auth = require('./auth/index')
const todo = require('./todotask/todo')
const note = require('./notes/note')

api.use('/auth',auth);
api.use('/profile',profile);
api.use('/todo', todo);
api.use('/note', note);

api.get('/',function(req,res) {
    res.json({
        msg: 'mssg from api'
    })
})

module.exports = api;