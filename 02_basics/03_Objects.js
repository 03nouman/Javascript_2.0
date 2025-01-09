// singleton: when we create object using constructor, then it is called singleton. which can be use to multiple component instances.

// object literal: normal

let mySymbol = Symbol("key1")

const myObj = { // typeof object is object literal
    "full name": "nouman mullaji",
    [mySymbol] : "my key1",
    age: 25,
    height: "5.7 ft",
    weight: "70 kg",
    location: "chiplun",
    email: "naumanmullaji3@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Thursday"]
}
// console.log(myObj.height);
// console.log(myObj["height"]);
// console.log(myObj["full name"]);
// console.log(myObj[mySymbol]);

myObj.email = "nouman@google.com";
// Object.freeze(myObj);

// console.log(myObj.email);
myObj.email = "noumanmullaji111@gmail.com";
// console.log(myObj);

 myObj.greeting = function () {
    console.log("hello nouman!!");
    
 }

 myObj.greetingTwo = function () {
    console.log(`hello ${this["full name"]}`);
    
 }

 console.log(myObj.greeting());
 console.log(myObj.greetingTwo());
 
 




