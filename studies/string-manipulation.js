/*
String manipulation

STRING MANIPULATION
WITH OPERATORS:
concatenate using the + operator ...joins individual strings together into unified string
examples 
*/
var newName = "John" + "Doe" //---> "JohnDoe";
//remember to add spaces or characters if needed
//example 
"John" + " " + "Doe" //----> “John Doe”
/*

WITH STRING METHODS:

String Length
Returns the length of a string:
Example
*/
var name = "Mark Laforet";
name.length     // Returns 12    

/*
SPACES COUNT AS CHARACTERS

Other String Methods 
*/
var name = "Mark Laforet";
var nextString = "is tired";


//charAt() Returns the character at the specified index (position)
name.charAt(3)     // Returns "k"    
//concat() Joins two or more strings, and returns a new joined string
//The concat() method can be used instead of the plus operator. 
name.concat(" ", nextString)     // Returns "Mark Laforet is tired"    
//endsWith() Checks whether a string ends with specified string/characters
name.endsWith()     // Returns 12    
//includes() Checks whether a string contains the specified string/characters
name.includes()     // Returns 12    
//indexOf() Returns the position of the first found occurrence of a specified value in a string
name.indexOf()     // Returns 12    
//lastIndexOf() Returns the position of the last found occurrence of a specified value in a string
name.lastIndexOf()     // Returns 12    
//match() Searches a string for a match against a regular expression, and returns the matches
name.match()     // Returns 12    
//repeat() Returns a new string with a specified number of copies of an existing string
name.repeat()     // Returns 12    
//replace() Searches a string for a specified value, or a regular expression,
//and returns a new string where the specified values are replaced
name.replace("Mark", "Petey")     // Returns "Petey Laforet"    
//search() Searches a string for a specified value, or regular expression,
//and returns the position of the match
name.search()     // Returns 12    
//slice() Extracts a part of a string and returns a new string
name.slice(0, 4)     // Returns "Mark"    
//If you want to work with a string as an array, you can convert it to an array.
//split() Splits a string into an array of substrings
name.split(" ")     // Returns [ 'Mark', 'Laforet' ]    
//startsWith() Checks whether a string begins with specified characters
name.startsWith()     // Returns 12    
//substr() Extracts the characters from a string, beginning at a specified start position,
//and through the specified number of character
name.substr()     // Returns 12    
//substring() Extracts the characters from a string, between two specified indices
name.substring()     // Returns 12    
//toLowerCase() Converts a string to lowercase letters
name.toLowerCase()     // Returns "mark laforet"    
//toString() Returns the value of a String object
name.toString()     // Returns 12    
//toUpperCase() Converts a string to uppercase letters
name.toUpperCase()     // Returns "MARK LAFORET"    
//trim() Removes whitespace from both ends of a string
name.trim()     //     
//valueOf() Returns the primitive value of a String object
name.valueOf()     // Returns 12    

/*
All string methods return a new value. They do not change the original variable.
All string methods return a new string. They don’t modify the original string.
Formally said: Strings are immutable: Strings cannot be changed, only replaced.

Extracting a part of a string:

SLICE
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included).
This example slices out a portion of a string from position 7 to position 12 (13-1):
    Example
    */
    let str = "Apple, Banana, Kiwi";
    str.slice(7, 13)     // Returns Banana
//(counts positions from zero. First position is 0.)
//If a parameter is negative, the position is counted from the end of the string.

//This example slices out a portion of a string from position -12 to position -6:
//  Example
    let str2 = "Apple, Banana, Kiwi";
    str2.slice(-12, -6)    // Returns Banana

//If you omit the second parameter, the method will slice out the rest of the string:
//  Example
    str.slice(7);    // Returns Banana,Kiwi

//or, counting from the end:
//  Example
    str.slice(-12)    // Returns Banana,Kiwi

//SUBSTRING
//substring() is similar to slice().

//The difference is that substring() cannot accept negative indexes.
//  Example
    let str3 = "Apple, Banana, Kiwi";
    str3.substring(7, 13)    // Returns Banana

//If you omit the second parameter, substring() will slice out the rest of the string.
//The substr() Method

//SUBSTR
//substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part.
//  Example
    let str4 = "Apple, Banana, Kiwi";
    str4.substr(7, 6)    // Returns Banana


//If you omit the second parameter, substr() will slice out the rest of the string.
//  Example
    let str5 = "Apple, Banana, Kiwi";
    str5.substr(7)    // Returns Banana,Kiwi

//If the first parameter is negative, the position counts from the end of the string.
//  Example
    let str6 = "Apple, Banana, Kiwi";
    str6.substr(-4)    // Returns Kiwi
    
    
