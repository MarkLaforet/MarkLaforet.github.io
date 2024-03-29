// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // I = string
    // O = new string reversed
    // C = use a loop (for loop in this case)
    // E = loop must close
    // declare var revString as empty string
    // run for loop using last letter of input as starting point, first letter as ending point, decrementing by one each loop
    // use += to concatenate the reverse string
    // return the new string as revString
  var revString = "";
  for (var i = input.length -1; i >= 0; i--) {
    revString += input[i];
  } 
  return revString;  
    
    
    // YOUR CODE GOES ABOVE HERE //
}

  console.log(reverseString("MarkLaforet"));



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}