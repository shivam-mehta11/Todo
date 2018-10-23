const {SHA256}= require('crypto-js');
var message = ' I am user no. 3';
var hash = SHA256(message).toString(); // as it is an Object
console.log(`Message is ---------> ${message}`);
console.log(`Hashed value is ---------> ${hash}`);
var data = {
  id:4
};
var token = {
  data,
  hash: SHA256(JSON.stringify(data)+'somesecret').toString();
};
