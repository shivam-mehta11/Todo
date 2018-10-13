var bodyParser = require('body-parser'); // json to object and attach it to response obj
var express = require('express');


var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {mongoose}= require('./db/mongoose');


var app = express() ; //crud create  read update delete
app.use(bodyParser.json());
app.post('/todos',function(req,res){
  //console.log(req.body); v
  var todo = new Todo({text:req.body.text});
  todo.save().then(function(doc,err){
    if(err){
      res.status(400).send(err);
    }
    res.send(doc);
  });
});



app.listen(3000,function(){
  console.log('Started  port 3000');
});
module.exports= {app};
