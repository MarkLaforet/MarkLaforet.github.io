/*
CONTROL FLOW  

The control flow is the order in which the sequence of code is executed.
Code is run in order from the first line in the file to the last line, 
unless the computer runs across structures that change the control flow, 
such as conditionals and loops.

JARGON
Code Block - what’s within { }. space where specific set of code can/will execute
Evaluate - what line of code will resolve to
Conditional - the part of the statement that determines
Comparison Operator - returns logical value based on whether 
comparison is true or false
Logical Operator - used to test true or false

IF STATEMENT
Use the if statement to specify a block of JavaScript code 
to be executed if a condition is true.
*/

var hour = 10;
var greeting;
if (hour < 12) {
  greeting = "Good morning";
}
//-----> Good morning
/*

ELSE-IF STATEMENT
Use the else if statement to specify a new condition 
if the first condition is false.
else if - MUST FOLLOW if or else if statement
else-if - translates to “if this condition is true AND other conditions were false
*/
if (hour < 10) {
  greeting = "Good morning";
} else if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
/*

ELSE STATEMENT
Use the else statement to specify a block of code 
to be executed if the condition is false.
If all are false?
You can do nothing
or
} else {
else is NOT REQUIRED, but allows you to do something 
if previous conditions were false
*/
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
/*

SWITCH STATEMENTS

The switch statement is used to perform different actions 
based on different conditions.

    The switch expression is evaluated once.
    The value of the expression is compared with the values of each case.
    If there is a match, the associated block of code is executed.
    If there is no match, the default code block is executed.

Example
The getDay() method returns the weekday as a number between 0 and 6.
(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:*/
var day = 3;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
/*
The result of day will be: Friday

The BREAK Keyword

When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.


The DEFAULT Keyword

The default keyword specifies the code to run if there is no case match:
Example

The getDay() method returns the weekday as a number between 0 and 6.

If today is neither Saturday (6) nor Sunday (0), write a default message:
*/
var text;

switch (new Date().getDay()) {
  case 6:
    text = "Saturday";
    break;
  case 0:
    text = "Sunday";
    break;
  default:
    text = "Looking forward to studying all Weekend";
}
/*
The result of text will be:
Looking forward to the Weekend
The default case does not have to be the last case in a switch block

Common Code Blocks

Sometimes you will want different switch cases to use the same code.
In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
Example */
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}