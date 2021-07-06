/*
LOOPS

A loop is a sequence of instructions that is continually repeated 
until a certain condition is met. 
Focus is D.R.Y.; DON’T REPEAT YOURSELF!
Rather than copy/paste, use D.R.Y. to repeat by using LOOPS

WHILE LOOPS

Syntax:
while (condition){
 execute code block
}

The code block will continue to loop as long as the condition is true.

Example:
*/
var i = 0;
while(i < 5){
    console.log(i)
    i++
}
/*
This loop  will print number 0-4, will stop 
when condition becomes false (i >=5)

The code block will continue to run as long as 
the variable (i) is less than 5.
*/
var count = 0;
while (count < 5) {
console.log(count);
count++;
}
/*

FOR - LOOPS

Syntax:
for (statement 1; statement 2; statement 3){
 execute code block
}

Statement 1 is executed once before the code block is run.
Statement 2 defines the condition needed to execute the code block.
Statement 3 is executed every time the code block is run.

Example:
*/
for(var i = 0; i < 10; i++){
    console.log(i)
}
/*
//This loop will print numbers 0-9, will stop when condition is met (i = 10)
Statement 1 sets the variable for the loop (var i = 0).
Statement 2 sets the loop condition (i < 10).
Statement 3 increases the value of i (i++) each time the code block is run.

CLASS NOTES:
Identify the code you want to repeat and put it in CODE BLOCK

START Condition - The condition set to tell your loop when to begin.
CREATES A COUNTING VARIABLE THAT STARTS WITH X

This variable counts the number of repititions that have been executed.
Initilaize by starting with 0.

STOP Condition - The condition set to tell when the loop will stop, 
based on BOOLEAN VALUE.
While this condition is true, keep repeating code block. 
Will stop when false.

UPDATE - How much we will move per iteration.
(increment) (without this, we have INFINITY LOOP = BAD.)
*/
for (var i = 0; i < 5; i++) {
console.log("Hello!")
};
/*
repeats loop 5x because 0 was starting point
“HELLO!” - 0
“HELLO!” - 1
“HELLO!” - 2
“HELLO!” - 3
“HELLO!” - 4

COUNTER VARIABLE 0-9
*/
for (var i = 0; i <= 9; i++) {
console.log(i);
}
/*
i+= 2 even numbers if start at 0

i+= 2 even numbers if start at 1

****LOOP RUNS ON NUMBER VALUES****

*/
var colors = ["red", "yellow", "orange", "green", "blue", "purple"];

for (var i = 0; i <= colors.length -1; i++) {
console.log(colors[i]);
}
/*
// results in red (or stringVal.length - 1 if string)
yellow
orange
etc

Be able to loop any number of times, forward counting up to some limit, backward counting down to 0

TO LOOP OVER ARRAY, FORWARDS & BACKWARDS:
*/
//FORWARDS:
var array = [];
for (var i = 0; i < array.length; i++) { }

//BACKWARDS:     
for (i < array.length; i >= 0; i--) { }

/*
FOR - IN LOOPS

Loops over an OBJECT
The for...in statement iterates over all enumerable properties of an object that are keyed by strings, including inherited enumerable properties.
ONLY USE WITH OBJECTS!!!! (think “for-in object in my i”)

Syntax is straightforward:
*/
var myObject = {};

for (var key in myObject) {
console.log(key);
console.log(myObject[key]);
}

var person = {firstName:"Mark", lastName:"Laforet", age:20};

var text = "";
for (var x in person) {
  text += person[x];
}
// ----> Mark Laforet 20
/*
Each loop, key is given value of key name
NO INFINITY LOOPS HERE >>>>only as many times as key/values
NO DOT.NOTATION IN A FOR-IN LOOP
*/
