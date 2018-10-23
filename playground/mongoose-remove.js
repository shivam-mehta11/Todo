const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');
Todo.findByIdAndRemove('5bcf1baec3c53601988d095e').then(function(todo){
  console.log(todo);
});
