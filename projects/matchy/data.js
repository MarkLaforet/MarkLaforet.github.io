/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare animal set to empty object
var animal = {};
// give animal property species with dot notation
    animal.species = "Tiger";
    // give animal property name with bracket notation
    animal["name"] = "Tony";
    // give animal property noises with either notation - chose bracket for empty array
    animal.noises = [];
// console log  animal object
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare noises assign to empty array
var noises = [];
// add element to noises array using bracket notation
noises[0] = "growl";
// add element to end of noises array using push() method
noises.push("meow");
// add element to beginning of noises array using unshift() method
noises.unshift("purr");
// add element to end of noises array using bracket syntax to ensure it stays at end of array
// in spite of any modifications
noises[noises.length] = "roar";
// console log length of noises array
console.log(noises.length);
// console log last element of noises array
console.log(noises[noises.length]);
// console log entire noises array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// add noises property of animal to noises array using bracket notation
animal["noises"] = noises;
// add noise to noises array using push() method
animal.noises.push("howl");
// console log  animal object
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
// using bracket notation or dot notation
 * 2. What are the different ways of accessing elements on arrays?
 // bracket notation to access index
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// declare animals assign to empty array
var animals = [];
// add animal to animals array using push() method
animals.push(animal);
// console log animals array
console.log(animals);
// declare variable duck and assign it to object key/vallue pairs data
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// add duck object to animals array using push() method
 animals.push(duck);
// console log animals array
 console.log(animals);
// declare variable dog and assign it to object key/vallue pairs data
var dog = { 
    species: 'dog', 
    name: 'Zoe', 
    noises: ['bark', 'woof', 'growl', 'yelp'] };
// add dog object to animals array using push() method
 animals.push(dog);
// console log animals array
 console.log(animals);
// declare variable eagle and assign it to object key/vallue pairs data
var eagle = { 
    species: 'eagle', 
    name: 'Clifford', 
    noises: ['squawk', 'screech', 'chirp', 'hoot'] };
// add eagle object to animals array using push() method
 animals.push(eagle);
// console log animals array
 console.log(animals);
// console log length of animals array
 console.log(animals.length);
 
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// use array since it's a LIST of friends they're looking for.
// declare friends assign to empty array
var friends = [];
// declare function getRandom  
// I = array (animals)
// O = number (random index number from animals array)
// C = use Math.random to generate the random index
function getRandom(array) {
    // var animalsIndex = animals[Math.floor(Math.random() * animals.length)];
    return Math.floor(Math.random() * array.length);
}
getRandom(animals);
    // add name from random index to friends array
friends.push(animals[getRandom(animals)].name);
    
animals[1]["friends"] = friends;

//console.log(getRandom(animals));
// console log friends array
//console.log(friends);

// use bracket notation to add friends array as property also named friends
// on one of the animals in the animals array

//console log animals array


// ??????? arr[Math.floor(Math.random() * arr.length)];

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}