//Without IIFA
// let message = "Hello from Global Scope!";

// function setMessage() {
//     message = "Hello from Function Scope!";
// }

// setMessage();
// console.log(message); // ❌ Overwrites global variable (Unwanted Side Effect)

//With IIFA
// let message = "Hello from Global Scope!";

// (function() {
//     message = "Hello from IIFE Scope!";
//     console.log(message); // ✅ Output: Hello from IIFE Scope!
// })();

// console.log(message); // ✅ Output: Hello from Global Scope! (Unchanged)

(function greet(){
    console.log("Hii Sanket")
})();

(()=>{
    console.log("Hii Raj")
})();

