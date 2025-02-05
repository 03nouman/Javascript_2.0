// Arrays in javascript: Arrays in javascript are the collection of multiple elements of different datatypes under a single element.

const myArr = [0,1,2,3,4]

// console.log(myArr[2]); // o/p: 2

const myArr2 = new Array(1,2,3,4,5);

// console.log(myArr2[3]); // o/p: 4


// methods in arrays

// console.log(myArr.push(5));
// console.log( myArr.pop());
// console.log(myArr.unshift(10));

// myArr.shift()
// console.log(myArr);

// questioning methods:

// console.log(myArr.includes(11));
// console.log(myArr.indexOf(9));

// binding or joining the array converting the type into string method:
const newArr = myArr.join()
console.log(myArr);
console.log(typeof myArr); // typeof:object
console.log(newArr);
console.log(typeof newArr); // typeof: string


// slice and splice

// slice: slice returns a portion of an array and it does not manipulate original array.

// splice: slice returns a portion of an array and it does manipulate original array.

console.log("original array ", myArr);

console.log("Performing slice on array ", myArr.slice(2,3));

console.log("original array after performing slice operation ", myArr);

const splicedArray = myArr.splice(2,3);

console.log(" original array after performing splice operation ", myArr);
console.log("Performed spliced operation ", splicedArray);




