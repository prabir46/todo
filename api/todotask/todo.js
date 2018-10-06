var express = require('express');

const task = express.Router();
const todoAddModel = require('../../model/todo');

task.get('/', (req, res) => {
    res.json({
        alert: "we are in task"
    });
});
task.get('/alltask/:id', (req, res) => {
    todoAddModel.find({user_id: req.params.id}, function (err, alltask) {
        if (!err) {
            res.json(alltask);
        } else {
            res.json({
                status: 0,
                msg: 'Data not Found.'
            })
        }
    });
});

task.post('/addtask', (req, res) => {
    //res.json(req.body);
    let newtodo = new todoAddModel({
        user_id: req.body.user_id,
        task: req.body.task,
        isChecked: req.body.isChecked 

    });

    newtodo.save((err, success) => {
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

task.get('/removetask/:user_id/:id', (req, res) => {
    todoAddModel.deleteOne({ _id: req.params.id }, function (err, success) {
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

task.get('/updatetask/:user_id/:id', (req, res) => {
    todoAddModel.find({ _id: req.params.id, user_id: req.params.user_id}, function (err, success) {
        if (!err) {
            if (success[0].isChecked == false) {
                success[0].isChecked = true;
            } else {
                success[0].isChecked = false;
            }
            success[0].save(function (err, succ) {
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
module.exports = task;


