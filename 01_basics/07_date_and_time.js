// Dates

let myDate = new Date();

// console.log(myDate); // o/p: 2025-01-03T09:59:05.768Z
// console.log("toDateString",   myDate.toDateString());
// console.log("toISOString" , myDate.toISOString());
// console.log("toLocaleDateString", myDate.toLocaleDateString());
// console.log("toString", myDate.toString());
// console.log("toLocaleString", myDate.toLocaleString());
// console.log("type of Date() method is ", typeof(myDate));

// create date:

const createdDate = new Date(2025,0,3);
// console.log(createdDate.toDateString());

const createdDate1 = new Date(2025,0,3,5,2);
// console.log(createdDate1.toLocaleString());

const createdDate2 = new Date("03-01-2025");
// console.log(createdDate2.toLocaleString());

// Time stamp:

let myTimestamp =  Date.now();

// console.log("my time stamp", myTimestamp);
// console.log("date timestamp", createdDate.getTime());

// converting to seconds:
//  console.log(Math.floor(Date.now()/1000)); //o/p:1735900305

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth() + 1); // always add one, becoz in date object its 0 index.

// Internationalization:

newDate.toLocaleString('default',{
    weekday:'long'
})

console.log(newDate.toLocaleString('default',{
    weekday:'short'
}));


 








