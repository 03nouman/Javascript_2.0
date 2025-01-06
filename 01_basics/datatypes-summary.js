// Primitive Datatype:
// (7 types): number, string, boolean, null, undefined, symbol, bigInt

const number = 45; // typeOf: number
const name = "nouman"; // typeOf: string
let isLoggedIn = false; // typeOf: boolean
let outsideTemp = null; // typeOf: object
let state; // typeOf: undefined
let uniqueId = Symbol('123') // typeOf: symbol
let anotherUniqueId = Symbol('123'); // typeOf: symbol

const bigNumber = 12334567888990n // typeOf: bigInt
// console.log(typeof state);

// console.log(uniqueId === anotherUniqueId);// result- true becoz both of them are same datatype variable.
// console.table([uniqueId,anotherUniqueId]);

// Refrence (Non-Primitive Datatypes):

// Array, Objects, Functions

let heros = ['shaktiman','nagraj','krish'] // typeOf: object

let myObj = {
    name: 'nouman',
    age: 25,
    city:'',
}

let myFunc = function () {
    console.log('hello world');
    
}
// console.log(typeof heros); // typeOf: Object
// console.log(typeof myObj); // typeOf: Object
console.log(typeof myFunc); // typeOf: function or funtion object

// typeof of every datatype or ecma doc link:  https://262.ecma-international.org/5.1/#sec-11.4.3