const marvel_heroes = ["thor","ironman","spiderman"];

const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

//concat
// let concatinatingArrays = marvel_heroes.concat(dc_heroes);
// console.log(concatinatingArrays);

// spread operators.
let allHeroes = [...marvel_heroes,...dc_heroes]
// console.log(allHeroes);

const another_Arrays = [1,2,3,[4,5],6,[7,[6,5]]];

let useAble_Array = another_Arrays.flat(Infinity); // Interesting
console.log("useAble-array", useAble_Array);//op:[1,2,3,4,5,6,7,6,5]

console.log("isArray ",Array.isArray("nouman"));

console.log("array from ",Array.from("nouman"));

console.log(Array.from({name:"nouman"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));






