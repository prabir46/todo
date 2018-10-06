var express = require('express');
const auth = express.Router();
const users = require('../../model/auth');
var bcrypt = require('bcrypt');

auth.get('/',(req,res)=>{
    res.json({
        alert: "We are in auth"
    });
})

auth.post('/signup',(req,res)=>{
    bcrypt.hash(req.body.password, 10 , function(err, hash) {
            
        let hashPass = hash;
    
    let newUser = new users({
        email: req.body.email,
        password: hash
    })
    newUser.save((err,success)=>{
        if (!err){
            res.json({
                status: 1,
                msg: 'Account created!'
            })
        }else{
            res.json({
                status : 0,
                message: 'User already exist!' 
            })
        } 
    })
        
    });
})

auth.post('/login',(req,res)=>{
    
    users.findOne({ email: req.body.email}, (err,success)=>{
        if(!err){
            bcrypt.compare(req.body.password, success.password).then(function (resp){
                if(resp == true) {
                    res.json({
                        status: 1,
                        msg: 'Logged In',
                        user : success
                    })
                }else{
                    res.json({
                        status : 0,
                        message: 'Username or Password incorrect!' 
                    })
                }
            },err=>{
                console.log(err);
            });
        }else{
            res.send(err);
        }

        
        });
    })

    



module.exports = auth;