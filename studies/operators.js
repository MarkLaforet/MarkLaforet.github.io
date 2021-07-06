/*
OPERATORS PROCESS data and RETURN new data

ASSIGNMENT OPERATORS:
Assign values to JavaScript variables.

(PERMANENT UNTIL CHANGED)

=   assigns value to variable
*/
var a = 20;         var b = 36;
console.log(a);      console.log(b);
//--> 20            //--> 36
/*
+=  adds value 
(CAN ALSO BE USED AS STRING OPERATOR TO CONCATENATE STRINGS)
*/
var a = 20;         var b = 36;
a += 10;            b += 5;
//--> 30            //--> 41
/*
-=  subtracts value
*/
var a = 20;         var b = 36;
a -= 10;            b -= 5;
//--> 10            //--> 31
/*
*=  multiplies value
*/
var a = 20;         var b = 36;
a *= 10;            b *= 5;
//--> 200           //--> 180
/*
/=  divides value
*/
var a = 20;         var b = 36;
a /= 10;            b /= 5;
//--> 2             //--> 7.2
/*
%=  assigns remainder to variable
*/
var a = 20;         var b = 36;
a %= 10;            b %= 5;
//--> 0             //--> 1

/*
ARITHMETIC OPERATORS:
Assign value of right operand to left operand
+   -   *   /   %

+  adds value
(CAN ALSO BE USED AS STRING OPERATOR TO CONCATENATE STRINGS)
*/
var a = 20;         var c = 36;
var b = 10;         var d = 5;
var sum = a + b;    var sum = c + d;
//--> 30            //--> 41
/*
-  subtracts value
*/
var a = 20;         var c = 36;
var b = 10;         var d = 5;
var sum = a - b;    var sum = c - d;
//--> 10            //--> 31
/*
*  multiplies value
*/
var a = 20;         var c = 36
var b = 10;         var d = 5
var sum = a * b;     var sum = c * d;
//--> 200           //--> 180
/*
/  divides value
*/
var a = 20;         var c = 36
var b = 10;         var d = 5
var sum = a / b;     var sum = c / d;
//--> 2             //--> 7.2
/*
%  assigns remainder to variable
*/
var a = 20;         var c = 36
var b = 10;         var d = 5
var rem = a % b;     var rem = c % d;
//--> 0             //--> 1
/*

COMPARISON OPERATORS
Compare data to determine equality or difference and return Boolean

Used in conditional statements to compare values & take action 
depending on the result

if 
*/
var x = 5;
/*
>  greater than */
x > 5     // --> false
x > 8     // --> false
/*
<  less than */
x < 5     // --> false
x < 8    //  --> true
/*
>=  greater than or equal to */
x >= 5     // --> true
x >= 8     // --> false
/*
<=  less than or equal to */
x <= 5     // --> true
x <= 8     // --> true
/*
===  strict equality (equal value AND type) */
x === 5     // --> true
x === "5"   // --> false
x === 8     // --> false

//!==  strict inequality (not equal value or type)
x !== 5     // --> false
x !== "5"  //  --> true
x !== 8     // --> true

//!=  not equal to
x != 5     // --> false
x != 8     // --> true

//==  equal to
x == 5     // --> true
x == "5"   // --> true
x == 8     // --> false

/*
LOGICAL OPERATORS
Used to determine the logic between variables or values.

Operator                Expression                      Result
BANG   !                (not) (!1 === 1)                false
dbl ampersand   &&      (and) (1 === 1 && 2 === 2)      true
dbl pipes  ||           (or) (1 === 1  || 1 === 2)      true

If value is NOT this, use BANG !

Can have as many && or || as you want

!==   is STRICT INEQUALITY.....watch carefully for this in test?


UNARY OPERATORS (!, typeOf, -)
Operation with only one operand, which comes either before or after the operator.

delete      deletes a property of an object

typeOf      returns a string indicating the type of the operand,
            such as "string", "number", "object" (which includes arrays, null,NaN), 
            "function","undefined", "boolean" (for true or false)
            
typeOf("Mark"); //--> returns "string"
typeOf(60); //--> returns "number"
typeOf(false); //--> returns "boolean"
typeOf(myFunction); //--> returns "function"
typeOf(myObject); //--> returns "object"
typeOf(myArray); //--> returns "object"
typeOf(null); //--> returns "object"


TERNARY OPERATOR (a ? b : c)
Assigns a value to a variable based on some condition.

variablename = (condition) ? value1:value2 

example:*/
var age;
var canLegallyDrink = (age < 18) ? "No": "Yes";
//If the variable age is value below 18,
//the value of the variable canLegallyDrink will be "No", 
//otherwise the value of canLegallyDrink will be "Yes".


