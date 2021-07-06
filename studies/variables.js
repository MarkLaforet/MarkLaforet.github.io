/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  
 * Variables are named identifiers that can point to values of a particular type, 
 * like a Number, String, Boolean, Array, Object or another data-type.  
 * Variables are called so because once created, we can CHANGE the value 
 * (and type of value) to which they point.
 * 1. To create a variable we use the keyword, var, 
 * followed by a name (id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: 
 * declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because 
 * we have NOT initialized it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - 
// we cannot do this with constants 
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



/*
var, let, const

var - can reassign, will hoist, is function scoped, 
is NOT block scoped or scoped to loop blocks
if not declared will produce “undefined”
*/
var myVariable = 1;
/*
let - can reassign, will NOT hoist, is function scoped, 
block scoped and scoped to loop blocks
if not declared will produce reference error
*/
let myLet = 1;
/*
const - can NOT reassign, will NOT hoist, is function scoped, 
block scoped and scoped to loop blocks
if not declared will produce reference error
if you try to reassign const, will produce a Read Only error
*/
const hoursDay = 24;
/*
HOISTING
    
Hoisting is JavaScript's default behavior of moving declarations to the top.

JavaScript Declarations are Hoisted (not initialization)
A variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

LET & CONST
Variables defined with let and const are hoisted to the top of the block, 
but not initialized.

Meaning: The block of code is aware of the variable, 
but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block 
until it is declared:



/* more notes

VARIABLES (These are just headings from FreeCodeCamp

Named containers that store data (values), can only hold one value at a time

DECLARE Variables     var myName;

ASSIGN values with ASSIGNMENT OPERATOR var myName = “Mark”;

REASSIGN variable myName = “Petey” (“Mark” disappears)

INITIALIZE variable with =

all in one line, more efficient: var age = 25, sum = 6 + 6, canDrive = true;

UNDEFINED unless it’s run after latest assignment

*/