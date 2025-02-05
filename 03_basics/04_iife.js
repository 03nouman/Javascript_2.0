// Immediately invoked function expression (IIFE);

// why iffe is used: to reduce global variable polution

(function chai() {
// named iife
    console.log(`DB connected!`);
})();

( (name) => {
    // unnamed iife
    console.log(`DB Connected Two ${name}`);
    
})('nouman')