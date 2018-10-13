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
//   db.collection('User').findOneAndUpdate({_id : new ObjectId("5b8eb2caf7b4402a244b4e4a")},{
//     $set: {
//       completed : true
//     }
//   }, {
//     returnOrignal: false
//   }).then(function(result){
//     console.log(result);
//   });

  console.log('Connected to MongoDB server');
    db.collection('User').findOneAndUpdate({_id : new ObjectId("5b939261014ebc24e57cd016")},{
      $set: {
        completed : true
      }, $inc :{age : 1} , $rename :{"nme":"name"}
    }, {
      returnOrignal: false
    }).then(function(result){
      console.log(result);
    });



});
