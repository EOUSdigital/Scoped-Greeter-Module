//TODO 📚 Module 4 - Lesson 11.01: Execution Context


//TODO  🧪 Step 4: Project Challenge: Scoped Greeter Module

//* 💼 Scenario
//  We are creating a greeting module that should:
//  • Encapsulate private data using an IIFE
//  • Use arrow functions for event handling or delayed responses
//  • Demonstrate a clear understanding of scoping, execution context, and this

//* 📋 Requirements
//  1. Wrap all logic inside an IIFE to prevent polluting the global scope.
//  2. Use a regular function for a method where you need this to refer to the object.
//  3. Use an arrow function to preserve this inside a callback.
//  4. Add an example of a variable that is not accessible outside the IIFE.

//! Solution

const Greeter = (() => {
    //  Private variable
    const greeting = "Hello";
    
    return {
        name: "Sage",
        greet: function () {
            console.log(`${greeting}, I am ${this.name}`);
            
            // Delay with arrow function
            setTimeout(() => {
                console.log(`(Delayed) Still me — ${this.name}`);
            }, 1000);
        },
    };
})();

Greeter.greet();

//!console.log(greeting);                              // ❌ Uncaught ReferenceError: greeting is not defined


//* Reflection Questions

//? 1. Why can we not access greeting from outside?

//  📝 Explanation: greeting is a variable declared inside an Immediately Invoked Function Expression (IIFE).
//  • It is scoped to the function (function scope) and not attached to the global object.
//  • Variables declared with const, let, or var inside a function are not accessible outside that function.
//  • This is a common technique for creating private variables in JavaScript.
//  📓 Result: Trying to access greeting outside the IIFE throws a ReferenceError because it is not in the global or outer scope.

//? 2. What would happen if we used a regular function in setTimeout()?

//  📝 Explanation: In a regular function (non-arrow), the value of this is determined by how the function is called.
//  • In the case of setTimeout, the callback function is called with its own this (in browsers, it’s usually the window object, or undefined in strict mode).
//  • Therefore, this.name inside the regular function will not refer to the Greeter object. It will be undefined or refer to the global object.
//  📓 Result: It will log (Delayed) Still me — undefined (or possibly throw an error in strict mode).

//? 3. Why does this.name still work inside the arrow function?

//  📝 Explanation: Arrow functions do not have their own this. Instead, they capture the this value from the surrounding (enclosing) scope at the time they are created.
//  • In this case, the surrounding scope is the greet method, which is called as a method of the Greeter object (Greeter.greet()), so this refers to Greeter.
//  • Therefore, inside the arrow function, this.name still refers to the name property of the Greeter object.
//  📓 Result: It will log (Delayed) Still me — Sage.
