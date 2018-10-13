const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
var id = '5bbe519c2ce9873d6ed75420';
if(!ObjectID.isValid(id)){
  console.log('Id not valid');
}
//Todo.find({_id:id}).then(function(todo){console.log('Todos is',todo)});
//Todo.findOne({_id:id}).then(function(todo){console.log('Todos is',todo)});
Todo.findById(id).then(function(todo){
if(!todo){
  console.log('Id not found');
  }
    console.log('Todos is',todo);
}).catch((e)=>console.log(e));
