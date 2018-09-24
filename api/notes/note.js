var express = require('express');

const note = express.Router();
const noteAddModel = require('../../model/note');

note.get('/', (req, res) => {
    res.json({
        alert: "we are in task"
    }); 
});
note.get('/alltitle/:id', (req,res) => {
    noteAddModel.find({user_id: req.params.id}, function (err, allnote) {
        if (!err) {
            res.json(alltitle);
        } else {
            res.json({
                status: 0,
                msg: 'Data not Found.'
            })
        }
    });
})
note.get('/allnote/:id', (req, res) => {
    noteAddModel.find({user_id: req.params.id}, function (err, allnote) {
        if (!err) {
            res.json(allnote);
        } else {
            res.json({
                status: 0,
                msg: 'Data not Found.'
            })
        }
    });
});
note.post('/addnote', (req, res) => {
    let newnote = new noteAddModel({
        user_id: req.body.user_id,
        desc: req.body.desc,
        title: req.body.title
    });

    newnote.save((err, success) => {
        if (!err) {
            res.json({
                status: 1,
                msg: 'Data Added SucessFully'
            })
        } else {
            res.json({
                status: 0,
                msg: 'Failed'
            })
        }
    })
});


note.get('/removetask/:user_id/:id', (req, res) => {
    noteAddModel.deleteOne({ _id: req.params.id }, function (err, success) {
        if (!err) {
            res.json({
                status: 1,
                msg: 'Data Deleted Sucessfully'
            })
        } else {
            res.json({
                status: 0,
                msg: 'Failed'
            })
        }
    });
});

note.post('/updatetask/:user_id/:id', (req, res) => {
    noteAddModel.findOne({ _id: req.params.id, user_id: req.params.user_id}, function (err, success) {
        if (!err) {
            success.desc = req.body.desc
            success.save(function (err, succ) {
                if (!err) {
                    res.json({
                        status: 1,
                        msg: 'Data Updated Sucessfully'
                    })
                }
            });

        } else {
            res.json({
                status: 0,
                msg: 'Failed'
            })
        }
    });
});
module.exports = note;
