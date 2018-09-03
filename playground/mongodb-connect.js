//const MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectId}= require('mongodb');
//var obj = new ObjectId();
//console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err){
  return console.log('Unable to connect to MongoDB server');}
console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({
//   text:'Something to do',
//   completed:false
// },function(err,result){
//   if(err){
//     return console.log('Unable to insert Todos');
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
//   db.close(); });
//
// });
db.collection('User').insertOne({
  Name:'Shivam',
  location:'Delhi',
  age: '20'
},function(err,result){
  if(err){
    return console.log('Unable to insert Users');
  }
  console.log(JSON.stringify(result.ops,undefined,2));
  db.close(); });

});
