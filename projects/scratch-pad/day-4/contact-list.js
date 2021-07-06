// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 */     
function makeContact(id, nameFirst, nameLast) {
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
    return contact;
} 
 /*  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

function makeContactList() {
    // You need something here to hold contacts. See length api for a hint:
    
    var contacts = [ ];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        addContact: function(contact) {
            // takes a contact object to be added to the contact-list.;
            // contacts.push([ ]);
            // I = object
            // O = object to array
            // use .push() method to add object to contact list array
            return contacts.push(contact);
        },  
        
        findContact: function(fullName) {
            // takes a full-name String, like 'Max Gaudin', and 
            // returns the contact object if found in the contacts-list, or, 
            // undefined if the fullName does not match any contacts in the list;
            // I = string
            // O = object or undefined
            // C = 
            // run for loop to access all objects in contacts list array
            // if else conditional to compare fullName arg with concatenated string of first and last names on list
            // return the object if true, undefined if false
        for (var i = 0; i < contacts.length; i++) {
            // var fullName = nameFirst["nameFirst"] + " " + nameLast["nameLast"];
            if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
            return contacts[i];
            } else {
            return undefined;
            }
        }
       }, 
       
        removeContact: function(contact) {
            // takes a contact object to be removed from the contact-list;
            // return contacts.pop([ ]);
            // I = object
            // O = object to array
            // use .pop() method to remove object from contact list array
            return contacts.pop(contact);
        },
        
        printAllContactNames: function() {
            // return a String formatted with all the full-names of the separated 
            // with a line-break;
            // WARNING: To pass this test, the LAST full name should have NO
            // new-line character added after it!
            // I = 
            // O = string formated with all full-names of contacts with \n line breaks
            // C = no new-line character at end
            // E =            
         var string = "";
         for (var i = 0; i < contacts.length - 1; i++) {
            // contacts[i].nameFirst + " " + contacts[i].nameLast + "\\n";
                string += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"; 
                  }
            return string += contacts[contacts.length - 1].nameFirst + " " + contacts[contacts.length - 1].nameLast;

            }
        };
    }


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
