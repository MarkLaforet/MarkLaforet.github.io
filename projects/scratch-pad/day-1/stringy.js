// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //use .length string method as function on string parameter
    //I = string
    //O = number
return string.length;    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //use .toLowerCase string method as function on string parameter
    // I = string
    // O = string forced to lowercase
    // C = coerce to lowercase string
    // E = must be a string
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //use .toUpperCase string method as function on string parameter
    // I = string
    // O = string forced to uppercase
    // C = coerce to uppercase string
    // E = must be a string
return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
        
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
return string.split(" ").join("-").toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // define variable as first letter in index of string
    // run if-else conditional to determine if first letter of string arg is strictly equal to the char arg
    // must coerce both to lower case since function shall be case-insensitive
    // I = strings
    // O = Boolean based on condition
let firstLetter = string[0];
if (firstLetter.toLowerCase() === char.toLowerCase()) {
    return true;
} else {
    return false;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // define variable as last letter in index of string
    // run if-else conditional to determine if last letter of string arg is strictly equal to the char arg
    // must coerce both to lower case since function shall be case-insensitive
    // I = strings
    // O = Boolean based on condition
let lastLetter = string[string.length-1];    
if (lastLetter.toLowerCase() === char.toLowerCase()) {
    return true;
} else {
    return false;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // using + operator, concatenate parameter 1 and parameter 2 and return resulting string
    // I = 2 strings
    // O = 1 string
    // C = use operator
return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // convert parameters into array using Array.from() method
    // init var args as the array 
    // use .join method to join all in array together
    // I = string(s)
    // O = string
    var args = Array.from(arguments);
return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // I = strings
    // O = longest of 2 strings
    // using if-else conditional, compare length of each of 2 strings obtained through .length string method
    // return greater of the two
if (stringOne.length > stringTwo.length) {
    return stringOne;
} else {
    return stringTwo;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // using if-else if conditional, compare 2 strings to determine higher in ABC order
    // return numbers based on result of args passed, 0 if equal

if (stringOne > stringTwo) {
    return 1;
} else if (stringOne < stringTwo){
    return -1;
} else {
    return 0;
}


    // YOUR CODE ABOVE HERE //
}

console.log(sortAscending("a", "a"));

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
        // YOUR CODE BELOW HERE //
    // using if-else if conditional, compare 2 strings to determine lower in ABC order
    // return numbers based on result of args passed, 0 if equal
if (stringOne < stringTwo) {
    return 1;
} else if (stringOne > stringTwo) {
    return -1;
} else {
    return 0;
}


    // YOUR CODE ABOVE HERE //
}
console.log(sortDescending("A", "a"));


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
