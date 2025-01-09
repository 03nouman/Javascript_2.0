function myName() {
  console.log("N");
  console.log("O");
  console.log("U");
  console.log("M");
  console.log("A");
  console.log("N");
}

// myName();

//  function addTwoumber () {
//     console.log(1+3);

//  }

function addTwoumber(number1, number2) {
  // const result = number1 + number2;
  // return result
  return number1 + number2;
}

const result = addTwoumber(2, 3);
//  console.log("Result: ", result);

function userLoggedIn(username = "sam") {
  // if(username === undefined){
  //     console.log("Please enter your username");
  //     return
  // }
  if (!username) {
    console.log("Please enter your username");
    return;
  }
  return `${username} just logged In.`;
}

// const result2 = userLoggedIn("nouman");
// console.log(result2);

function calculateCartPrice(val1, val2, ...price) {
  return price;
}

//   console.log(calculateCartPrice(100,200,300,400,500,1000));

// Functions with objects and array in javascript

const user = {
  username: "numin",
  price: 89,
};
function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

//   handleObject(user
handleObject({
  username: "mann",
  price: 56,
});

const arr = [100,200,300,400]

function returnSecondvalueOfArray(anyArray) {
 return anyArray[1];
}

console.log(returnSecondvalueOfArray(arr));
