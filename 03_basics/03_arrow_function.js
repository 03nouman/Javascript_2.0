

const user = {
    username: "nouman",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} welcome to the website`);
        console.log(this); // op: gets the current context/value which holds the variable.
        
    }
}

// user.welcomeMessage() // op: nouman welcome to the website
user.username = 'zyd'
// user.welcomeMessage() // op: zyd welcome to the website

var state = 'maharashtra';
// console.log(this); // op: {}
// console.log(this.state); // op: undefined

// function one () {
//     let username = 'nouman';
//     console.log(this.username);// op: undefined
    
// }
// one();

// const chai = function () {
//         let username = 'nouman';
//     console.log(this.username);// op: undefined
   
// }

// chai();

const chai =  () => {
    let username = 'nouman';
console.log(this.username);// op: undefined

}

// chai();

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,2)); // op:4

// const addTwo = (num1,num2) => (num1 + num2)

// console.log(addTwo(2,2)); op:4

const addTwo = (num1,num2) => ({username:'nouman'})

console.log(addTwo(2,2)); //op: { username: 'nouman' }

