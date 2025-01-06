const accountId = 12345;
let  accountName = "bhuti sharma";
var  accountEmail = "bhuti@gmail.com";

acountCity   = "Chiplun";
let accountStatus; // it will return undefined in console.log. becoz if we have have only created memory but not given any value.

// acountId = 5432; -> Not allowed becoz it's a constant vraiable

/*
prefer not to use var,
 becoz of issues in  block scope and functional scope.*/

// console.log(accountId,accountName,accountEmail,accountCity,accountStatus);
console.table([accountId,accountName,accountEmail,acountCity,accountStatus]);

