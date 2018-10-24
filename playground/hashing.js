const {SHA256}= require('crypto-js');
var message = ' I am user no. 3';
const jwt = require('jsonwebtoken');
// var hash = SHA256(message).toString(); // as it is an Object
// console.log(`Message is ---------> ${message}`);
// console.log(`Hashed value is ---------> ${hash}`);
var data = {
  id:10
};
var token = {
  data,
  hash: SHA256(JSON.stringify(data)+'somesecret').toString()
};
//token.data.id =5 ;
//token.hash = SHA256(JSON.stringify(data)).toString();
resultHash= SHA256(JSON.stringify(token.data)+'somesecret').toString();
if(resultHash===token.hash){
  console.log('Data not manipulated');
}else
{console.log('Data manipulated');}
var data = {
  id:10
};
token =jwt.sign(data,'123abc'); // 123shivam is somesecret

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
