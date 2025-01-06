// console.log(2 > 1); // o/p: true
// console.log(2 >= 1); // o/p: true
// console.log(2 < 1); // o/p: false
// console.log(2 <= 1); // o/p: false
// console.log(2 == 1); // o/p: false
// console.log(2 === 1); // o/p: false
// console.log(2 != 1); // o/p: true

// console.log("2" > 1); // => true, becoz comparision operator convert string into a number datatype.
// console.log("02" > 1); // true


// console.log(null > 0); // bad practice we need to avoid
// console.log(null == 0); // bad practice we need to avoid
// console.log(null >= 0); // bad practice we need to avoid

// console.log(undefined == 0); // bad practice we need to avoid
// console.log(undefined > 0);  // bad practice we need to avoid
// console.log(undefined < 0); // bad practice we need to avoid


// note: comparing null, undefined value with false value 0 is bad practice

/*
The reason is that an equality check == and comparisons such as >, <, >=, <=, work differently.
Comparisons  converts null to a number, treatings as 0.
That's y null >= 0 is true and null > 0 is false
*/

// strict check ===
// console.log("2" === 2); // results false, becoz here compiler also check for datatype
