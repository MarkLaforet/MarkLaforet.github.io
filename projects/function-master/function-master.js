//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take object and return its values in array
//I = object
//O = array
//C =
//E =
//use for-in loop to access values of keys in object
//use push method to put those values into empty array
function objectValues(object) {
    var array = [];
    for (var key in object) {
       array.push(object[key]); 
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take object return all keys in string 
//each separated by space
//I = object
//O = string
//C = keys need to be separated by " ".
//E =
//use for-in loop to access values of keys in object
//use push method to put those values into empty array
//return that array & convert to string using.join(" ") 
//to add spaces between keys
function keysToString(object) {
    var array = [];
        for (var key in object) {
        array.push(key); 
      }
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take object and return all its values in string 
//separated by space
//I = object
//O = string
//C = values need to be separated by " ".
//E =
//use for-in loop to access values of keys in object
//use push method to put those values into empty array
//return that array & convert to string using.join(" ") 
//to add spaces between values
function valuesToString(object) {
    var array = [];
        for (var key in object) {
            if (typeof object[key] === "string") {
        array.push(object[key]); 
    
        }
   }
       return array.join(" ");

}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take unknown and return 'array' if array and 'object' if object
//I = unknown
//O = string
//C =
//E =
//use if else if to see if array is array first using Array.isArray method on it
//use typeof method to see if if not array, is it object?
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if 
    (typeof(collection) === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take string and return string with first letter capitalized
//I = string
//O = string
//C = capitalize first letter only
//E =
//access first letter of string by index[0]
//use toUpperCase method on index 0 of string
//use substr to access remaining letters of string
//concatenate these two
//return the result
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substr(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take string of words & return string with all words capitalized
//I = object
//O = array
//C =
//E =
//init array of these words converted to array using split(" ") method
//use for loop to access each word in string
//access first letter of each string by index[0]
//use toUpperCase method on index 0 of each string
//use substr to access remaining letters of each string
//concatenate these two
//return the result
function capitalizeAllWords(string) {
    var arrayStr = string.split(" ");
    for (var i = 0; i < arrayStr.length; i++) {
         arrayStr[i] = arrayStr[i][0].toUpperCase() + arrayStr[i].substr(1);
    }
  return arrayStr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take object with name property and return string "Welcome <name>!"
//I = object
//O = string
//C =
//E =
//init array of these words converted to array using split(" ") method
//use for loop to access each word in string
//access first letter of each string by index[0]
//use toUpperCase method on index 0 of each string
//use substr to access remaining letters of each string
//concatenate string "Welcome" with these two and also " !"
//return the result
function welcomeMessage(object) {
    return "Welcome " + object.name[0].toUpperCase() + object.name.substr(1) + "!";
    }

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object with a name and a species 
//and return '<Name> is a <Species>'
//I = object
//O = string
//C = must capitalize forst letters of name and species
//E =
//access first letter of name of object using dot notation and by index[0]
//use toUpperCase method on index 0 of object name AND object species
//use substr to access remaining letters of object name AND object species
//return the result of concatenating each with concat  " is a " between the two resultant strings

function profileInfo(object) {
    return object.name[0].toUpperCase() + object.name.substr(1) + " is a " + object.species[0].toUpperCase() + object.species.substr(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them 
//as a string separated by a space, 
//if there are no noises return 'there are no noises'
//I = object
//O = string separated by space OR string 'there are no noises'
//C = 
//E =
//take object and use if else conditional
//test to see if it does NOT have a noises property at all (use bang operator and or operator)
//return 'there are no noises' if true
//if it does have noises property, return as a string 
//with spaces between each by using join(' ') method
function maybeNoises(object) {
        if (!object.noises || !object.noises.length) {
            return 'there are no noises';
        } else {
            return object.noises.join(' ');
        }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a string of words and a word 
//and return true if <word> is in <string of words>, 
//otherwise return false. 
//I = object
//O = string separated by space OR string 'there are no noises'
//C = 
//E =
//init array of words in string converted to array using split(" ") method
//run for loop to loop through words in the array
//take array and use if conditional
//test to see if any of the words in the array loop strictly equal word parameter
//return true if true, otherwise return false
function hasWord(string, word) {
    var splitStr = string.split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === word) {
            return true;
        }
    }
            return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a name and an object & add the name to the object's friends array
//then return the object 
//I = name, object
//O = array with object name added
//C = 
//E =
//use push() method to add name value to the object's friends key (property)
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a name and an object and return true if <name> is a friend of <object> 
//and false otherwise
//I = name, object
//O = array with object name added
//C = 
//E =
//run if else conditional to test first if
//there is not a friends value in object (using bang operator) then
//test if name is in object friends property using includes() method, return true if so
//if not, return false as final condition
function isFriend(name, object) {
        if (!object.friends) {
            return false;
        }
        if (object.friends.includes(name)) {
            return true;
        } else {
            return false;
        }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var nameList = [];
    var endArray = [];
    var noVal = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            noVal = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }
    if(noVal === null){
        return nameList;
    }
    for(var i=0; i<nameList.length; i++){
        if(noVal.friends.indexOf(nameList[i]) == -1){
            endArray.push(nameList[i]);
        }
    }
    return endArray;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it.
//I = object, key, value
//O = object
//C = 
//E =
//use bracket notation to add key and value to object
//return object
function updateObject(object, key, value) {
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object and an array of strings. 
//Should remove any properties on <object> 
//that are listed in <array>
//I = object, array
//O = object
//C = remove any properties that are in array
//E =
//init 2 variables - one to represent object keys, one for object values 
//using Object.keys and Object.values methods
//init var with those 2 variables concatenated using concat method
//run for loop through array
//conditional test if any properties are in array. 
//If so, delete that property from array
function removeProperties(object, array) {
    var keyArray = Object.keys(object);
    var valArray = Object.values(object);
    var keyVal = valArray.concat(keyArray);
    
    for(var i = 0; i < array.length; i++) {
      if (keyVal.includes(array[i])) {
          delete object[array[i]];
      }  
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an array and return an array with all the duplicates removed
//I = array
//O = array
//C = remove any duplicates in array
//E =
//init variable with [...new Set()] method on array 
//return that variable (dedupList)
function dedup(array) {
    var dedupList = [...new Set(array)];
    return dedupList;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}