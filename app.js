// var express = require('express')
// var app = express()
// var port = process.env.PORT || 3000;
// app.listen(port).then(function(){
//     console.log("service is  not running:" +port);
    
//n })
var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
const mongoose = require('mongoose');
var volleyball = require('volleyball');

var api = require('./api/api');

var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(volleyball) ;

mongoose.connect('mongodb://admin:test1234@ds125322.mlab.com:25322/todotask').then(sucess=>{
  console.log('Connected to db: 27017');
}, err=>{
  console.log('Connection Faild');
})

app.use(express.static('./client'));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.use('/api', api);

// Running Node Server
const port =  process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Server On:' + port);
});