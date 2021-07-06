// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // I = string or number
    // O = function with value as argument that returns Boolean or string "Not a number"
    // declare function that runs if-else if condition comparing value arg to base arg
    // returns true or false, unless result is not a number
    return function(value) {
        if(value > base) {
            return true;
        }
        else if(value < base) {
            return false;
        }
        else {
            return "Not a number";
        }
    }
       
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // I = string or number
    // O = function with value as argument that returns Boolean or string "Not a number"
    // declare function that runs if-else if condition comparing value arg to base arg
    // returns true or false, unless result is not a number
    return function(value) {
        if(value < base) {
            return true;
        }
        else if(value > base) {
            return false;
        }
        else {
            return "Not a number";
        }
    }
           
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // I = string character
    // O = function that returns Boolean
    // if else conditional to see if first letter of string === startsWith arg
    // find value of first letter of newString using charAt() method
    // use .toLowerCase string method on both arguments so that strict equality gives desired result
  return function(newString) {
        if (newString.charAt(0).toLowerCase() === startsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    
  }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // I = string character
    // O = function that returns Boolean
    // if else conditional to see if last letter of string === endssWith arg
    // find value of last letter of newString using charAt() method
    // use .toLowerCase string method on both arguments so that strict equality gives desired result    
       return function(newString) {
        if (newString.charAt(newString.length - 1).toLowerCase() === endsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    
     
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // I = array of strings and modify function
    // O = modified array
    // init empty array as modArray
    // use for loop to loop through entire array of strings
    // push strings into modArray array and into modify function
    var modArray = [ ];
    for (var i = 0; i < strings.length; i++) {
        modArray.push(modify(strings[i]));
    }   
    
    return modArray;

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // I = array of strings and test function
    // O = Boolean
    // C = ALL strings must pass to return true
    // use for loop to loop through entire array of strings
    // pass strings into test function
    // test with if condition to see if any strings do not pass and return false
     
    for (var i = 0; i < strings.length; i++) {  
        var resultTest = test(strings[i]);
            if(resultTest === false) {
            return false;
            }
    }
    return true;
}  
    
    
    // YOUR CODE ABOVE HERE //


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
