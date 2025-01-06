// ------------------ Numbers in JS ------------------
const score = 200;

// console.log(score);

const balance = new Number(100)
//  console.log(balance);// o/p: 100 with Number proto_type

// console.log(balance.toString());// o/p: it returns a string value '100'

// console.log(balance.toFixed(2));// o/p: '2' is ideal value for tofixed method interms of tax calculation etc.

const hundereds = 1000000;
// console.log(hundereds.toLocaleString('en-in')); // o/p: 10,00,000 [en-in] is the standard value for indiandize price value.

// ----------------- Maths in JS ------------------

// console.log(Math); // o/p: math property's
// console.log(Math.abs(-4)); // o/p: Math.abs will make negative to positive value and keeps positive value to positive value.
// console.log(Math.floor(3.455)); // o/p: 3
// console.log(Math.round(2.9)); // o/p: 9
// console.log(Math.ceil(4.2)); // o/p: 5
// console.log(Math.max(9,4,1,8)); // o/p: 9
// console.log(Math.min(9,4,1,8)); // o/p: 1

// console.log(Math.random());// o/p : 0.2243435, math.random returns value between 0 to 1.
// console.log(Math.random()*10); // o/p: 0.18881838161992626, so in some cases the value might come 0.78767 etc. so it is bad practice.
// console.log((Math.random()*10) + 1); // o/p: 6.220901916752128, good practice by seprate multiplication and then addition by 1.

// Another better way to get random value,

const min = 1;
const max = 6;

// console.log(Math.floor(Math.random() * (max - min + 1)));// o/p:0,In some case it might give u a value 0, so we're expecting the min value 1, so it is bad practice code.

console.log(Math.floor(Math.random() * (max - min + 1) + min));// o/p: between 1 to 6 number. This is code for ludo dice.
















 
