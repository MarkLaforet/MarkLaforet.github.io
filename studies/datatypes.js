/*

NUMBERS

Numbers can be positive, negative, or decimals
and are not enclosed in quotation marks.
We can create new values with arithmetic   
*/
//sum +  
//Example:   
4 + 5;   // --> 9

//subtraction - 
//Example:   
5 - 4;   // --> 1 
 
//product * 
//Example:   
4 * 5;   // --> 20 

//division/ 
//Example:   
20 / 5;  // --> 4

//remainder %
//Example:   
20 % 5;   // --> 0
/*
STRINGS

A string is a series of characters in single (‘ ') or double quotes (“ ")

Example: 
*/
'Mark';   
// or  
"Mark";
/*
Can access individual characters in string using BRACKET NOTATION  
[  ]      INDEX 0,1,2,3...
Each character has its own index, beginning with 0
SPACES COUNT AS CHARACTERS

Example:    
*/          var myName = "Mark";
            myName[0];     // --> "M"
/*
CONCATENATE with  +  to make a NEW STRING  (add spaces before and after)

Example:    
*/
            var myName2 = "Mark";
            var fullName2 = "Mark" + "Laforet";
            var fullName3 = myName2 + "Laforet";
/*
Use .length property to return # of characters:
*/
var firstName = "Mark";
/*
To find # of characters 
*/
firstName.length     
console.log(firstName.length);   //--> 4
/*
To find last letter
*/
console.log(firstName[firstName.length - 1]);  //--> "k"
/*
BOOLEANS

Value of true or false related to LOGIC
Similar to on/off switch, used in CONDITIONAL STATEMENTS (if, else if, else)

Booleans can be created with Boolean EXPRESSIONS
using COMPARISON OPERATORS 
(===, <, >, !==, >=, <=)(try not to use ==)

WANT IT TO BE TRUE for function to run

STRICT EQUALITY    ===
Checks if value and data type are both equal.

Name variable in Boolean like a question: (canDrive, isDead, isCat)
*/
var animal = "cat";
var isCat = animal === "cat";  //TRUE
var isCat2 = animal === "rabbit";  //FALSE
/*
ARRAYS 
Arrays are variables that can hold multiple values, like a list.
“LIST”/”COLLECTION” - more specifc term to describe an array

Syntax: use square brackets w/commas
ARRAYS USE NUMBERED INDEXES. (OBJECTS USE NAMED INDEXES.)
INDEX - number which specifies position in an array, starting with 0.
can hold multiple types of data types.

Example:
*/
var myThings = ["a", 5, true, ["Petey", "obj2", false], myName];
/* (name them plurals....like a list) usually similar in values

NO QUOTES WHEN ASSIGNING VARIABLE TO ARRAY

ZERO INDEX - Index is the “address” for the value in an array
*/
var friends = ["Ross", "Rachel", "Joey", "Chandler", "Monica"];
/*
index         0            1      2       3           4

BRACKET NOTATION - returns the value in the array of the index provided
console.log(“My friend is “ + friends[1]);   --> My friend is Rachel

Example: print friends list in order of reverse preference:
*/
console.log(friends[4], friends[3], friends[0], friends[2], friends[1]);  
/*

MANIPULATING ARRAYS

A function (action) that a specific data type can perform.

HOW TO CHANGE AN ARRAY INDEX:
*/
var names = ["John", "Fred", "Sam", "Bill"];
names[0] = "Peter";             
//-->changes John to Peter
/*
CAN ADD by names[4] = “Dave”;   --> Peter, Fred, Sam, Bill, Dave

VERY IMPORTANT METHODS

.push(x) - ADDS value (x) to END         
“PUSH END” array.push(newitemforend);

.unshift(x) - ADDS value (x) to BEGINNING   
“UN + BEFORE SHIFT” array.unshift(newitemforfront);

.pop() - SUBTRACTS value from END   
“POP OFF” array.pop();

.shift() - SUBTRACTS value from BEGINNING   
“OFF SHIFT” array.shift

.join(‘ ‘) - CONCATENATES ARRAY ELEMENTS INTO NEW STRING 
array.join(‘ “) or (+) or (“ and “)
deletes individual quotes, adds commas between                              

*****WHEN DOING THIS, CHANGE NAME TO REFLECT CHANGE TO STRING********
var wordsArray  ----> var wordsArrayString
var wordsArrayString = var wordsArray.join(‘ “)    
retains variable set for reference?

.split(“ “) - TURNS STRING INTO NEW ARRAY

var wordsArrayString.split(“ “);   -->gets rid of spaces if there
and breaks into individual elements divided by commas


OBJECTS
A JavaScript object is a collection of named values.
Object values are written as name : value pairs 
(name and value separated by a colon).

*******NOT ORGANIZED BY INDEX*******         PROPERTY

Benefit over Arrays is KEYS name key: value

KEY NAMES NOT IN QUOTES
(inside the {  }, the key values to left of   :   are INTERPRETED as KEYS)

Try to STACK values for legibility....separate by COMMAS
*/
var myObject = {
//key: value,
name: "Mark",     //>>>> string
age: 18,     //>>>> number (no quotes)
isDead: false,     //>>>> Boolean (no quotes)
buddies: friends    // >>>> variable (no quotes)  NO COMMA AFTER LAST
};
/*
ACCESSING OBJECTS-
    2 ways: DOT notation and BRACKET notation

DOT.NOTATION - returns value at a LITERAL KEY

    HAVE TO USE EXACT KEY NAME (like a variable)

    Accessing value using dot notation >>>>>         myObject.name;
    Changing value using dot notation >>>>>         myObject.isDead = true;
    Adding value using dot notation >>>>>         myObject.enemies = none;

BRACKET NOTATION - returns value at PROVIDED KEY

    USE QUOTES INSIDE BRACKETS FOR KEYS UNLESS IT IS A VARIABLE!

    Brackets HAVE TO BE USED when using a variable within?  
    VERIFY...MAY HAVE MISHEARD THIS

    Must refer back to var to reassign      
    example:
    */
    myObject["age"] = 60;
