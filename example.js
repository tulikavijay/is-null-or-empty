var isNullOrEmpty = require('./index');

console.log(isNullOrEmpty('')); //returns true
console.log(isNullOrEmpty(null));//retrurns true
console.log(isNullOrEmpty(undefined));//returns true

console.log(isNullOrEmpty('Hello World!'));//returns false
