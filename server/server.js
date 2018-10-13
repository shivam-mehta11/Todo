// var express = require('express');
// var bodyParser = require('body-parser');
//
// var {mongoose} = require('./db/mongoose');
// var {Todo} = require('./models/todo');
// var {User} = require('./models/user');
// var {ObjectID} = require('mongodb');
//
// var app = express();
//
// app.use(bodyParser.json());
//
// app.post('/todos', (req, res) => {
//   var todo = new Todo({
//     text: req.body.text
//   });
//
//   todo.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });
// app.get('/todos',function(req,res){
//   Todo.find().then(function(doc,e){
//     res.send({doc}) ;
//     if(e){
//       res.status(400).send(e);
//     }
//   }) ;
// });
//
// app.get('/todos/:id',function(req,res){
//   var id = req.params.id;
//   if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
//     return res.status(404).send();
//   };
// });
//
// app.get('/todos/:id',function(req,res){
//   res.send(req.params);
//
// });
//
//
//
//
// app.listen(3000, () => {
//   console.log('Started on port 3000');
// });
//
//
// module.exports = {app};



var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
