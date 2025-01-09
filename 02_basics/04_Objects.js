let tinderUser = new Object(); // the method of creating object is singleton object.

// console.log(tinderUser);

tinderUser.id = "abc123";
tinderUser.name = "someuser";
tinderUser.email = "some@gmail.com";

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    personalInfo : {
        userInfo: {
            firstName: "Nouman",
            lastName: "Mullaji",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.personalInfo);
// console.log(regularUser.personalInfo.userInfo);
// console.log(regularUser.personalInfo.userInfo.firstName);

// combining objects:

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj = {obj1, obj2} // bad practice.
// const obj =  Object.assign({}, obj1, obj2) // could be prefered but not ideal way to combine two objects

const obj = {...obj1, ...obj2, ...obj3} // prefered and good practice to combine two objects.
// console.log(obj);

const usersData = [
    {
        id:1,
        name: "sam"
    },
    {
        id:1,
        name: "sam"
    },
    {
        id:1,
        name: "sam"
    }
]

// console.log(usersData);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // o/p: false
// console.log(tinderUser.hasOwnProperty('name')); // o/p: true

// Object de-structure and JSON API intro:

const courses = {
    coursename : 'somecourse',
    price : "free"
}

// object de-structing,
const {price: courseFee} = courses;

// console.log(price);
// console.log(courseFee);

// json api response:
//  {
//     "name" : "nouman",
//     "age" : "25"
//  }

// [
//  //  {
// //     "name" : "nouman",
// //     "age" : "25"
// //  }   
// ]

// note: famous api url: https://randomuser.me/



