// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 // I = unknown value
 // O = Boolean
 // use Array.isArray method
function isArray(value) {
    // YOUR CODE BELOW HERE //
if (Array.isArray(value)) {
    return true;
}  else {
    return false;
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 // I = unknown value
 // O = Boolean
 // C = typeOf won't work
 // use if-else if conditional to rule out array, null, Date values as false
function isObject(value) {
// YOUR CODE BELOW HERE //
if (Array.isArray(value)) {
    return false;
} else if (value === null) {
    return false;
} else if (value instanceof Date) {
    return false;  
} else if (typeof value === 'object') {
    return true;
} else {
    return false;
}      
        

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 // I = unknown value
 // O = Boolean
 // C = must be either array or object to return true
 // use if-else if conditional to rule out null & Date values as false, array or object to return true
function isCollection(value) {
    // YOUR CODE BELOW HERE //
 if (value === null) {
        return false;
}   else if 
    (value instanceof Date) {
        return false;  
}   else if
    (Array.isArray(value) || typeof value === 'object') {
        return true;
}   else {
    return false;
}
          
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
 // I = value
 // O = string
 // C = have to coerce null, Date and array values so they don't return "object"
 // use if-else if conditional to rule out array, null, Date values as false
function typeOf(value) {
    // YOUR CODE BELOW HERE //
 if (value === null) {
        return "null";
}   else if 
    (value instanceof Date) {
        return "date";  
}   else if
    (Array.isArray(value)) {
        return "array";
}   else {
    return typeof value;
}

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
