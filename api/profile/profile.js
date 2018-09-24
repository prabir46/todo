var express = require('express');
var bcrypt = require('bcrypt');

const profile = express.Router();
const Users = require('../../model/auth');


profile.get('/myprofile/:email', function (req, res) {
    Users.findOne({ email: req.params.email }, function (err, succ) {
        res.send(succ);
    });
})
profile.post('/updateprofile', function (req, res) {
    Users.findOne({ email: req.body.email }, function (err, user) {
        user.username = req.body.username;
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.phoneno = req.body.phone;
        user.save((err, succ)=>{
            if (!err) {
                res.json({
                    status: 1,
                    message: 'Updated Sucessfully',
                    user: succ
                })
            }else{
                res.send(err);
            }
        })
    });

})
profile.post('/changepassword', function (req, res) {
    Users.findOne({ email: req.body.email }, function (err, user) {
        if (req.body.old_password != req.body.new_password) {
            bcrypt.compare(req.body.old_password, user.password).then(function (resp) {
                if (resp == true) {
                    bcrypt.hash(req.body.new_password, 12, function (err, hash) {
                        user.password = hash;
                        user.save((err, succ) => {
                            if (!err) {
                                res.json({
                                    status: 1,
                                    message: 'Updated Sucessfully',
                                    user: succ
                                })
                            } else {
                                res.send(err);
                            }
                        })
                    }, err => {
                        console.log(err)
                    })
                } else {
                    res.json({
                        status: 0,
                        message: 'Password Not Match'
                    })
                }
            }, err => {
                console.log(err);
            })
        }else{
            res.json({
                status: 0,
                message: 'Password Are Same as Old'
            })
        }


    });

})
module.exports = profile;

