var {MongoClient,ObjectId}= require('mongodb'); // Es6 feature

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
if(err){
  return console.log('Unable to connect to MongoDB server');
   }
// console.log('Connected to MongoDB server');
//   db.collection('Todos').deleteMany({text:'Have fun'}).then(function(result){
//     console.log(result);
//   });
// n   = no. of items delete
// console.log('Connected to MongoDB server');
//   db.collection('Todos').deleteOne({text:'Have fun'}).then(function(result){
//     console.log(result);
//   });
// console.log('Connected to MongoDB server');
//   db.collection('Todos').findOneAndDelete({completed:false}).then(function(result){
//     console.log(result);
//   });

// console.log('Connected to MongoDB server');
//   db.collection('User').deleteMany({Name: 'Shivam'}).then(function(result){
//     console.log(result);
//   });
console.log('Connected to MongoDB server');
  db.collection('User').findOneAndDelete({_id : ObjectId("5b939270014ebc24e57cd021")}).then(function(result){
    console.log(result);
  });



});
