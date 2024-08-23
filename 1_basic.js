// ✅ Java Script
// JavaScript is a high-level language used to create dynamic and interactive web content by manipulating web elements and handling user events.

// ✅ Let, Var & Const
// 👉it is used for declare variable in js
// 👉Let & const were introduced in 2015 as new features of JavaScript. Before that, var was the only way to declare a variable.
// 👉Until 2015, Javascript versions were named by version number like ES1, ES2, ES3, etc., ES6 was the last Javascript version to be named in this way, and before the end of 2015 ES6 was renamed to ES2015 (ECMAScript 2015).

// ✅In JavaScript, there are three main types of scopes:
// 👉Global Scope
// 👉Function Scope
// 👉Block Scope

//⚠️ EX-1 var is function scoped
// When we declare a variable using var inside a function, we canot access the variable outside the function.

// function example() {
//     var x = 10;
//     console.log(x);
// }
// example();       // 10
// console.log(x);       // Throws ReferenceError: x is not defined

// 🤷‍♂️Reassignment and Redefinition using var
// 👉In JavaScript, the var keyword allows variables to be both reassigned and redefined within the same scope, unlike let which only allows reassignment.

//⚠️Ex-2 Re assignment using var
// var x = 10;
// console.log(x);    // Output : 10

// x = "Mayank";
// console.log(x);    // Output : Mayank

//⚠️ Ex-3 Re definition using var
// var x = 10;
// console.log(x);    // Output : 10

// var x = "Mayank";
// console.log(x);    // Output : Mayank


//✅ let
// 👉In JavaScript, the let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined.

// let x = 10;
// if (true) {
//     let y = 20;
//     console.log("The Value Of x", x); // Output: 10
//     console.log(y); // Output: 20
// }/

// console.log(x); // Output: 10
// console.log(y); // Throws ReferenceError: y is not defined

// Reassignment and Redefinition using let
// Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope.

// Re assignment using 'let'
// let x = 10;
// console.log(x);    // Output : 10

// x = "Mayank";
// console.log(x);    // Output : Mayank

// Re definition using 'let'
// let x = 10;

// let x = "Mayank";
// console.log(x);    // Output : Error!


//✅ const
//👉 In JavaScript, the const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.

// const x = 20;
// console.log(x);      // Output : 20

// x = 30;
// console.log(x);      // Output : Error!

// Constants declared with const must be initialized with a value. Unlike variables declared with var or let, which can be declared without immediately assigning a value, const requires initialization at the time of declaration.
// let x;      // No Error

// var y;      // No Error

// const z;    // Error! "Missing initializer in const declaration"


// It's important to note that while the value assigned to a constant cannot be changed, if the value is an object or an array, its properties or elements can still be modified. This is because const only prevents reassignment of the variable itself, not its properties or elements.

// const person = {
//     name: 'Mayank',
//     age: 21
// };

// console.log(person.name);    // Output: Mayank

// // Modifying object properties is allowed
// person.name = 'Love';
// console.log(person.name);    // Output: Love

// // Attempting to reassign the variable will throw an error
// person = {};    // Throws TypeError: Assignment to constant variable.

// Similarly with arrays...
// const numbers = [1, 2, 3];
// console.log(numbers);    // Output: [1, 2, 3]

// // Modifying array elements is allowed
// numbers.push(4);
// console.log(numbers);    // Output: [1, 2, 3, 4]

// // Attempting to reassign the variable will throw an error
// numbers = []; // Throws TypeError: Assignment to constant variable.
