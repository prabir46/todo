// var express = require('express');
// const mongoose = require('mongoose');
// const route = express.Router();


// const todoSchema = mongoose.Schema({
//     task: {
//         type: String
//     },
//     isChecked : {
//         type: Number
//     }
// });
//  var todoAddModel = mongoose.model('todo',todoSchema);

// route.get('/',(req,res)=>{
//     res.json({
//         alert: "Welcome to API" 
//     });
// })

// route.post('/addtask',(req,res)=>{
//     //res.json(req.body);
//     let newtodo = new todoAddModel({
//         task: req.body.task,
//         isChecked: req.body.isChecked 
//     });

//     newtodo.save((err,success)=>{
//         if (!err){
//             res.json({
//                 status: 1,
//                 msg: 'Data Added SucessFully'
//             })
//         }else{
//             res.json({
//                 status: 0,
//                 msg: 'Failed'
//             })
//         } 
//     })
// });

// route.get('/gettask',(req,res)=>{
//     todoAddModel.find(function (err, alltask) {
//         if(!err){
//             res.json(alltask);
//         }else{
//             res.json({
//                 msg: 'Data not Found.'
//             })
//         }
//     });
// })

// route.get('/removetask/:id',(req,res)=>{
//     todoAddModel.deleteOne({ _id: req.params.id },function (err, success) {
//         if (!err){
//             res.json({
//                 status: 1,
//                 msg: 'Data Deleted Sucessfully'
//             })
//         }else{
//             res.json({
//                 status: 0,
//                 msg: 'Failed'
//             })
//         } 
//     });
// })

// route.get('/updatetask/:id',(req,res)=>{
//     todoAddModel.find({_id: req.params.id} ,function (err, success) {
//         if (!err){
//             console.log(success);
//             if(success[0].isChecked == 0){
//                 success[0].isChecked = 1;
//             }else{
//                 success[0].isChecked = 0;
//             }
//             success[0].save( function( err, succ) {
//                 if(!err){
//                     res.json({
//                         status: 1,
//                         msg: 'Data Updated Sucessfully'
//                     })
//                 }
//             });
            
//         }else{
//             res.json({
//                 status: 0,
//                 msg: 'Failed'
//             })
//         } 
//     });
// })

// module.exports= route