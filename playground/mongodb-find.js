//const MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectId}= require('mongodb');
//var obj = new ObjectId();
//console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err){
  return console.log('Unable to connect to MongoDB server');
   }
console.log('Connected to MongoDB server');
// //db.collection('User').find({_id:new ObjectId('5b8cf7fad14637211039b872')})
// .toArray().then(function(docs){
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },function(err){
//   console.log('Unable to fetch todos',err);
// });
db.collection('Todos').find({name:'Shivam'}).toArray().then(function(docs){
   console.log(JSON.stringify(docs,undefined,2));
});

});
