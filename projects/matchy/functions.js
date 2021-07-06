/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function search(array, string) {
//declare variable that is assigned to null by default but gets reassigned if
//an object with a matching name property is found
    var objName = null;
//for loop to iterate over animal array, searching for (animal) object with
//matching name parameter
    for (var i = 0; i < array.length; i++) {
 //use if statement to compare string to object property "name"
        if (array[i].name === string) {
            objName = array[i];
        }
    } 
    return objName;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
// if(name is in animals array, replace the entire object with replacement object
// else do nothing
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
        animals.splice(i, 1, replacement);
        }
    } 
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
// if(name is in animals array, remove it
//delete property
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
        animals.splice(i, 1,);
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 /* MY VERSION
function add(animals, animal) {
    for (var i = 0; i < animals.length; i++) {
        if (animal.name.length && animal.species.length && animals[i].name !== animal.name) {
        animals.push(animal);
        } 
    }
    return animals;
}
*/
//ARIN'S VERSION
function add(animals, animal) {
    var hasName = false;
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
                hasName = true;
            }
    }
    if(animal.name.length > 0 && animal.species.length > 0 && hasName === false) {
        return animals.push(animal);
    }
}


/*function add(animals, animal) {
    for (var i = 0; i < animals.length; i++) {
        if (animal.name.length && animal.species.length && animals[i].name !== animal.name) {
        animals.push(animal);*/
        
// if (animal object name property.length > 0 && animalobject species property.length > 0 && has unique name)) {
// push(animal) to array;
//} else {
//    do nothing }

// console,log(animals);

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
