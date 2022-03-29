const myStrings = require('./index');

console.log(myStrings.includesAll("Hello this is bob"), ['this', 'bob']); 
console.log(myStrings.limit("Hello this is bob, and I like pizza", 10)); 
console.log(myStrings.numberOf("Joe Joe Joe Joe Joe bob", "bob")); 
console.log(myStrings.startEnd("orange")); 
console.log(myStrings.replaceFrom("orange ketchup dog cat smith", "dog", "watermelon", 7, 20)); 
console.log(myStrings.insert("orange ketchup dog cat smith", "watermelon", 3)); 
console.log(myStrings.deleteCharAt("orange ketchup dog cat smith", 3)); 
console.log(myStrings.countVowels("orange ketchup dog cat smith")); 
console.log(myStrings.countConsonants("orange ketchup dog cat smith")); 