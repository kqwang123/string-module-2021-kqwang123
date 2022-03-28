const myStrings = require('./index');

console.log(myStrings.includesAll("Hello this is bob"), ['this', 'bob']); 
console.log(myStrings.limit("Hello this is bob, and I like pizza"), 10); 