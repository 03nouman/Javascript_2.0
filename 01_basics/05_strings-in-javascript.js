const gitHubName = "03nouman"; // simple methode to crèate string datatype variable
let repoCount = 70;

// console.log(gitHubName +  +repoCount); // old way of loging the data

// console.log(`The GitHub name is ${gitHubName} and my repo count is ${repoCount}`);// this type of strings are called modern strings format called interpolation

const discordName = new String('nouman1234') // modern method to crèate string datatype variable

// console.log(typeof gitHubName); // string
// console.log(typeof discordName); // object: when a new keyword is used that means we're creating an object variable.

// console.log(discordName.__proto__); // results: return an object with property's

// methods in string:

// console.log(discordName.length); // result:10, returns the length of string
// console.log(discordName.charAt(4)); // // result:a, returns the character at index 4 of the string
// console.log(discordName.toLowerCase()); // result: nouman1234
// console.log(discordName.toUpperCase());// result: NOUMAN1234
// console.log(discordName.substring(0,3));// result: nou,Returns the substring at the specified start index and end index within a String object.
// console.log(discordName.slice(0,3)); //results: nou, Returns a section of a string at the specified start index and end inde.

const pharse = 'eat apple a day keeps doctor away';

// console.log(pharse.split('apple',2)); // result:[ 'eat ', ' a day keeps doctor away' ], Split a string into substrings using the specified separator and return them as an array.
// console.log(pharse.split('apple',3)); // result:[ 'eat '], Split a string into substrings using the specified separator and return them as an array.
// console.log(pharse.split(' ',10)); // result:['eat','apple','a','day','keeps','doctor','away'], Split a string into substrings using the specified separator and return them as an array.
// console.log(pharse.includes('day'));// Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false
// console.log(pharse.replace('eat','Eat')); // Eat apple a day keeps doctor away


const url = '          http://github.com:03nouman   '
// console.log(url);

// console.log(url.trim()); //Removes the leading and trailing white space and line terminator characters from a string.


const uniCode = 'SBI0001'

// console.log(uniCode.startsWith('S')); // true
// console.log(uniCode.endsWith('S')); // false
// console.log(uniCode.anchor()); // <a name="undefined">SBI0001</a>
// console.log(uniCode.at()); // S
// console.log(uniCode.indexOf('S')); //result: 0



