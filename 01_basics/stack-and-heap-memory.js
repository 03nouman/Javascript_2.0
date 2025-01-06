// Stack-memory stores (Primitive Datatype) variables and Heap memory stores (Non-Primitive-Datatype) variables

/* 
Stack-memory: whenever any variable refered data in stack memory it gets the copy of that variable value,
 so the changes doesn't apply on original value, the changes apply on copied data/value which are done by another variable to whom we have shared copy of value.

 oneline ans: whenever any variable refered data in stack memory and that variable made any chages it only occurs to that variable not the original variable.
 
Heap memory: whenever any variable refered data in heap memory it gets original reference of that variable value,
 so changes do apply on original value, which are done by another variable to whom we have shared refrence of original value..
*/

// Example for stack memory:
let email = "abc@gmail.com";
let email2 = email; // email2 variable gets copied refrence of email variable data.

email2 = 'xyz@gmail.com'

// console.log(email); //result: abc@gmail.com
// console.log(email2); //result: xyz@gmail.com

// Example for heap memory:
let userOne = {
    salaray: '1000$'
}

let userTwo = userOne // userTwo variable gets the original refrence of userOne variable data.
userTwo.salaray = '2000$'

console.log(userOne.salaray); //result: 2000$, becoz refrence or non-primitive shared there direct refrence of the data.
console.log(userTwo.salaray); //result: 2000$
