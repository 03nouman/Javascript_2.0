"use strict"; // treat all js code as newer version.

// alert(3+3) // we are using nodejs, not brwoser so it wil throw error in console. And alert is an browser feature.

console.log(3 +
    3
); // Bad practice, code readability should be high.

console.log("Nouman"); // Good practice, code readability should be high.


// Datatypes:- Primitive datatypes & Non-Primitive

// Number -> ranges from 2 to power 53, this much space can be allocate a memory for a number specfic varaible.
// bigInt
// string -> ""
// boolean -> true/false
// null -> It's standalone value
// undifined ->
// symbol -> unique, in terms of reactjs component perspective.

// Below are the examples of obove mentioned datatypes,

let age = 25; //number type variable
let name = "nouman" //string type variable
let isLoggedIn = false; //boolean type variable
let state; //undefined type variable

// object

console.log(typeof undefined); // undefined
console.log(typeof null);  // object

