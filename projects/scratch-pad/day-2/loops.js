// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // I = array
  // O = array values
  // C = loop forward
  // for loop used on array to loop through its values and log to console
 for (var i = 0; i <= array.length - 1; i++)
  console.log(array[i]);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // I = array
  // O = array values
  // C = loop backward
  // for loop used on array to loop backward through its values and log to console
  for (var i = array.length - 1; i >= 0; i--)
  console.log(array[i]); 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // I = object
  // O = array of strings
  // C = need to return array from object keys
  // for-in loop used on object parameter to loop through its keys
  //used Object.keys() method to create array from keys
  
 for (var key in object) {
   return Object.keys(object);
 } 

// expected output: Array ["a", "b", "c"]

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // I = object
  // O = keys
  // C = loop through object and log keys to console
 for (var key in object) {
   console.log(key);
 }  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // I = object
  // O = array
  // C = loop through object and return values
  //used Object.values() method to create array from values
  for (var key in object) {
   return Object.values(object);
 } 
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // I = object
  // O = values
  // C = loop through object and log values to console
  for (var key in object) {
   console.log(object[key]);
 }  
   
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // I = object
  // O = number of key/value pairs in object
  // C = loop through object 
  // used Object.keys method to create array of keys
  // used .length method to return number of key/value pairs
 for (var key in object) {
   return Object.keys(object).length;
 } 

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // I = object
  // O = array of values in reverse
  // C = loop through object 
  // assigned objArray to array created by Object.values method
  // used for loop to count backwards in array
  //log to console
  for (var key in object) {
   var objArray = Object.values(object);
  for (var i = objArray.length - 1; i >= 0; i--)
    console.log(objArray[i]); 

 }  
 // 
   
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