/*
    When you add a key:value pair, it ALWAYS adds to END

    STUDY THIS EXAMPLE       myHero[“powers”] = myHero{“powers”].join(‘ “);

IF YOU CAN USE EXACT KEY NAME, USE DOT.NOTATION
IF YOU HAVE SOMETHING REPRESENTING THE KEY NAME, BRACKET IS ONLY OPTION
****NEED TO REASSIGN IF YOU WANT THE VALUE TO CHANGE****

JARGON
    key/value pairs - pair of key/values in object duh
    properties - refers to key/value pairs in object

ACCESSING NESTED VALUES

    Always be aware of what data type you’re working with!

    BRACKET: console.log(hometown[“streets”][0][0][1]);           note quotes on key “streets”
    DOT console.log(hometown.streets[0][0][1]);

OBJECT WITHIN AN OBJECT

OBJECTS DO NOT HAVE INDEXES OR .LENGTH PROPERTY (unlike arrays or strings)

EVERY VALUE HAS CORRESPONDING KEY  (all words in dictionary have definition)

LIKE ARRAYS, OBJECTS CAN GROW INDEFINITELY


DETERMINING WHETHER YOU NEED OBJECT OR ARRAY FOR SPECIFIC SITUATIONS

USE OBJECT IF:                  USE ARRAY IF:
Values need to be identified    Values need to be identified
by WORD (“string”)              by a NUMBER
or                              or
The data collectively           The data represents
represents an                   a collection of
independent thing.              many things

var apple = {                   var apples = [     (note plural variable)
type: “Fuji”,                   “Granny Smith”,
color: “green”,                 “Fuji”,
flavor: “tart”,                 "Honey Crisp”
};                              ];
INDEPENDENT                     COLLECTION OF
THING                           MANY THINGS




FUNCTIONS

A function is a list of statements, given in a particular order,
that describes how to perform a particular task - or -

REUSABLE BLOCK OF CODE THAT ACCEPTS INPUTS, PROCESSES THOSE INPUTS,
 AND RETURNS A NEW DATA VALUE.
 
WHY A FUNCTION?
We need to have something we can run multiple times

4 PARTS TO FUNCTION DECLARATION:
                    NAME (in all functions)
                    Parameter(s) placeholders for values    can be empty
                    {FUNCTION BODY}         (in all functions)    where the code runs
                    Return Statement

    example:        function functionName (parameter1, parameter2) {
                    //function body - where the code runs, has to happen before return statement
                    e.g. var total = parameter1 + parameter2;
                    console.log(total);
                    }

                    functionName(argument1, argument2);
                    e.g. functionName(5, 9);    
                    (This “CALLS” the function, NEEDS PARENTHESES,will console.log 14)

I.O.C.E.
Method to use when pseudocoding comments before function:

I = INPUTS - What data type is being PASSED into this function?
O = OUTPUTS - What should this function RETURN?
C = CONSTRAINTS - Are there any specifics in instructions
    that involve (or limit?) how I build this function?
E = EDGE CASES - What conditions do I have to meet to ensure I’m offering the proper output?

***COMMENTING: ALWAYS PUT AT LEAST THE INPUT & OUTPUT IN SETTING UP COMMENTS***

FUNCTION PARAMETERS

Functions can OPTIONALLY take parameter(s), so they can take none or as many as required

Parameters are just PLACEHOLDERS for ARGUMENTS
that are later “PASSED” (given to function at call time).

JARGON****VERY IMPORTANT TO UNDERSTAND****

FUNCTIONS - Predefined commands for performing an action

PARAMETERS - Placeholders for data. Need parentheses no matter what.

RETURN STATEMENT - ends function (optional - does not need to be in function).
WILL PULL A VALUE FROM WITHIN A FUNCTION CALL
(PULL VALUE OUT OF LOCAL SCOPE)
CAN ONLY BE USED IN A FUNCTION BODY
FUNCTION CALL - Tells computer to perform action ONCE.

GLOBAL SCOPE - Stuff that exists outside of the code block.
Need to RETURN to pull it.

*****IMPORTANT - console.log and return are NOT the same!
Return Statements inside a function body RETURN a value or data
console.log does NOT  return anything, giving you UNDEFINED


UNDEFINED

A variable that has not been assigned a value.
The type is also undefined.” CHANGE
*/
var a;   //--> returns undefined
/*
NULL

“The value null represents the intentional absence of any object value. 
It is one of JavaScript’s primitive values and is treated as falsy for boolean operations.
Null expresses a lack of identification, 
indicating that a variable points to no object."" 

var a = null;   --> returns null

NaN

“NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):” CHANGE

INFINITY and -INFINITY

“Infinity (or -Infinity) is the value JavaScript will return 
if you calculate a number outside the largest possible number.
Infinity is a numeric value representing infinity (greater than any number).
typeOf infinity  --> "number"

example:*/
let myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}
/*
Division by 0 (zero) also generates Infinity:
Example
*/
let x =  2 / 0;       // x will be Infinity
let y = -2 / 0;       // y will be -Infinity
/*


What is the difference between primitive/simple and complex data types?
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
What does that mean, and how are they different?

PRIMITIVE data types are IMMUTABLE (cannot be changed) and hold only one value at a time
    strings, numbers, boolean (undefined, null, NaN are technically "special" data types.)
    They are fixed-size and are copied by VALUE

COPY BY VALUE: The value stored in one variable is COPIED to the other variable
               Changing the new variable value does not change the original. 

COMPLEX data types can hold collections of values and are MUTABLE (can be changed)
    objects, arrays, functions
    They can aggregate other values, be of indefinite size, & are copied by REFERENCE

COPY BY REFERENCE: The value stored in one variable is a REFERENCE to the other
                    and they both point to the same object.
                    Changing one changes the other.



*/
