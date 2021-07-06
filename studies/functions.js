/*    
Functions

The two phases to using functions:
First we must DECLARE___? 
To execute (or CALL OR INVOKE) 
a function by?

Use the function name followed by parentheses with the argumet(s) within, 
followed by semicolon.

EXAMPLE
*/
function add(sum1, sum2) {
console.log( sum1 + sum2);
}

add(2, 7); 
/*-------> this is calling or invoking function, will print 9

What’s the difference between a function’s parameters (PLACEHOLDERS)
and arguments PASSED to a function?

    Function parameters are the names listed in the function’s definition.
    Function arguments are the real values passed to the function.
    Parameters are initialized to the values of the arguments supplied.

A parameter is a named variable passed into a function. 
Parameter variables are used to import arguments into functions.


What’s the syntax for a NAMED function?
*/
function multiplyParams(param1, param2) {
    return param1 * param2;
}
/*
name
    The function name.
param
    The name of an argument to be passed to the function.
statements
    The statements comprising the body of the function.

How do we assign a function to a variable? 

FUNCTION EXPRESSION

The function keyword can be used to define a function inside an expression.
*/
const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
/*
// expected output: 12

Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
How do we specify inputs, and how do we specify outputs?
Inputs are specified as PARAMETERS in the function declaration, 
in parentheses after the function name.
Arguments are then passed to the function in their place.

Scope: 
Functions can see and modify variables in parent or global scopes. 
The inverse is NOT true.
Functions can look outwards for variables 
BUT outside fumctions cannot look into nested functions.

Closures: 
Functions form closures around the data they house. 
If an object returned from the Function and is held in memory 
somewhere (referenced), that closure stays ALIVE, 
and data can continue to exist in these closures! 

(See: our meeting-room app for an example!)
(ALSO, see: Understanding JavaScript Closures with Ease)
*/


