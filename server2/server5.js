var mongoose = require('mongoose');
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
//creating a model
// var Todo = mongoose.model('Todo',{
// text: { type:String ,required: true ,minlength: 1,trim:true},
// completed: {type:Boolean ,default:false} ,
// completedAt: {type:Number,default:null}
// });
// var newTodo = new Todo({text:'happy birthday'}); // created new database
// newTodo.save().then(function(doc,err){
//   if(err){
//     console.log('Unable to save todo');
//   } console.log('saved todo',JSON.stringify(doc,undefined,2));
// });

var User = mongoose.model('User',{
  email:{
     type: String,required:true, trim: true ,minlength : 1}
});
var user = new User({email:'shivammehta151@gmail.com'}); // created new database
user.save().then(function(doc,err){
  if(err){
    console.log('Unable to save todo');
  }
  console.log('saved todo',JSON.stringify(doc,undefined,2));
});
