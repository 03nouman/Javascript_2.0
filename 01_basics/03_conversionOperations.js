let score = undefined

// console.log(typeof score); //simple format to check typeof variable
// console.log(typeof(score)); //In method format to check typeof variable

/*
 Every word comes with paraenthsis are called methods or function in javascript
*/

// conversion with Number

let valueInNumber = Number(score)

// console.log(typeof valueInNumber); //result- number type
// console.log(score);

// console.log(valueInNumber); // o/p: NaN


// 33 -> 33
// 'anbc22' -> NaN
// true -> 1 and false -> 0
// null -> 0
// undefined -> NaN

/*
 NaN is also a type of number datatype.
*/

// conversion with boolean

let isLoggedIn = "nouman";

let isLoggedInInBoolean = Boolean(isLoggedIn)

// console.log(isLoggedInInBoolean);

// so after investigating with numberous values such as,
// 1 => true
// 0 => false
// "" => false
// "nouman" => true

// conversion with String

let someNumber = 33
let someArray = [1,2,3,3]
let someNumberInString = String(someNumber)
let someArrayInString = String(someArray)

// console.log(typeof someArrayInString);// result: string


// console.log(someNumberInString); // result-33
// console.log(typeof someNumberInString ); //result-string

// *********************************************** Operations ******************************************************************

let value = 3;

let negValue = - value;

// console.log(value); //result: 3
// console.log(negValue); //result: -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2^3
// console.log(2%3); modulos or remainder

let str1 = "nouman";
let str2 = " mullaji"

// console.log(str1 + str2); // concatinating or adding  two string.

// complex operations:

// console.log("1" + + 2); // result->12, here javascripts treats 2 as a string
//  console.log((1) +   + "2"); // result- converting string "2" into a number and adding with 1 which gives 3
// console.log("1" + 2 + 1);
// console.log(1 + 2 + "2"); 

// above code from line o 79 to line no.82 is Bad practice

// console.log((2+3) * 10); // Good practice: calculating 2+3 seperately becoz they r inside the prenth() and multipli with 10.

// console.log(+true); // => 1: result comes 1 becoz '+' operator adds boolean value true and true value is '1'
// console.log(+""); //=> 0: result comes 0 becoz '+' operator adds boolean value false and false value is '0'
// console.log(+"nouman"); //=> NaN: result comes NaN becoz '+' operator try to adds string value which is not a number that's y it returns NaN.

// ***************************************************************************************************************************

// prefix and post fix:
// Syntax: x++ , ++x


let x = 2;

// console.log(x); // =>2
//   ++x; // => increament the x value by 1.

// console.log(x); // => 3

  x++; // => 3
// console.log(x); // => 4

// Example: postfix increment
let num = 3
const num2 = num ++ // here it will first use the value of num and then increase num value

// console.log(`num:${num}, num2:${num2}`);

// Example: prefix increment

let a = 3;
let b = ++a // here it will first increase value of a and then use the value of a

// console.log(`a:${a}, b:${b}`);














