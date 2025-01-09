let a = 10;
const b =20;
// var c = 30;

if(true) {
    let a = 100;
    const b =20;

    console.log("Inner: ", a);
    

}

// console.log(a);
// console.log(b);
// console.log(c);

function one () {
    const username = "noumanmullaji";
    
    function two () {
        const website = 'youtube';
        // console.log(`username is ${username} and website is ${website}`);
        
    }
    //  console.log(website); //error
     
    // two();
}
// console.log(username); //error

// one();

if(true) {
    const username = "noumamullaji"
    if(true){
        const website = 'google';
        // console.log(`username is ${username} and website is ${website}`);
        
    }
    // console.log(website); //error
    
}
// console.log(username); //error

// Interesting: 


console.log(addone(5));

function addone(num) {
    return num + 1
}


// console.log(addTwo(5)); //error

const addTwo = function (num) {
    return num + 2
}

// console.log(addTwo(5));


